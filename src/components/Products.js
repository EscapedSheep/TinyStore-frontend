import React, { Component } from 'react';
import fetchProduct from "./fetchData";
import Product from "./Product";
import '../style/Products.css'

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetchProduct(URL)
            .then((result) => {
                console.log(result)
                this.setState({
                    products: result,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <div className="productsGrid">
                {this.state.products
                    .map((item) => (
                        <Product
                            name={item.name}
                            price={item.price}
                            key={item.id}
                            imgURL={item.imgURL}
                            unit={item.unit}
                        ></Product>
                    ))}
            </div>

            </div>
        )
    }
}

export default Products;