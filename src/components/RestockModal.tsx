import { Table, Modal, Form, Button } from 'react-bootstrap';
import React, { useState, } from "react";

import CatalogSkuCard from "../components/CatalogSkuCard";


export default function RestockModal(props: any) {
    const [quantity, setQuantity] = useState(1);

    let handleChange = (e: any) => {
        setQuantity(Number(e.currentTarget.value));
    };

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
                <CatalogSkuCard product={{ image: props.product.image, display_name: props.product.product_display_name, code: props.product.sku }} />
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
                            <td><Form.Check inline label="Livspace 1" type="radio" id="livspace1" defaultChecked /></td>
                            <td>2 Hours</td>
                            <td><input type="number" defaultValue={quantity} style={{ width: "30%" }} onChange={(e) => handleChange(e)} /></td>
                            <td>
                                &#x20B9; {props.product.prices}
                            </td>
                            <td>
                                &#x20B9; {props.product.prices * quantity}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={props.onHide}>
                    Cancel
            </Button>
                <Button variant="primary" onClick={props.onHide}>Pay &#x20B9; {props.product.prices * quantity}</Button>
            </Modal.Footer>
        </Modal>
    );
}