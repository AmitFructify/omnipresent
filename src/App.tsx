import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Route, Switch, Redirect } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import LeftNav from "./components/LeftNav";
import Appointment from "./view/Appointment";
import Order from "./view/Order";
import Catalog from './view/Catalog';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg="2" className="appLeftNav paddingLeft0"><LeftNav /></Col>
        <Col className="paddingLeft0">
        <Redirect to={{ pathname: '/appointments' }} />
          <Switch>
            <Route path="/notifications"><Appointment /></Route>
            <Route path="/appointments"><Appointment /></Route>
            <Route path="/orders"><Order /></Route>
            <Route path="/wallet"><Appointment /></Route>
            <Route path="/catalog"><Catalog /></Route>
            <Route path="/reports"><Appointment /></Route>
            <Route path="/help"><Appointment /></Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
