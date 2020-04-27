import React from "react";
import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import {IOrdersState} from "../../models/burger.models";
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";

class Orders extends React.Component<any, IOrdersState> {

    readonly state: Readonly<IOrdersState> = {
        orders: []
    };

    componentDidMount(): void {
        axios.get('https://burger-builder-ef32b.firebaseio.com/orders.json')
            .then(resp => {
                // console.log(Object.values(resp.data));
                this.setState(() =>
                    ({
                        orders: Object.values(resp.data)
                    })
                )
            })
    }

    render() {
        const orders = this.state.orders
            .map((order, i) => {
                    // turn obj of ingredients into string of ingredients and qty
                    const ingredientsStr = Object.keys(order.ingredients)
                        .map(ingrKey => `${ingrKey} x ${order.ingredients[ingrKey]}`
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
                {orders}
            </div>);
    }
}

export default Orders;