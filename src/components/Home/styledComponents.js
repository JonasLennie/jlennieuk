import * as React from "react";
import {Box, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Text} from "../Template/StyledComponents";

export const BodySection = (props) => {
    return (
        <Box sx={{
            // minHeight: "calc(100vh - 75px)",
            display: "flex",
            gap: 2,
            marginTop: 3,
            marginBottom: 3
        }}
        >
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

export const BigAndBlue = styled(Text) `
  padding: 6px 0;
  background: #242F40; /* Set the lines background */
  box-shadow:
          5px 0 0 #242F40, /* Set the rows right padding  */
          -5px 0 0 #242F40; /* Set the rows left padding */
  font-size: 30px;
  margin: 10px 10px;
  line-height: 40px;
  display: inline;
`

export const NewButton = (props) => {
    return (
        <Button sx={{color: "#E5E5E5",
            backgroundColor: "#CCA43B",
            display: "block",
            margin: "auto"}}>
            <Text>{props.children}</Text>
        </Button>
    )
}