import { InputGroup, FormControl, Row, Container, Col, Tabs, Tab, Form, Table } from 'react-bootstrap';
import React, { Fragment } from "react";
import "./Appointment.scss";

import Header from "../components/Header";

import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Accept } from "../icons/accept.svg";
import { ReactComponent as Reject } from "../icons/reject.svg";

interface IAppointmentProps { };

const Appointment: React.FC<IAppointmentProps> = (props: IAppointmentProps) => {
    return (
        <Fragment>
            <Header>
                <Col lg="3" className="routeHead">Appointments</Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="searchIcon"><Search width="16px" height="16px" /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter Customer Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col lg="4" className="headerActions">
                    <Form.Check
                        type="switch"
                        id="opennow"
                        label="Open Now"
                        defaultChecked
                    />
                </Col>
            </Header>
            <Container fluid>
                <Row>
                    <Col className="paddingLeft0">
                        <Tabs defaultActiveKey="pending" id="uncontrolled-tab-example">
                            <Tab eventKey="pending" title="Pending">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Pending</h5>
                                            <Table hover className="appointments">
                                                <thead>
                                                    <tr>
                                                        <th>Customer Name</th>
                                                        <th>Date</th>
                                                        <th>Type</th>
                                                        <th>Time</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Amit Parmar</td>
                                                        <td>12 Jan, 2021</td>
                                                        <td>Store</td>
                                                        <td>9:00am-11:00am</td>
                                                        <td className="actions">
                                                            <div className="accept"><Accept width="16px" height="16px" fill="#44a058"/></div>
                                                            <div className="reject"><Reject width="16px" height="16px" fill="#dd3727"/></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Arihant Jain
                                                            <div className="addressLink">View Home Address</div>
                                                        </td>
                                                        <td>28 Jan, 2021</td>
                                                        <td>Home</td>
                                                        <td>1:00pm-3:00pm</td>
                                                        <td className="actions">
                                                            <div className="accept"><Accept width="16px" height="16px" fill="#44a058"/></div>
                                                            <div className="reject"><Reject width="16px" height="16px" fill="#dd3727"/></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shweta Kumari
                                                            <div className="addressLink">View Home Address</div>
                                                        </td>
                                                        <td>8 Feb, 2021</td>
                                                        <td>Home</td>
                                                        <td>11:00am-1:00pm</td>
                                                        <td className="actions">
                                                            <div className="accept"><Accept width="16px" height="16px" fill="#44a058"/></div>
                                                            <div className="reject"><Reject width="16px" height="16px" fill="#dd3727"/></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vicky Jesuraj</td>
                                                        <td>10 Feb, 2021</td>
                                                        <td>Store</td>
                                                        <td>3:00pm-5:00pm</td>
                                                        <td className="actions">
                                                            <div className="accept"><Accept width="16px" height="16px" fill="#44a058"/></div>
                                                            <div className="reject"><Reject width="16px" height="16px" fill="#dd3727"/></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shibin S</td>
                                                        <td>10 Feb, 2021</td>
                                                        <td>Store</td>
                                                        <td>5:00pm-7:00pm</td>
                                                        <td className="actions">
                                                            <div className="accept"><Accept width="16px" height="16px" fill="#44a058"/></div>
                                                            <div className="reject"><Reject width="16px" height="16px" fill="#dd3727"/></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="approved" title="Approved">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">Approved</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="rejected" title="rejected">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">rejected</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="complete" title="Completed">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">Completed</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Appointment;