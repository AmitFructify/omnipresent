import React, { Fragment } from "react";
import "./LeftNav.scss";
import { NavLink } from "react-router-dom";

interface ILeftNavProps {};

const LeftNav: React.FC<ILeftNavProps> = (props: ILeftNavProps) => {
    return (
        <Fragment>
            <div className="appBrand">
                <div className="logo"></div>
                <div className="name">
                    <div className="app">Omni Present</div>
                    <div className="owner">by LIVSPACE</div>
                </div>
            </div>
            <div className="appNav">
                <NavLink activeClassName="active" to="/notifications">Notifications</NavLink>
                <NavLink activeClassName="active" to="/appointments">Appointments</NavLink>
                <NavLink activeClassName="active" to="/orders">Orders</NavLink>
                <NavLink activeClassName="active" to="/wallet">Wallet <span>&#x20B9; 1,50,000</span></NavLink>
                <NavLink activeClassName="active" to="/catalog">Catalog</NavLink>
                <NavLink activeClassName="active" to="/reports">Reports</NavLink>
                <NavLink activeClassName="active" to="/help">Help</NavLink>
            </div>
            <div className="appProfile">
                <div className="image"></div>
                <div className="name">John Doe</div>
                <div className="icon"></div>
            </div>
        </Fragment>
    );
};

export default LeftNav;