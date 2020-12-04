import React, { Fragment } from "react";
import { Nav } from 'react-bootstrap';
import "./LeftNav.scss";

interface ILeftNavProps {};

const LeftNav: React.FC<ILeftNavProps> = (props: ILeftNavProps) => {
    return (
        <Fragment>
            <div className="appBrand">

            </div>
            <Nav defaultActiveKey="/appointments" className="flex-column appNav">
                <Nav.Link href="/notifications">Notifications</Nav.Link>
                <Nav.Link href="/appointments">Appointments</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/wallet">Wallet</Nav.Link>
                <Nav.Link href="/catalog">Catalog</Nav.Link>
                <Nav.Link href="/reports">Reports</Nav.Link>
                <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
            <div className="appProfile">
                <div className="image"></div>
                <div className="name">John Doe</div>
                <div className="icon"></div>
            </div>
        </Fragment>
    );
};

export default LeftNav;