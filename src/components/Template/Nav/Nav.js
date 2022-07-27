import * as React from "react"
import {styled} from "@mui/material/styles"
import {Box, Typography} from "@mui/material";
import {ExternalLinks, LogoLink, PageLinks} from "./Links";
import {Horisontal} from "../StyledComponents";



const Nav = () => {
    return (
        <StyledNav>
            <LogoLink sx={{flexGrow: 1}}/>
            <PageLinks sx={{flexGrow: 8}}/>
            <ExternalLinks sx={{flexGrow: 1}}/>
        </StyledNav>
    )
}



export default Nav

// noinspection JSAnnotator
const StyledNav = styled(Horisontal) ({
    backgroundColor: "#242F40",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "center",
    alignText: "center",
    width: "100%",
    position: "-webkit-sticky",
    position: "sticky",
    overflow: "hidden",
    top: 0
})
