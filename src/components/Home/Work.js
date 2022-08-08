import * as React from "react";
import {BigAndBlue, BodySection} from "./styledComponents";

import WorkCard from "./WorkCard"
import workExp from "./workExp.json"
import {Text} from "../Template/StyledComponents";

function Work() {
    return (
        <BodySection id={"work"} direction={"column"}>
            <Text sx={{display:"block", fontSize: "20pt"}}>Here are some of the places I've <BigAndBlue>Worked</BigAndBlue></Text>

            {workExp.jobs.map((job) =>
            <WorkCard work={job}/>)}
        </BodySection>
    )
}

export default Work