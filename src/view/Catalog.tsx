import { InputGroup, FormControl, Row, Container, Col, Tabs, Tab, Form, Button, Table, Badge } from 'react-bootstrap';
import React, { Fragment, useEffect, useState } from "react";
import "./Catalog.scss";

import { useDispatch, useSelector } from 'react-redux';
import { products, fetchProducts } from "../store/catalogueReducer";

import Header from "../components/Header";
import CatalogSkuCard from "../components/CatalogSkuCard";
import RestockModal from "../components/RestockModal";

import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Edit } from "../icons/edit.svg";

interface ICatalogProps { };

const Catalog: React.FC<ICatalogProps> = (props: ICatalogProps) => {
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = React.useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const restockProduct = (product: any) => {
        setModalShow(true);
        setProduct(product);
    };

    const catalogProducts = useSelector(products);

    const inStockProductItems = catalogProducts.map((product: any) =>
        <tr key={product.id}>
            <td><CatalogSkuCard product={{ image: product.image, display_name: product.product_display_name, code: product.sku }} /></td>
            <td>12</td>
            <td>&#x20B9; {product.prices}</td>
            <td>
                <Form.Check
                    type="switch"
                    id="product1in"
                    label=""
                    defaultChecked
                />
            </td>
            <td className="actions">
                <div className="edit"><Edit width="18px" height="18px"/></div>
            </td>
        </tr>
    );

    const outStockProductItems = catalogProducts.map((product: any) =>
        <tr key={product.id}>
            <td><CatalogSkuCard product={{ image: product.image, display_name: product.product_display_name, code: product.sku }} /></td>
            <td>12</td>
            <td>&#x20B9; {product.prices}</td>
            <td>
                <Form.Check
                    type="switch"
                    id="product1in"
                    label=""
                />
            </td>
            <td className="actions">
                <div className="reStock" onClick={() => restockProduct(product)}>Request Stock</div>
            </td>
        </tr>
    );

    return (
        <Fragment>
            <Header>
                <Col lg="3" className="routeHead">Catalog</Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="searchIcon"><Search width="16px" height="16px" /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter Product Name"
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
            <Container fluid className="routeViewContent catalogContent">
                <Row>
                    <Col className="paddingLeft0 tabWrapper">
                        <Tabs defaultActiveKey="products" id="uncontrolled-tab-example">
                            <Tab eventKey="products" title="Products">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Badge variant="light" className="active">Sofa</Badge>
                                            <Badge variant="light">Chair</Badge>
                                            <Badge variant="light">Storage</Badge>
                                            <Badge variant="light">Table</Badge>
                                        </Col>
                                    </Row>
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
                                                    {inStockProductItems}
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
                                            <Badge variant="light" className="active">Sofa</Badge>
                                            <Badge variant="light">Chair</Badge>
                                            <Badge variant="light">Storage</Badge>
                                            <Badge variant="light">Table</Badge>
                                        </Col>
                                    </Row>
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
                                                    {outStockProductItems}
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
            {product && <RestockModal
                show={modalShow}
                product={product}
                onHide={() => setModalShow(false)}
            />}
        </Fragment>
    );
};

export default Catalog;