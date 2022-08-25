import * as React from "react";
import {BodySection, BigAndBlue, NewButton} from "./styledComponents";
import {Box} from "@mui/material";
import {Text} from "../Template/StyledComponents";


function About() {
    return (
        <BodySection id={"about"} direction={"row"}>
            {/*<Box sx={{flex: 3}}>*/}
            {/*    <img src={Placeholder} alt={"Generic developer Image"} width={"100%"} height={"auto"} sx={{margin: "auto"}}/>*/}
            {/*</Box>*/}

            <Waffle sx={{maxWidth: "60%"}}/>
        </BodySection>
    )
}



const Waffle = () => {
    return (
        <Box sx={{margin: "auto"}}>
        <Text>Hi, I'm </Text>

            <BigAndBlue sx={{marginLeft: 5}}> Jonas Lennie</BigAndBlue>

            <br />
            <br />

            <Text sx={{marginLeft: 10, fontSize: "20pt"}}>I'm a Second-year Computer Scientist at <BigAndBlue>UCL</BigAndBlue>
                <br />
                <br />

                I'm passionate about anything Technology.
                From building websites, to working with networks or distributed systems and even information security.
                I love any challenging technical problem, and If you're looking for someone like me, then,
            </Text>

            <br />
            <br />

            <a href={"#contact"}><NewButton sx={{zIndex:-1}}>Get In Touch</NewButton></a>

        </Box>
    )
}

export default About
