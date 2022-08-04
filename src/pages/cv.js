import React, {useEffect} from 'react';
import {Box} from "@mui/material";

import cv from "../images/jonas-lennie-cv.svg";
import cvDownload from "../downloads/jonas-lennie-cv.pdf"

function CV() {
    useEffect(() => {
        document.title = 'CV - Jonas Lennie | Developer';
    });

    return (
        <Box sx={{
            width: "100%",
            backgroundColor: "#000000",
            minHeight: "100vh"
        }}>
            <a href={cvDownload} download>
                <img src={cv} alt={"Jonas Lennie's CV"} width={"60%"} style={{backgroundColor: "#FFFFFF", margin: "auto", display: "block"}}/>
            </a>
        </Box>
    )
}

export default CV
