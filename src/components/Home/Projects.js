import * as React from "react";
import {BigAndBlue, BodySection} from "./styledComponents";
import {Text} from "../Template/StyledComponents";

function header() {
    return <Text sx={{display: "block", margin: "auto"}}>Here are some of my most
        recent <BigAndBlue>Projects</BigAndBlue></Text>;
}


function Projects() {
    return (
        <BodySection id={"projects"} sx={{flexDirection: "column"}}>
            {header()}

        </BodySection>
    )
}

export default Projects
