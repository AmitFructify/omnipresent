import React, { Fragment } from "react";
import "./LeftNav.scss";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Calendar } from "../icons/calendar.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Wallet } from "../icons/wallet.svg";
import { ReactComponent as Truck } from "../icons/truck.svg";
import { ReactComponent as Report } from "../icons/report.svg";
import { ReactComponent as Question } from "../icons/question.svg";
import { ReactComponent as Catalog } from "../icons/catalog.svg";

interface ILeftNavProps {};

const LeftNav: React.FC<ILeftNavProps> = (props: ILeftNavProps) => {
    return (
        <Fragment>
            <div className="appBrand">
                <div className="logo"><Logo width="26px" height="26px"/></div>
                <div className="name">
                    <div className="app">Omni Present</div>
                    <div className="owner">by LIVSPACE</div>
                </div>
            </div>
            <div className="appNav">
                <NavLink activeClassName="active" to="/notifications"><span><Bell width="18px" height="18px"/>Notifications</span></NavLink>
                <NavLink activeClassName="active" to="/appointments"><span><Calendar width="18px" height="18px"/>Appointments</span></NavLink>
                <NavLink activeClassName="active" to="/orders"><span><Truck width="18px" height="18px"/>Orders</span></NavLink>
                <NavLink activeClassName="active" to="/wallet"><span><Wallet width="18px" height="18px"/>Wallet</span> <span className="wallet">&#x20B9; 1,50,000</span></NavLink>
                <NavLink activeClassName="active" to="/catalog"><span><Catalog width="18px" height="18px"/>Catalog</span></NavLink>
                <NavLink activeClassName="active" to="/reports"><span><Report width="18px" height="18px"/>Reports</span></NavLink>
                <NavLink activeClassName="active" to="/help"><span><Question width="18px" height="18px"/>Help</span></NavLink>
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