import * as React from "react";
import Layout from "../layout";
import typography from "../utils/typography"
const {rhythm} = typography


const AboutPage = () => {
    return (
        <Layout>
            <h1
                css={{marginTop: rhythm(2/ 4),}}
            >Salut Internet</h1>
            <p>Je m'appelle Houdaïfa. Je suis Développeur Web.</p>
            <p>Je suis né, j'ai grandi et j'habite dans <a href="https://www.limoges.fr">une ville magnifique du centre-ouest de la France.</a></p>
            <p>Après des études en marketing, je me suis intéressé à la programmation informatique.</p>
            <p>Je suis passionné par les relations humaines. Alors j'ai commencé <a href="https://www.institut-repere.com/">mon cursus PNL</a>, l'autre programmation, que je finirais pour sûr.</p>
            <p>J'aime apprendre, j'aime lire, j'aime voyager, j'aime partager, j'aime discuter, j'aime manger.</p>
            <p>J'aime résoudre des problèmes complexes et j'aime la complexité de la vie.</p>
            <p>La vie est belle.</p>
        </Layout>

    )
}

export default AboutPage