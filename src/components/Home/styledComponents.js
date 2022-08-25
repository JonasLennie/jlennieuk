import * as React from "react";
import {Box, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Text} from "../Template/StyledComponents";
import Card from "@mui/material/Card";

export const BodySection = (props) => {
    return (
        <Box>
        <Anchor id={props.id} />
            <Box sx={{
                minHeight: "calc(100vh - 75px)",
                display: "flex",
                gap: 2,
                marginTop: 15,
                marginBottom: 15,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: props.direction,
                margin: "auto",
            }}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export const Anchor = styled("a") ({
    display: "block",
    position: "relative",
    top: "-75px",
    visibility: "hidden"
})

export const CardContainer = styled(Box) `
  width: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
`

export const StyledCard = styled(Card)`
  width: calc(80vw - (10px * 2));
  max-width: calc(1000px - 10px * 2);
  margin: 10px;
  background-color: #242F40;
  color: #E5E5E5;
`

export const StyledProjectCard = styled(Card)`
  min-height: calc(30vh - 10px * 2);
  width: calc(40vw - 10px * 2);
  max-width: calc(500px - 10px * 2);
  margin: 10px;
  background-color: #242F40;
  color: #E5E5E5;
  display:inline-block;
`



export const BigAndBlue = styled(Text) `
  padding: 6px 0;
  background: #242F40; /* Set the lines background */
  box-shadow:
          5px 0 0 #242F40, /* Set the rows right padding  */
          -5px 0 0 #242F40; /* Set the rows left padding */
  font-size: 40px;
  margin: 10px 10px;
  line-height: 50px;
  display: inline;
`

export const YellowLink = styled('a')`
    color: #CCA43B;
`

export const NewButton = (props) => {
    return (
        <Button sx={{color: "#E5E5E5",
            backgroundColor: "#CCA43B",
            display: "block",
            margin: "auto"}}>
            <Text sx={{fontSize: 28}}>{props.children}</Text>
        </Button>
    )
}