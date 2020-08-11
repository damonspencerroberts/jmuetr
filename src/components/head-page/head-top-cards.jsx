import React from "react";

import Cards from "../card-folder/three-cards";
import headCards from "../../js-files/head-page/head-top-card-content";
import CreateButton from "../buttons/main-button";


const headTop = () => <div className = "head-github-container">
{Cards("head-github-title", "head-github-cards", "Github Resources", headCards, 4)}
{CreateButton("head-github-btn","https://github.com/","headTopBtn", "GO TO GITHUB")}
</div>


export default headTop;

