import * as React from "react";
import {BigAndBlue, BodySection, CardContainer} from "./styledComponents";
import ExpandableCard from "./ProjectCard";
import data from "./projects.json"

import {Text} from "../Template/StyledComponents";


function Header() {
    return <Text sx={{display: "block"}}>Here are some of my most
        recent <BigAndBlue>Projects</BigAndBlue></Text>;
}


function Cards() {
    return (
        <CardContainer>
            {generateCards()}
        </CardContainer>
    );
}

function generateCards() {
    return <>
        {data.projects.map((p) =>
            <ExpandableCard project={p} />
        )}
    </>
}



function Projects() {
    return (
        <BodySection id={"projects"} direction={"column"}>
            <>
                <Header />
                <Cards />
            </>
        </BodySection>
    )
}

export default Projects
