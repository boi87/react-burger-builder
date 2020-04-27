import React from "react";
import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import {IOrdersState} from "../../models/burger.models";

class Orders extends React.Component<any, IOrdersState> {

    readonly state: Readonly<IOrdersState> = {
        orders: []
    };

    componentDidMount(): void {
        axios.get('https://burger-builder-ef32b.firebaseio.com/orders.json')
            .then(resp => {
                console.log(resp.data);
                this.setState(() =>
                    ({
                        orders: resp.data
                    })
                )
            })
    }

    render() {
        const orders = this.state.orders
            .map(order =>
                <Order
                    // ingredients={order.ingredients}
                    // totalPrice={order.totalPrice}
                />);

        return (
            <div>
                {orders}
            </div>);
    }
}

export default Orders;