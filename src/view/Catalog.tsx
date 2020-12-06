import { InputGroup, FormControl, Row, Container, Col, Tabs, Tab, Form, Button, Table, Modal } from 'react-bootstrap';
import React, { Fragment } from "react";
import "./Catalog.scss";

import Header from "../components/Header";
import CatalogSkuCard from "../components/CatalogSkuCard";

interface ICatalogProps { };

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
                        <td><input type="number" defaultValue={1} style={{width: "30%"}}/></td>
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

const Catalog: React.FC<ICatalogProps> = (props: ICatalogProps) => {

  const [modalShow, setModalShow] = React.useState(false);

    return (
        <Fragment>
            <Header>
                <Col lg="3" className="routeHead">Catalog</Col>
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
                    <Button variant="outline-primary">Add Product</Button>
                </Col>
            </Header>
            <Container fluid>
                <Row>
                    <Col className="paddingLeft0">
                        <Tabs defaultActiveKey="products" id="uncontrolled-tab-example">
                            <Tab eventKey="products" title="Products">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Products</h5>
                                            <Table hover>
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Stock</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><CatalogSkuCard/></td>
                                                        <td>12</td>
                                                        <td>&#x20B9; 65,000</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id="product1in"
                                                                label=""
                                                                defaultChecked
                                                            />
                                                        </td>
                                                        <td className="actions">
                                                            <div className="edit">E</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><CatalogSkuCard/></td>
                                                        <td>15</td>
                                                        <td>&#x20B9; 87,000</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id="product2in"
                                                                label=""
                                                                defaultChecked
                                                            />
                                                        </td>
                                                        <td className="actions">
                                                            <div className="edit">E</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="outofstock" title="Out of Stock">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h5 className="heading">
                                                Out of Stock</h5>
                                            <Table hover className="catalog">
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Stock</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><CatalogSkuCard/></td>
                                                        <td>12</td>
                                                        <td>&#x20B9; 65,000</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id="product1out"
                                                                label=""
                                                            />
                                                        </td>
                                                        <td className="actions">
                                                            <div className="reStock" onClick={() => setModalShow(true)}>Request Stock</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><CatalogSkuCard/></td>
                                                        <td>15</td>
                                                        <td>&#x20B9; 87,000</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id="product2out"
                                                                label=""
                                                            />
                                                        </td>
                                                        <td className="actions">
                                                            <div className="reStock" onClick={() => setModalShow(true)}>Request Stock</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
};

export default Catalog;