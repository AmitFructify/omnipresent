import { Row, Container, Col, Table, ListGroup, Badge } from 'react-bootstrap';
import "./OrderDetail.scss";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, fetchCartProducts } from "../store/catalogueReducer";

import RestockModal from "../components/RestockModal";
import CatalogSkuCard from "../components/CatalogSkuCard";

interface IOrderDetailProps { };

const OrderDetail: React.FC<IOrderDetailProps> = (props: IOrderDetailProps) => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchCartProducts());
    }, [dispatch]);

    const restockProduct = (product: any) => {
        setModalShow(true);
        setProduct(product);
    };

    const cartProductList = useSelector(cartProducts);

    let totalAmount = 0;
    const productItems = cartProductList.map((product: any, index: number) => {
        totalAmount += product.prices * product.cart_item_count;

        let randNo = Math.floor(Math.random() * 100);
        return (<tr key={product.id}>
            <td>
                <CatalogSkuCard product={{ image: product.image, display_name: product.product_display_name, code: product.sku }} />
                {(index == 0 || index == 3) && <div className="stockRequest" onClick={() => restockProduct(product)}>Request Stock</div>}
            </td>
            <td>{product.cart_item_count}</td>
            <td>&#x20B9; {product.prices}</td>
            <td>&#x20B9; {product.prices * product.cart_item_count}</td>
            {(index != 0 && index != 3) && <td>{randNo}</td>}
            {(index == 0 || index == 3) && <td><Badge variant="danger">Out of Stock</Badge></td>}
        </tr>);
    });

    return (
        <Container fluid className="orderSummary">
            <Row>
                <Col lg="2" className="paddingLeft0 orderList">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="active">
                            <div className="orderId">Order Id: 7890</div>
                            <div className="orderDetail">{productItems.length} Items for &#x20B9; {totalAmount}</div>
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
                                        <div className="price">&#x20B9; {totalAmount}</div>
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
                                        {productItems}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    {product && <RestockModal
                        show={modalShow}
                        product={product}
                        onHide={() => setModalShow(false)}
                    />}
                </Col>
            </Row>
        </Container>
    );
};

export default OrderDetail;