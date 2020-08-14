import React, { Component } from 'react';
import '../style/Product.css';
import addToOrder from './AddToOrder';

class Product extends Component {
    handleAddOrder = () => {
        const product = {
            name: this.props.name,
            price: this.props.price,
            unit: this.props.unit
        }
        addToOrder(product);
    }
    render() {
    return(
        <div>
            <img src={this.props.imgURL} alt={this.props.name}></img>
            <div className="productBottom">
                <span>{this.props.name}</span>
                <span>单价：{this.props.price}元/{this.props.unit}</span>
                <button onClick={this.handleAddOrder}>add</button>
            </div>
        </div>
    )
    }
}

export default Product;