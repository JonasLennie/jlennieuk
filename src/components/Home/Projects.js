import * as React from "react";
import {BigAndBlue, BodySection, CardContainer} from "./styledComponents";
import data from "./projects.json"

import {Text} from "../Template/StyledComponents";
import SimpleProjectCard from "./CustomCard";
import CustomCard from "./CustomCard";


function Header() {
    return <Text sx={{display: "block"}}>Here are some of my most
        recent <BigAndBlue>Projects</BigAndBlue></Text>;
}


function Cards() {
    return (
        <>
            {generateCards()}
        </>
    );
}

function generateCards() {
    return <>
        {data.projects.map((p) =>
            <CustomCard title={p.title} subheading={p.subheading} body={p.description} />
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
