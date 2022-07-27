import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import * as React from "react";

export const Text = styled(Typography) ({
    padding: 10,
    fontSize: "larger",
    fontWeight: "bold",
    color: "#E5E5E5"
})

export const Image = ( { alt, src } ) => {
    return (
        <img alt={alt} src={src} style={{
            width: "auto",
            maxHeight: 45
        }} />
    )
}

export const Horisontal = styled(Box) ({
    display: "flex",
    flexDirection: "row",
    margin: "auto"
})
