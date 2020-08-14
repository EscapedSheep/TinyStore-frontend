import React, { Component } from 'react';
import '../style/Product.css';

class Product extends Component {
    render() {
    return(
        <div>
            <img src={this.props.imgURL} alt={this.props.name}></img>
            <div className="productBottom">
                <span>{this.props.name}</span>
                <span>单价：{this.props.price}元/{this.props.unit}</span>
            </div>
        </div>
    )
    }
}

export default Product;