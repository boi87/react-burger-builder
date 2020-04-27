import React from "react";
import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import {IOrdersState} from "../../models/burger.models";
import {CircularProgress} from "@material-ui/core";

class Orders extends React.Component<any, IOrdersState> {

    readonly state: Readonly<IOrdersState> = {
        orders: [],
        loading: true
    };

    componentDidMount(): void {
        axios.get('https://burger-builder-ef32b.firebaseio.com/orders.json')
            .then(resp => {
                // console.log(Object.values(resp.data));
                this.setState(() =>
                    ({
                        orders: Object.values(resp.data),
                        loading: false
                    })
                )
            })
    }

    render() {
        const orders = this.state.orders
            .map((order, i) => {
                    // turn obj of ingredients into string of ingredients and qty
                    const ingredientsStr = Object.keys(order.ingredients)
                        .map(ingrKey => `${order.ingredients[ingrKey]} x ${ingrKey} `
                        ).join(', ');

                    return (
                        <Order
                            key={i}
                            ingredients={ingredientsStr}
                            totalPrice={order.price}
                        />

                    )
                }
            );

        return (
            <div>
                <p>Your Orders</p>
                {this.state.loading
                    ?
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress color="primary"/>
                    </div>
                    :
                    orders}
            </div>);
    }
}

export default Orders;