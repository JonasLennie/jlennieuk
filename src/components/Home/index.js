import * as React from "react";
import {Box} from "@mui/material";

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Work from "./Work";

function Home() {
    return (
        <Box>
            <About/>
            <Projects/>
            <Work/>
            <Contact/>
        </Box>
    )
}

export default Home