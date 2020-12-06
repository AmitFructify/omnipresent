import { Row, Container, Col, Table, ListGroup, Badge, Modal, Form, Button } from 'react-bootstrap';
import "./OrderDetail.scss";
import React, { useState } from "react";
import CatalogSkuCard from "../components/CatalogSkuCard";

interface IOrderDetailProps { };


function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request Stock
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CatalogSkuCard/>
            <Table hover className="reStock">
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Delivery Time</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Check inline label="Livspace 1" type="radio" id="livspace1" defaultChecked/></td>
                        <td>2 Hours</td>
                        <td><input type="number" defaultValue={1} style={{width: "25%"}}/></td>
                        <td>
                            &#x20B9; 65,000
                        </td>
                        <td>
                            &#x20B9; 65,000
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>Pay &#x20B9; 65,000</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const OrderDetail: React.FC<IOrderDetailProps> = (props: IOrderDetailProps) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container fluid className="orderSummary">
            <Row>
                <Col lg="2" className="paddingLeft0 orderList">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="active">
                            <div className="orderId">Order Id: 7890</div>
                            <div className="orderDetail">2 Items for &#x20B9; 84,000</div>
                            <div className="time">7:40 PM</div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="orderId">Order Id: 7890</div>
                            <div className="orderDetail">2 Items for &#x20B9; 84,000</div>
                            <div className="time">7:40 PM</div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="paddingLeft0">
                    <Container fluid className="orderSteps">
                        <Row>
                            <Col>
                                <h5 className="heading">
                                    <span>Vicky Jesuraj</span>
                                    <div className="userAddress">
                                        <div className="addressLink">View Delivery Address</div>
                                        <div className="price">&#x20B9; 84,000</div>
                                    </div>
                                </h5>
                                <ul>
                                    <li className="active">Order Received</li>
                                    <li>User Confirmation</li>
                                    <li>Billing</li>
                                    <li>Waiting for Confirmation</li>
                                    <li>User Confirmation</li>
                                    <li>React to Ship</li>
                                    <li>Completed Order</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h5 className="heading">Orders</h5>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Stock</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><CatalogSkuCard /></td>
                                            <td>1</td>
                                            <td>&#x20B9; 65,000</td>
                                            <td>&#x20B9; 65,000</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <CatalogSkuCard />
                                                <div className="stockRequest" onClick={() => setModalShow(true)}>Request Stock</div>
                                            </td>
                                            <td>1</td>
                                            <td>&#x20B9; 65,000</td>
                                            <td>&#x20B9; 65,000</td>
                                            <td>
                                                <Badge variant="danger">Out of Stock</Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default OrderDetail;