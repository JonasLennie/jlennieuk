import {Link} from "gatsby";
import logo from "../../../images/LogoTransparent.png";
import github from "../../../images/GitHub-Mark.png";
import linkedIn from "../../../images/LI-In-Bug.png";
import * as React from "react";
import {Horisontal, Image, Text} from "../StyledComponents";

export function PageLinks() {
    return (
        <Horisontal>
            <Link to={"#about"}><Text>About</Text></Link>
            <Link to={"#projects"}><Text>Projects</Text></Link>
            <Link to={"#work"}><Text>Work</Text></Link>
            <Link to={"#contact"}><Text>Contact</Text></Link>
        </Horisontal>
    )
}

export function LogoLink() {
    return (
        <Horisontal>
            <Link to={"/#home"}>
                <Image src={logo} alt={"logo"} />
            </Link>
        </Horisontal>
    )
}

export function ExternalLinks() {
    return (
        <Horisontal>
            <Link to={"https://github.com/JonasLennie"} sx={{maxHeight: "1vh"}} ><Image src={github} alt={"Github Logo"}/></Link>
            <Link to={"https://www.linkedin.com/in/jonas-lennie-258327220/"}><Image src={linkedIn} alt={"Linked In Logo"} /></Link>
            <Link to={"cv"}><Text>CV</Text></Link>
        </Horisontal>
    )
}