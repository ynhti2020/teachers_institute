const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const VolumeTemplate = path.resolve('./src/templates/Volume/index.js')
const UnitTemplate = path.resolve('./src/templates/Units/index.js')
const PageTemplate = path.resolve('./src/templates/Page/index.js')
const ChildProcess = require('child_process');

// add the following to try to fix Netlify exceeded build time of 30 minutes
//   see: https://github.com/gatsbyjs/gatsby/issues/9465

exports.onPostBuild = () => {
   ChildProcess.execSync("ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill");
 };

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            unitPages: allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "unit" } } }
              sort: { fields: [frontmatter___path], order: ASC }
            ) {
              edges {
                node {
                  html
                  fileAbsolutePath
                  frontmatter {
                    path
                    title
                    unitTitle
                    unitAuthor
                  }
                }
              }
            }

            volumePages: allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "volume" } } }
              sort: { fields: [frontmatter___path], order: ASC }
            ) {
              edges {
                node {
                  html
                  frontmatter {
                    path
                    unitVolume
                    unitTitle
                    unitAuthor
                  }
                }
              }
            }

            nonUnitPages: allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "page" } } }
            ) {
              edges {
                node {
                  fileAbsolutePath
                  html
                  frontmatter {
                    title
                    path
                    layout
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          // console.log(errors)
          reject(errors)
        }

        //        const items = data.allJsFile.edges
        const unitItems = data.unitPages.edges
        const nonUnitItems = data.nonUnitPages.edges
        const volumeItems = data.volumePages.edges

        var noPageNode = {
          html:
            '<h4>Guide Entry</h4><main><p><b>There is no Guide for this curriculum unit.</b></p><p>Plese select Next to continue to the next section.</p></main>',
          frontmatter: {
            path: '',
            title: '',
            unitTitle: '',
            unitAuthor: '',
            isMissingPage: true,
          },
        }
        //=======================
        // Get guide pages.
        //=======================
        const guideNodes = unitItems.filter(({ node }) =>
          /curriculum\/guides/.test(node.frontmatter.path)
        )

        //=======================
        // Get unit pages.
        //=======================
        const unitNodes = unitItems.filter(({ node }) =>
          /curriculum\/units/.test(node.frontmatter.path)
        )

        each(unitNodes, ({ node }) => {
          //          if (!node.remark) return
          // get path  eg: /curriculum/units/1998/1/98.01.01.x.html
          //          const { path } = node.frontmatter
          var pathSplit = node.frontmatter.path.split('/')
          var basename = pathSplit.pop()
          // console.log('basename: ' + basename)

          // get the guide page for the unit page
          let guidePattern = new RegExp(basename)
          guidePage = guideNodes.find(n =>
            guidePattern.test(n.node.frontmatter.path)
          )

          const navPathDir = pathSplit.join('/') + '/'
          const navPath = navPathDir + basename
          const volPath =
            // navPathDir +
            basename.split('.')[0] +
            '.' +
            basename.split('.')[1] +
            '.intro.x.html'

          // get the unitVolume for the unit page
          let volumePattern = new RegExp(volPath)
          volumePage = volumeItems.find(n =>
            volumePattern.test(n.node.frontmatter.path)
          )

          // get the navData from the unit page
          let navData = getUnitNavItems(node.frontmatter.path, node.html)

          // then determine the number of unit pages to create
          let pageCount = getPageCount(node.frontmatter.path, node.html) + 1


          // if this is not the 1st page of the unit then remove .x.html from filename and add /pagenumber
          var pagePath = ''
          for (let i = 0; i < pageCount; i++) {
            if (i == 0) {
              // guidepage
              if (guidePage == undefined) {
                pagePath = node.frontmatter.path
                pagePath = pagePath.replace('/units/', '/guides/')
                noPageNode.frontmatter.path = pagePath
                noPageNode.frontmatter.title =
                  'Guide Entry ' + basename.replace('.x.html', '')
                noPageNode.frontmatter.unitTitle = node.frontmatter.unitTitle
                noPageNode.frontmatter.unitAuthor = node.frontmatter.unitAuthor

                pageHtml = noPageNode.html
                frontmatter = noPageNode.frontmatter
                console.log('WARN: Guide page is missing: ' + pagePath)
              } else {
                pagePath = guidePage.node.frontmatter.path
                pageHtml = guidePage.node.html
                frontmatter = guidePage.node.frontmatter
              }
            } else if (i == 1) {
              // 1st unit page
              pagePath = node.frontmatter.path
              pageHtml = node.html
              frontmatter = node.frontmatter
            } else {
              // all additional unit pages
              pagePath = node.frontmatter.path.split('.x.html')[0]
              pageHtml = node.html
              frontmatter = node.frontmatter
            }

            pageHtml = getPageHtml(i, pagePath, pageHtml)

            // check to see if the page contains math 
            // check to see if unit is 2019 or newer and page contains math eg: \(\hat{p}\)
            var isMathPage = false;
            year = parseInt(pagePath.split('/')[3])
            if (year >= 2019) {
              if (pageHtml.html.match(/(?:\\\(|\\\[|\\begin\{.*?})/)) {
                isMathPage = true;
                console.log('Found MathJax page: ' + node.frontmatter.path + '/' + i);
              }
            }
            
            unitVolume = volumePage.node.frontmatter.unitVolume

            createPage({
              path: path.resolve(pagePath, i < 2 ? '' : i.toString()),
              component: UnitTemplate,
              context: {
                pageIndex: i,
                navData: navData,
                pagePath: path.resolve(`${String(node.frontmatter.path)}`),
                unitVolume: unitVolume,
                frontmatter: frontmatter,
                pageHtml: pageHtml,
                isMathPage: isMathPage,
              },
            })
          }
        })

        //=======================
        // Create Volume pages.
        //=======================
        each(volumeItems, ({ node }) => {
          const pagePath = node.frontmatter.path

          if (/intro.x.html$/.test(pagePath)) {
            isIntro = true
            navPath = path.dirname(pagePath) + '/'
          } else {
            isIntro = false
            navPath = pagePath
          }

          // console.log(navPath)
          createPage({
            path: pagePath, //.resolve(`${String(node.frontmatter.path)}`),
            component: VolumeTemplate,
            context: {
              navPath: navPath, //`/curriculum/units/1998/1/98.01.preface.x.html`,
              pageNode: node,
            },
          })

          // Redirect preface page: 
          // if it is a preface page (not intro page) create a redirect from preface.x.html page to volume root (preface) page
          // if (!isIntro) {
          //   p = pagePath.split('/')
          //   if (p[4].length < 2) {
          //     v = '0' + p[4]
          //   } else {
          //     v = p[4]
          //   }
          //   prefacePath =
          //     pagePath + p[3].substring(2, 4) + '.' + v + '.preface.x.html'
          //   createRedirect({ fromPath: prefacePath, toPath: pagePath })
          // }
        })

        //=======================
        // Create default pages.
        //=======================
        const pages = nonUnitItems.filter(({ node }) =>
          /page/.test(node.frontmatter.layout)
        )
        each(pages, ({ node }) => {
          // if (!node.remark) return
          const pagePath = path.resolve(node.frontmatter.path)
          // const PageTemplate = path.resolve(node.frontmatter.path)
          createPage({
            path: pagePath,
            component: PageTemplate,
            context: {
              node: node,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty"
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}

const getPageCount = (pagePath, html) => {
  let year = parseInt(pagePath.split('/')[3])

  // unit page if index is > 0
  if (pagePath.split('/')[2] == 'units') {
    if (year < 2015) {
      let i = html.indexOf('<ul>')
      let s = html.substring(html.indexOf('<li>', i) + 4, html.indexOf('</ul>'))
      let items = s.split('<li>')
      if (items.length < 2) {
        return 1
      }
      // unit page < 2015
      return items.length
    } else {
      // unit page >= 2015
      let s = html.substring(html.indexOf('<main>'))
      // check if page has a narrative/intro section at the top of the page with no <h2> title
      var narrativePage = 0
      if (html.indexOf('<h2>') > html.indexOf('<', 5)) {
        // console.log(
        //   '*** Page has narrative/intro with no <h2> title tag ***  -  ' +
        //     pagePath
        // )
        narrativePage = 1
      }
      let items = s.split('<h2>')
      let pageCount = 0
      if (items.length < 2) {
        return 1 + narrativePage
      }
      return items.length - 1 + narrativePage
    }
  }
  return 1
}

const getUnitNavItems = (path, html) => {
  // eg paths: /curriculum/units/1998/1/98.01.01.x.html/2
  //          /curriculum/guides/1998/1/98.01.01.x.html
  var pathArray = path.split('/')
  // if path has a page then remove it (eg. 98.01.01.x.html/2)
  if (pathArray[pathArray.length - 1].length < 3) {
    pathArray.pop()
  }
  let year = parseInt(pathArray[3])

  // remove the curriculum and units or guides paths from the beginning of the path
  pathArray.shift()
  pathArray.shift()
  pathArray.shift()
  let unitGuidesPath = '/curriculum/guides/' + pathArray.join('/')
  let unitPath = '/curriculum/units/' + pathArray.join('/')
  var unitNavItems = []
  var pageItems = []
  var i
  if (year < 2015) {
    let i = html.indexOf('<ul>')
    let s = html.substring(html.indexOf('<li>', i) + 4, html.indexOf('</ul>'))
    let items = s.split('<li>')
    for (let item of items) {
      pageItems.push(item.split('</li>')[0].trim())
    }
  } else {
    // year >= 2015
    let s = html.substring(html.indexOf('<main>'))
    let items = s.split('<h2>')

    // check if page has a narrative/intro section at the top of the page with no <h2> title
    // if so, then add a page heading to the nav to get back to that page (call it 'Curriculum Unit')
    if (html.indexOf('<h2>') > html.indexOf('<', 5)) {
      // console.log(
      //   '*** Page has narrative/intro with no <h2> title tag ***  -  '
      // )
      pageItems.push('Curriculum Unit')
    }

    items.shift()
    for (let item of items) {
      item = item.split('</h2>')[0]
      item = item.replace(/\s*<[/]?strong>\s*/gi, ' ')
      pageItems.push(item.trim().trim('_'))
    }
  }
  unitNavItems.push({ path: unitGuidesPath, title: 'Unit Guide' })
  unitNavItems.push({ path: unitPath, title: pageItems[0] })
  for (let i = 2; i <= pageItems.length; i++) {
    // Remove <strong> or <span> or <sup> tags from nav items
    //  also remove <i> and <em>
    title = pageItems[i - 1]
    title = title.replace(/\s*<[/]?i>\s*/gi, ' ')
    title = title.replace(/\s*<[/]?em>\s*/gi, ' ')
    title = title.replace(/\s*<[/]?strong>\s*/gi, ' ')
    title = title.replace(/\s*<[/]?span>\s*/gi, ' ')
    title = title.replace(/\s*<sup>\s*.*\s*<\/sup>\s*/gi, ' ')
    
    unitNavItems.push({
      path: unitPath.split('.x.html')[0] + '/' + i,
      title: title,
    })
  }
  return unitNavItems
}

const getPageHtml = (pageIndex, pagePath, html) => {
  let year = parseInt(pagePath.split('/')[3])
  var page = {}

  // unit page if index is > 0   (guide page is index 0)
  // if (pagePath.split('/')[2] == 'units') {
  if (pageIndex > 0) {
    if (year < 2015) {
      let pages = html.split('<hr/>')
      if (pages.length < 2) {
        return { title: null, html: html.trim() }
      }
      // unit page < 2015
      // note: changed header tag split on h3 to h2
      // if there is an <h2> tag then get the title and content
      let p = pages[pageIndex + 1]
      try {
        i = p.indexOf('<h2>')
      }  
      catch(err) {
        console.log(pagePath + ' --- ' + err)
        return { title: '--- ERROR ---', html: '' }
      }
      
      // 4-25-2019 AS: find all relative images paths and change to full path
      p = p.replace(/[.]{2}[/][.]{2}[/][.]{2}[/]images[/]/gi, "/curriculum/images/")

      if (i >= 0) {
        j = p.indexOf('</h2>')
        title = p.substring(i + 4, j).trim()
        p = p.substring(j + 5).trim()
        page = { title: title, html: p }       
      } else {
        // don't show <h2> header if the page did not have one
        // let title = pages[1]
        //   .split('<li>')
        //   [pageIndex].split('</li>')[0]
        //   .trim()
        page = { title: '', html: pages[pageIndex + 1].trim() }
      }
    } else {
      // unit page >= 2015
      let pages = html.split('<h2>')

      var title = ''
      // check if there is no <h2> title tag

      // console.log("((((((((((((((((((((( getPageHtml - HERE ))))))))))))))))))))")
      // console.log("index= " + pageIndex + "\n")
      // console.log("page: " + pages[pageIndex].slice(0, 100))

      if (html.indexOf('<h2>') > html.indexOf('<', 5)) {
        // console.log('*** Page has narrative/intro with no <h2> title tag *** ')
        pageIndex = pageIndex - 1
      }

      if (pageIndex == 0) {
        page = { title: '', html: pages[0].trim() }
      } else {
        try {
          title = pages[pageIndex].split('</h2>')[0].trim()
          // if the title is wrapped in a <strong> or <span> tag then remove it
          title = title.replace(/\s*<[/]?strong>\s*/gi, ' ')
          title = title.replace(/\s*<[/]?span>\s*/gi, ' ')
        } catch (err) {
          // console.log('***ERROR*** finding title on page: ' + err)
        }
        page = {
          title: title.trim(),
          html: pages[pageIndex].split('</h2>')[1].trim(),
        }
        // console.log(page)
      }
    }
  } else {
    // otherwise it is a guide page
    let unitName = pagePath.slice(pagePath.lastIndexOf('/') + 1, -7)
    let title = 'Guide Entry to ' + unitName
    // console.log(title)
    if (year < 2015) {
      page = { title: title, html: html.split('</h4>')[1].trim() }
    } else {
      // if it has a <main> section it is a 2015 or newer
      page = {
        title: title,
        html: html
          .split('<main>')[1]
          .split('</main>')[0]
          .trim(),
      }
    }
    // console.log(page)
  }
  return page
}
