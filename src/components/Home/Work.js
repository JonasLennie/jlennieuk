import * as React from "react";
import {BigAndBlue, BodySection} from "./styledComponents";

import workExp from "./workExp.json"
import {Text} from "../Template/StyledComponents";
import CustomCard from "./CustomCard";

function Work() {
    return (
        <BodySection id={"work"} direction={"column"}>
            <Text sx={{display:"block", fontSize: "20pt"}}>Here are some of the places I've <BigAndBlue>Worked</BigAndBlue></Text>

            {workExp.jobs.map((job) =>
            <CustomCard title={job.role} subheading={job.time} body={job.description}/>)}
        </BodySection>
    )
}

export default Work