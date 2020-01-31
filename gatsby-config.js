// const queries = require('./src/utils/algolia')
// require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: "Teacher's Institute",
    description: "Yale New Haven Teacher's Intitute Site",
    siteUrl: 'http://teachersinstitute.yale.edu/',
    author: '',
    twitter: ''
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-zopfli',
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/curriculum/`,
        name: 'units',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          // CommonMark mode (default: true)
          commonmark: false,
          // Footnotes mode (default: true)
          footnotes: false,
          // Pedantic mode (default: true)
          pedantic: false,
          // GitHub Flavored Markdown mode (default: true)
          gfm: false,
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
        ],
      },
      
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-meta-redirect',
  ],
}
