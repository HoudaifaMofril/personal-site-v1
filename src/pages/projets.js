import * as React from "react";
import Layout from "../layout";
import {Helmet } from "react-helmet";
import { Link } from "gatsby";

const ProjetsLink = (props) => (
    <Link css={{textDecoration: "none",}} target="_blank" rel="noreferrer" {...props} />
)


const ProjetsPage = () => {
    return (
        <Layout>
            <Helmet title="Projets" />
            <h1>Projets</h1>
            <ul css={{listStyleType:"none",}} >
                <li><ProjetsLink to="https://github.com/HoudaifaMofril/personal-site-v2/" >١{" "}houdaifamofril.com : Mon Site Personnel</ProjetsLink></li>
                <li><ProjetsLink to="https://github.com/HoudaifaMofril/HoudaifaMofril_7_26062021/" >١{" "}Groupomania: Réseau social d'entreprise</ProjetsLink></li>
                <li><ProjetsLink to="https://github.com/HoudaifaMofril/HoudaifaMofril_6_25_05_2021/" >١{" "}SoPekocko: Application de partage de sauces piquantes</ProjetsLink></li>
                <li><ProjetsLink to="https://github.com/HoudaifaMofril/HoudaifaMofril_5_22032021/" >١{" "}Orinoco: Site e-commerce</ProjetsLink></li>
                <li><ProjetsLink to="https://houdaifamofril.github.io/HoudaifaMofril_3_19012021/" >١{" "}Oh my Food !</ProjetsLink></li>
                <li><ProjetsLink to="https://houdaifamofril.github.io/HoudaifaMofril_2_17122020/" >١{" "}Reservia: Site d'hébergement</ProjetsLink></li>


            </ul>

        </Layout>
    )
}

export default ProjetsPage