/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://quirky-kepler-11b926.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-postcss', 
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://quirky-kepler-11b926.netlify.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        id: "UA-146082552-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
              resolve: `gatsby-remark-images`,
              options: {
                  maxWidth: 590,
              },
          },
        ],
      }
    }
  ]
}
