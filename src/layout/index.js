import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import typography from "../utils/typography"
import "@fontsource/montserrat";

const rhythm = typography.rhythm
const scale = typography.scale


const NoStyleLink = (props) => (
    <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)
const Layout = (props) => {
    console.log(props.children)
    return (
        <div
            css={{
                minHeight: `100vh`,
                borderTop: `${rhythm(3 / 4)} solid #c5484d`,
                "@media (min-width: 420px)": {
                    border: `${rhythm(3 / 4)} solid #c5484d`,
                },
            }}
        >
            <div css={{ minHeight: rhythm(1) }}>
                <div
                    css={{
                        float: `left`,
                        marginTop: rhythm(3 / 4),
                        marginLeft: rhythm(3 / 4),
                        fontSize: scale(1 / 5).fontSize,
                        lineHeight: scale(0.2).lineHeight,
                    }}
                >
                    <NoStyleLink to="/" >Home</NoStyleLink>
                </div>
                <div
                    css={{
                        float: `right`,
                        marginTop: rhythm(3 / 4),
                        marginRight: rhythm(3 / 4),
                        fontSize: scale(1 / 5).fontSize,
                        lineHeight: scale(0.2).lineHeight,
                    }}
                >
                    <NoStyleLink to="/blog/">blog,</NoStyleLink>{" "}
                    <NoStyleLink to="/projets/">projets,</NoStyleLink>{" "}
                    <NoStyleLink to="/about/">about</NoStyleLink>
                </div>
                <div
                    css={{
                        padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
                        "@media (min-width: 420px)": {
                            padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
                        },
                        maxWidth: rhythm(22),
                        margin: `0 auto`,
                    }}
                >
                    <Helmet defaultTitle="" titleTemplate="Houdaïfa Mofril | %s" >
                        <html lang='fr'/>
                    </Helmet>
                    {props.children}

                </div>


            </div>


        </div>
    )
}

export default Layout