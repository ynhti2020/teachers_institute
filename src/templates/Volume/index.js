import React from 'react'
import { graphql } from 'gatsby'
import Breadcrumb from 'components/Breadcrumb/breadcrumb'
import Table_content from 'components/Table-contents/volumeNav'
import Layout from 'components/layout'
import React_icons from 'components/react-icons'
import NavControls from 'components/Nav-controls'

class VolumeTemplate extends React.Component {
  render() {
    // const { unitNav, unitPage, unitVol } = this.props.data

    const nav = this.props.data.nav.edges
    const navData = getVolNavData(nav)
    const page = this.props.pageContext.pageNode
    const pageIndex = page.frontmatter.unitTitle == 'Introduction' ? 1 : 0
    const x = navData[1].path
    const isMissingPage = page.frontmatter.isMissingPage == true

    return (
      <Layout>
        <main>
          <div className="region-content">
            <Breadcrumb unitPath={navData[pageIndex].path} />
            <h1 className="volume-title">{page.frontmatter.unitVolume}</h1>
            <aside>
              <div className="row">
                <div className="col-sm-4 mt-3 tc_aside">
                  <Table_content navData={navData} pageIndex={pageIndex} />
                </div>
                <div className="col-sm-7 mt-3 main_content pt-2">
                  <div className="unit-row">
                    <h2 className="unit-title">{page.frontmatter.unitTitle}</h2>
                    <p className="unit-author">
                      {pageIndex == 0 ? '' : page.frontmatter.unitAuthor}
                    </p>
                    {!isMissingPage && <React_icons unitPath={navData[pageIndex].path}/>}
                    <div dangerouslySetInnerHTML={{ __html: page.html }} />
                    <NavControls navData={navData} pageIndex={pageIndex} />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </Layout>
    )
  }
}

export default VolumeTemplate

export const VolumeQuery = graphql`
  query UnitVolumeQuery($navPath: String) {
    nav: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: $navPath } } }
      sort: { fields: [frontmatter___path], order: ASC }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            path
            unitTitle
            unitAuthor
          }
        }
      }
    }
  }
`

const getVolNavData = nav => {
  const itemsCount = nav.length
  var volNavItems = []
  // add preface link
  volNavItems.push({
    path: nav[0].node.frontmatter.path,
    title: nav[0].node.frontmatter.unitTitle,
    author: nav[0].node.frontmatter.unitAuthor,
  })
  // add intro link
  volNavItems.push({
    path: nav[itemsCount - 1].node.frontmatter.path,
    title: nav[itemsCount - 1].node.frontmatter.unitTitle,
    author: nav[itemsCount - 1].node.frontmatter.unitAuthor,
  })

  // add links to units in volume
  for (let i = 1; i < nav.length - 1; i++) {
    volNavItems.push({
      path: nav[i].node.frontmatter.path,
      title: nav[i].node.frontmatter.unitTitle,
      author: nav[i].node.frontmatter.unitAuthor,
    })
  }
  return volNavItems
}
