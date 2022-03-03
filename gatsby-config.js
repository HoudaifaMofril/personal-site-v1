module.exports = {
    siteMetadata: {
        siteUrl: `https://www.houdaifamofril.com`,
        title:"Site personnel de Houdaïfa Mofril",
        author:"Houdaïfa Moril",
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 800,
                        }
                    },

                ]
            }
        },
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/favicon.png",
            },
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-142514199-2", // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true, // Place the tracking script in the head (instead of in the body)
                anonymize: true, // Setting this parameter is also optional
                respectDNT: true, // (optional) Respect user's Do Not Track setting
            },
        },

    ]
}