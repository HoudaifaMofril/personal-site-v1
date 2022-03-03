import * as React from "react";
import Layout from "../layout";
import typography from "../utils/typography"
import {Helmet} from "react-helmet";
import imageTwitter from "../images/twitter_logo.svg"
import imageGitHub from "../images/github_logo.png"
import imageLinkedIn from "../images/linkedin_logo.png"
import imageMail from "../images/mail_logo.png"
const { rhythm } = typography

const AboutPage = () => {
    return (

            <Layout>
                <Helmet title="About" />
                <h1
                    css={{marginTop: rhythm(2/ 4),}}
                >Salut Internet</h1>
                <p>Je m'appelle Houdaïfa. Je suis Développeur Web.</p>
                <p>Je suis né, j'ai grandi et j'habite dans <a href="https://www.limoges.fr" target="_blank" rel="noreferrer">une ville magnifique du centre-ouest de la France.</a></p>
                <p>Après des études en marketing, je me suis intéressé à la programmation informatique.</p>
                <p>Je suis passionné par les relations humaines. Alors j'ai commencé <a href="https://www.institut-repere.com/" target="_blank" rel="noreferrer">mon cursus PNL</a>, l'autre programmation, que je finirais pour sûr.</p>
                <p>J'aime apprendre, j'aime lire, j'aime voyager, j'aime partager, j'aime discuter, j'aime manger.</p>
                <p>J'aime résoudre des problèmes complexes et j'aime la complexité de la vie.</p>
                <p>La vie est belle.</p>
                <div
                    css={{
                        display:"flex",
                        justifyContent:"center",
                    }}
                >
                    <a
                        css={{
                            width: rhythm(2),
                            height: rhythm(2),
                            marginRight:"10px",
                            borderRadius:"50%",
                        }}
                        href="https://twitter.com/HoudaifaMofril" target="_blank" rel="noreferrer" ><img src={imageTwitter} alt="logo-twitter" />
                    </a>
                    <a
                        css={{
                            width: rhythm(2),
                            height: rhythm(2),
                            marginRight:"10px",
                            borderRadius:"50%",
                        }}
                        href="https://github.com/HoudaifaMofril" target="_blank" rel="noreferrer"  ><img src={imageGitHub} alt="logo-github" />
                    </a>
                    <a
                        css={{
                            width: rhythm(2),
                            height: rhythm(2),
                            marginRight:"10px",
                            borderRadius:"50%",
                        }}
                        href="https://www.linkedin.com/in/houda%C3%AFfa-mofril/" target="_blank" rel="noreferrer"  ><img src={imageLinkedIn} alt="logo-linkedin" />
                    </a>
                    <a
                        css={{
                            width: rhythm(2),
                            height: rhythm(2),
                            marginRight:"10px",
                            borderRadius:"50%",
                        }}
                        href="mailto:mofrilhoudaifa87@gmail.com" target="_blank" rel="noreferrer"  ><img src={imageMail} alt="logo_mail" />
                    </a>
                </div>



            </Layout>


    )
}

export default AboutPage