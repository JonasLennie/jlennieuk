import * as React from "react"
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {Image, Text} from "./StyledComponents";
import {ExternalLinks} from "./Nav/Links";
import UpArrow from "../../images/up-arrow.png"

const Footer = () => {
    return (
        <StyledFooter>
            {mailTo()}
            <ExternalLinks/>
            {copyright()}
            {jumpToTop()}
        </StyledFooter>
    )
}

export default Footer;

function mailTo() {
    return <a href={"mailto:contact@jlennie.uk"}>
        <Text>contact@jlennie.uk</Text>
    </a>;
}

function copyright() {
    return <Text>© Jonas Lennie</Text>;
}

function jumpToTop() {
    return <a href={"/#home"}><Image src={UpArrow} alt={"Link To Top Of Page"}/></a>;
}

const StyledFooter = styled(Box) ({
    display: "Flex",
    flexDirection: "column",
    backgroundColor: "#242F40",
    padding: 50
})
