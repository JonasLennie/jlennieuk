import * as React from "react";
import {StyledCard} from "./styledComponents";
import {Text} from "../Template/StyledComponents";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Component} from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardWidth: "calc(40vw - 10px * 2)",
            cardMaxWidth: "calc(500px - 10px * 2)",
            expanded: false
        };
    }

    expandToggle = () => {
        if (this.state.expanded) {
            this.setState({
                cardWidth: "calc(40vw - 10px * 2)",
                cardMaxWidth: "calc(500px - 10px * 2)",
                expanded: false
            })
        } else {
            this.setState({
                cardWidth: "calc(80vw - 10px * 2)",
                cardMaxWidth: "calc(1000px - 10px * 2)",
                expanded: true
            })
        }
    }


    render = () =>
        <StyledCard sx={{ width: this.state.cardWidth, maxWidth: this.state.cardMaxWidth }}>
            <CardContent>
                <Text sx={{fontSize: 30}}>{this.props.project.title}</Text>
                <Text>{this.props.project.subheading}</Text>
            </CardContent>


            <CardActions disableSpacing>
                <ExpandMore
                    expand={ this.state.expanded }
                    onClick={ this.expandToggle  }
                    aria-expanded={ this.state.expanded }
                    aria-label="show more"
                >
                    <ExpandMoreIcon sx={{color: "#E5E5E5"}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={ this.state.expanded } timeout="auto" unmountOnExit>
                <CardContent>
                    <Text>{this.props.project.description}</Text>
                </CardContent>
            </Collapse>
        </StyledCard>
}
