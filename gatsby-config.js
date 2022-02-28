module.exports = {
    siteMetadata: {
        siteUrl: `https://www.houdaifamofril.com`,
        title:"Site personnel de Houdaïfa Mofril",
        author:"Houdaïfa Moril",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-mdx",
    ]
}