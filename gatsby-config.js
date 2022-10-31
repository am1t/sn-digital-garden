module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
        rootNote: `/index`,
        parseWikiLinks: true,
      },
    }
  ],
  siteMetadata: {
    title: `@amit's notes`,
    author: "Amit Gawande",
    description: "Notes on my unformed thoughts.",
  }
}
