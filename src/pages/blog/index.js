import * as React from "react";
import Layout from "../../layout"
import { Link, graphql } from "gatsby";
import {Helmet } from "react-helmet";
import typography from "../../utils/typography";

import profilPicture from "../../images/houdaïfa_mofril_photo_profil.jpg";

const {rhythm, scale} = typography


const BlogList = (props) => {
    const posts = props.data.allMdx.edges
    const siteTitle = props.data.site.siteMetadata.title
    console.log(posts)
    console.log(siteTitle)


    return (
        <Layout location={props.location}>

            <Helmet title={siteTitle} />

            <ul
                css={{
                    marginBottom: 0,
                }}
            >
                {posts.map((post) => (
                    <li key={post.node.slug}>
                        <Link
                            css={{
                                textDecoration: "none",
                            }}
                            to={`/blog/${post.node.slug}`}
                        >
                            {post.node.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>

    )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "DD-MM-YYYY")
        }
        slug
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`;

export default BlogList