module.exports = {
  siteMetadata: {
    title: `StrykówPC`,
    siteUrl: `https://www.strykowpc.pl`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "StrykówPC",
        short_name: "StrykówPC",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#005b99",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon-32x32.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.strykowpc.pl',
        sitemap: 'https://www.strykowpc.pl/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ]
};