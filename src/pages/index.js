import React from "react";
import { Link } from "gatsby";
import { scale, rhythm } from "../utils/typography";
import { Helmet } from "react-helmet";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";



const NoStyleLink = (props) => (
    <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)

const whitish = `#deeaf3`

const Index = () => {

    return (
        <div>
            <Helmet title= "Houdaïfa Mofril | Home" >
                <html lang='fr'/>



            </Helmet>

            <div css={{
                background:whitish,
                height:"100vh",
            }} >
                <div
                    css={{
                        position: `absolute`,
                        left: `33.333%`,
                        width: rhythm(1),
                        height: `22vh`,
                        zIndex: 10,
                        backgroundColor: whitish,
                        borderBottomRightRadius: ``,
                    }}
                />
                <div
                    css={{
                        position: `absolute`,
                        left: `33.33%`,
                        bottom: 0,
                        width: rhythm(1),
                        height: `24vh`,
                        zIndex: 10,
                        background: whitish,
                        borderTopLeftRadius: ``,
                    }}
                />
                <div
                    css={{
                        display:"flex",
                        justifyContent: `center`,
                        alignItems: `center`,
                        background: `#c5484d`,
                        position:"absolute",
                        margin: rhythm(3 / 4),
                        top:0,
                        bottom:0,
                        left:0,
                        right:0,
                        fontWeight: 600,

                    }}
                >
                    <h1
                        css={{
                            width: `80%`,
                            color: whitish,
                            fontWeight: 800,
                            fontSize: scale(5 / 5).fontSize,
                            lineHeight: 1.1,
                            "@media (min-width: 420px)": {
                                fontSize: scale(7 / 5).fontSize,
                            },
                            "@media (min-width: 768px)": {
                                fontSize: scale(10 / 5).fontSize,
                            },
                        }}
                    >
                        <span css={{ fontWeight: 400 }}>Bienvenue au</span> Domicile Internet Personnel
                        <span css={{ fontWeight: 400 }}> de Houdaïfa Mofril</span>
                    </h1>
                </div>
                <div
                    css={{
                        color: whitish,
                        position: `absolute`,
                        top: rhythm(1.5),
                        zIndex: 10,
                        transform: `rotate(90deg)`,
                        transformOrigin: `left top 0`,
                        left: rhythm(2.5),
                        fontSize: scale(2 / 5).fontSize,
                        lineHeight: scale(2 / 5).lineHeight,
                        "@media (min-width: 450px)": {
                            left: rhythm(1.5),
                            transform: `none`,
                        },
                    }}
                >
                    <NoStyleLink to="/">Home</NoStyleLink>
                </div>
                <div
                    css={{
                        color: whitish,
                        position: `absolute`,
                        right: rhythm(1.5),
                        top: rhythm(1.5),
                        zIndex: 10,
                        fontSize: scale(2 / 5).fontSize,
                        lineHeight: scale(2 / 5).lineHeight,
                        "@media (max-width: 450px)": {
                            display:"flex",
                            flexDirection:"column",
                        },
                    }}
                >

                    <NoStyleLink to="/blog/">blog,</NoStyleLink>{" "}
                    <NoStyleLink to="/projets/">projets,</NoStyleLink>{" "}
                    <NoStyleLink to="/about/">about</NoStyleLink>

                </div>


            </div>

        </div>

    )
}

export default Index