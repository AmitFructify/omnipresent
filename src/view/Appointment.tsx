import { InputGroup, FormControl, Row, Container, Col, Tabs, Tab, Form } from 'react-bootstrap';
import React, { Fragment } from "react";
import "./Appointment.scss";

import Header from "../components/Header";

interface IAppointmentProps {};

const Appointment:React.FC<IAppointmentProps> = (props: IAppointmentProps) => {
    return (
        <Fragment>
            <Header>
                <Col lg="3" className="routeHead">Appointments</Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">o</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Enter Customer Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col lg="3" className="headerActions">
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Open Now"
                            checked
                        />
                    </Form>
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
                                            Pending
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="approved" title="Approved">
                                Approved
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                            Rejected
                            </Tab>
                            <Tab eventKey="complete" title="Completed">
                                Completed
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Appointment;