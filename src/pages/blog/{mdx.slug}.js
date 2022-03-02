import * as React from "react";
import Layout from "../../layout";
import {graphql} from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";


import typography from "../../utils/typography"

import profilepic from "../../images/houdaïfa_mofril_photo_profil.jpg";

const {scale, rhythm} = typography

const BlogPost = (props) => {
    console.log(props.location)
    return (
        <Layout location={props.location} >
            <Helmet
                title={`${props.data.mdx.frontmatter.title}`}
                meta={[{name: "description", content: props.data.mdx.excerpt}]}
            />

            <h1 css={{ marginBottom: rhythm(1 / 4), marginTop: rhythm(2/ 4),}}>{props.data.mdx.frontmatter.title}</h1>
            <p
                css={{
                    ...scale(-1 / 4),
                    display: "block",
                }}
            >
                {props.data.mdx.frontmatter.date}
            </p>
            <MDXRenderer>
                {props.data.mdx.body}
            </MDXRenderer>

            <hr
                css={{
                    marginBottom: rhythm(1),
                }}
            />
            <p
                style={{
                    marginBottom: 0,
                }}
            >
                <img
                    src={profilepic}
                    alt="Becker's profile pic"
                    style={{
                        borderRadius: `100%`,
                        float: "left",
                        marginRight: rhythm(1 / 4),
                        marginBottom: 0,
                        width: rhythm(2),
                        height: rhythm(2),
                    }}
                />
                <strong>Houdaïfa Mofril</strong>, Limoges.
                <a href="https://twitter.com/houdaifamofril">
                    Follow me !
                </a>
            </p>
        </Layout>

    )
}
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "DD-MM-YYYY")
    }
    body
    excerpt
  }
}
`;
export default BlogPost