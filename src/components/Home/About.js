import * as React from "react";
import {BodySection, BigAndBlue, NewButton} from "./styledComponents";
import {Box} from "@mui/material";
import {Text} from "../Template/StyledComponents";
import Placeholder from "../../images/web-development.png"


function About() {
    return (
        <BodySection id={"about"}>
            <Box sx={{flex: 3}}>
                <img src={Placeholder} alt={"Generic developer Image"} width={"100%"} height={"auto"} sx={{margin: "auto"}}/>
            </Box>

            <Waffle sx={{maxWidth: "60%"}}/>
        </BodySection>
    )
}



const Waffle = () => {
    return (
        <Box sx={{flex: 4}}>
        <Text>Hi, I'm </Text>

            <BigAndBlue sx={{marginLeft: 5}}> Jonas Lennie</BigAndBlue>

            <Text sx={{marginLeft: 10}}>I'm a Second-year Computer Scientist at <BigAndBlue>UCL</BigAndBlue>
                <br />

                I'm passionate about anything Technology.
                From building websites, to working with networks or distributed systems and even information security.
                I love any challenging technical problem, and If you're looking for someone like me, then,
            </Text>

            <NewButton>Get In Touch</NewButton>

        </Box>
    )
}

export default About
