require("dotenv").config("./.env");
const sanityConfig = require("./sanity-config");
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Gatsby-Sanity",
    description: "Home Page Description",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-TCDP5RW10T", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "GTM-T8MBJQX",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional          
          origin: "https://gatsbypromain.gatsbyjs.io/",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        // Specify the API key for your Posthog Project (required)
        // apiKey: "phc_RTmH4J8QRMDOrvF05HFOufKwU004g0QQE2jezSDQr8H",
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        // apiHost: "https://app.posthog.com",
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        
      },
    },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: '',
    //   },
    // },
  ],
};
