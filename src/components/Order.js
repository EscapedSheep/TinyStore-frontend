import React, { Component } from 'react';
import fetchOrder from './fetchOrder'

class Order extends Component {
    state = {
        orderList: []
    }

    componentDidMount() {
        fetchOrder(URL)
            .then((result) => {
                console.log(result)
                this.setState({
                    orderList: result
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    OrderRow = (props) => (
        <div>
            <span>{props.name}</span>
            <span>{props.price}元</span>
            <span>{props.count}</span>
            <span>{props.unit}</span>
        </div>
    )

    render() {
        return (
            <div>
                <div>
                {this.state.orderList.map((item) => (
                        <this.OrderRow
                            key = {item.id}
                            name = {item.name}
                            price = {item.price}
                            unit = {item.unit}
                            count = {item.count}
                            ></this.OrderRow>
                    ))}
                </div>
            </div>
        )        
    }

}

export default Order;