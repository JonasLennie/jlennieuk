import React from 'react';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

import "./index.css";

import Nav from "./Nav/Nav";
import Footer from "./Footer";

const Template = (props) => {
    return (
        <StyledTemplate id={"home"}>
            {NavBodyFooter(props)}
        </StyledTemplate>
    )
}

export default Template

function NavBodyFooter(props) {
    return <>
        <NavAndBody>
            {props.children}
        </NavAndBody>

        <Footer/>
    </>;
}

function NavAndBody(props) {
    return (
        <HeadOfPage>
            <Nav/>
            <BodyWrapper>
                {props.children}
            </BodyWrapper>
        </HeadOfPage>
    );
}

const StyledTemplate = styled(Box) ({
    color: "#E5E5E5",
    backgroundColor: "#0C1821",
    textAlign: "center",
    height: "100%"
})

const BodyWrapper = styled(Box) ({
    width: "80%",
    maxWidth: "1000px",
    textAlign: "left",
    margin: "auto"
})

const HeadOfPage = styled(Box) ({
    minHeight: "100vh"
})
