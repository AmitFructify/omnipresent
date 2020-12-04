import { InputGroup, FormControl, Row, Container, Col, Tabs, Tab, Badge, Form, Table } from 'react-bootstrap';
import React, { Fragment } from "react";
import "./Order.scss";

import Header from "../components/Header";

interface IOrderProps { };

const Order: React.FC<IOrderProps> = (props: IOrderProps) => {
    return (
        <Fragment>
            <Header>
                <Col lg="3" className="routeHead">Orders</Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">o</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter Order Id"
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
                        <Tabs defaultActiveKey="new" id="uncontrolled-tab-example">
                            <Tab eventKey="new" title={
                                <>
                                    New
            <Badge variant="secondary">14</Badge>
                                </>
                            }>

                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                New</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="preparing" title={
                                <>
                                    Preparing
            <Badge variant="secondary">14</Badge>
                                </>
                            }>

                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Preparing</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="ready" title={
                                <>
                                    Ready
            <Badge variant="secondary">10</Badge>
                                </>
                            }>

                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Ready</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="today-order" title={
                                <>
                                    Today's Orders
            <Badge variant="secondary">16</Badge>
                                </>
                            }>

                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Today's Orders</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="requested-order" title={
                                <>
                                    Requested Orders
            <Badge variant="secondary">21</Badge>
                                </>
                            }>

                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Requested Orders</h5>
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

export default Order;