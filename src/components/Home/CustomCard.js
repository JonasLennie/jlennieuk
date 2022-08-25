import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import {StyledCard} from "./styledComponents";
import {Text} from "../Template/StyledComponents";

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

export default function CustomCard( { title, subheading, body } ) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledCard
            expand={expanded}
            onClick={handleExpandClick}>
            <CardContent>
                <Text sx={{fontSize: 30}}>{title}</Text>
                <Text sx={{fontSize: 20}}>{subheading}</Text>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Text>{body}</Text>
                </CardContent>
            </Collapse>
        </StyledCard>
    );
}