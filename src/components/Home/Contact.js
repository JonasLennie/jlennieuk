import * as React from "react";
import {BigAndBlue, BodySection, NewButton, YellowLink} from "./styledComponents";
import {Text} from "../Template/StyledComponents";

function Contact() {
    return (
        <BodySection id={"contact"}>
            <Text sx={{fontSize: 25}}>
                There are loads of ways to <BigAndBlue>Reach Me</BigAndBlue>
                <br />
                <br />
                You can contact me on <YellowLink href={"https://linkedin.com/in/jlennie.uk"}>LinkedIn</YellowLink>, check out my <YellowLink href={"https://github.com/JonasLennie"}>GithHub</YellowLink>, and feel free to grab my <YellowLink href={"/cv"}>CV</YellowLink>.
                <br />
                <br />
                And if you're interested in working with me, then get in touch at <YellowLink>contact@jlennie.uk</YellowLink>, or hit the button below.
                <br /><br />
                <a href={"mailto:contact@jlennie.uk"}><NewButton>Email Me</NewButton></a>

            </Text>
        </BodySection>
    )
}

export default Contact
