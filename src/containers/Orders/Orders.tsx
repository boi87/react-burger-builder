import React from "react";
import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import CircularProgressComp from "../../components/UI/CircularProgress/CircularProgressComp";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import {IOrder, IOrdersState} from "../../models/burger.models";

class Orders extends React.Component<any, IOrdersState> {

    readonly state: Readonly<IOrdersState> = {
        orders: [],
        error: {
            value: false,
            errorMessage: ''
        },
        loading: true
    };

    componentDidMount(): void {
        this.fetchOrders();
    }

    fetchOrders = () => {
        axios.get('https://burger-builder-ef32b.firebaseio.com/orders.json')
            .then(resp => {
                let orders: IOrder[] = [];
                for (let key in resp.data) {
                    orders.push({
                        id: key,
                        ingredients: resp.data[key]['ingredients'],
                        price: resp.data[key]['price']
                    })
                }

                this.setState((state: IOrdersState) =>
                    ({
                        orders: [
                            ...state.orders,
                            ...orders
                        ],
                        loading: false
                    })
                )
            })
            .catch(error => {
                this.setState(() => ({
                        ...this.state,
                        error: {
                            value: true,
                            errorMessage: error.toString()
                        },
                        loading: false
                    })
                );
            })
    };

    render() {
        console.log('orders render');
        const orders = this.state.orders
            .map(order => {
                    return (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            totalPrice={order.price}
                        />
                    )
                }
            );

        return (
            <div>
                <p>Your Orders</p>
                {
                    this.state.loading
                        ?
                        <CircularProgressComp/>
                        : this.state.error.value
                        ? <ErrorMessage
                            errorMessage={this.state.error.errorMessage}
                            clicked={this.fetchOrders}
                            buttonText={'RETRY'}
                        />
                        :
                        orders
                }
            </div>);
    }
}

export default Orders;