import React, { Component } from 'react';
import "./Producto.css";
// import PubSub from 'pubsub-js';
//https://www.youtube.com/watch?v=lJsgUOj73zg

import {
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

export class FormProduct extends Component {
    render() {
        return (
            <div>
                <h2> Registro de productos </h2>
            </div>
        )
    }
}

export class ListProduct extends Component {
    render() {
        return (
            <div>
                <h2> Lista de productos </h2>
            </div>
        )
    }
}

export default class ProductBox extends Component {

    state = {
        products: [],
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <FormProduct />
                </div>
                <div className="col-md-6">
                    <ListProduct products={this.state.products} />
                </div>
            </div>
        )
    }
}