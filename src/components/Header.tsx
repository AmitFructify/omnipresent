import React from "react";
import "./Header.scss";
import { Container, Row } from 'react-bootstrap';

interface IHeaderProps{
    children?: any;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <Container fluid className="header"><Row>{props.children}</Row></Container>
    );
};

export default Header;