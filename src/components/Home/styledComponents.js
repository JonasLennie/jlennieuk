import * as React from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

export const BodySection = (props) => {
    return (
        <Box sx={{minHeight: "80vh"}}>
            <Anchor id={props.id} />
            {props.children}
        </Box>
    )
}

export const Anchor = styled("a") ({
    display: "block",
    position: "relative",
    top: "-75px",
    visibility: "hidden"
})