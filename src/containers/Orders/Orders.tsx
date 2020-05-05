import React from "react";
import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import CircularProgressComp from "../../components/UI/CircularProgress/CircularProgressComp";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import {IOrderGet, IOrdersState} from "../../models/burger.models";
import SuccessMessage from "../../components/UI/Alert/SuccessMessage";

class Orders extends React.Component<any, IOrdersState> {

    readonly state: Readonly<IOrdersState> = {
        orders: [],
        error: {
            value: false,
            errorMessage: ''
        },
        orderDeleted: false,
        deletingOrder: false,
        loading: false
    };

    componentDidMount(): void {
        this.fetchOrders();
    }

    fetchOrders = () => {
        // reset error
        this.setState((state) => (
            {
                ...state,
                error: {...state.error, value: false}
            }));

        axios.get('https://burger-builder-ef32b.firebaseio.com/orders.json')
            .then(resp => {
                let orders: IOrderGet[] = [];
                for (let key in resp.data) {
                    orders.push({
                        id: key,
                        ingredients: resp.data[key]['ingredients'],
                        price: resp.data[key]['price']
                    })
                }

                this.setState(() =>
                    ({
                        orders: [...orders],
                        orderDeleted: false,
                        deletingOrder: false,
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

    deleteOrderHandler = (id: string) => {
        this.setState((state) => ({...state, deletingOrder: true}));
        axios.delete(`https://burger-builder-ef32b.firebaseio.com/orders/${id}.json`)
            .then(() => {
                this.setState((state) => (
                    {
                        ...state,
                        orderDeleted: true
                    }));

                setTimeout(() => this.fetchOrders(), 2000);
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
        ;
    };

    render() {
        // console.log('render orders');
        const orders = this.state.orders
            .map(order => {
                    return (
                        <Order
                            key={order.id}
                            id={order.id}
                            ingredients={order.ingredients}
                            totalPrice={order.price}
                            orderDeleted={this.deleteOrderHandler}
                            deleting={this.state.deletingOrder}
                        />
                    )
                }
            );

        return (
            <div>
                <p>Your Orders</p>
                {
                    this.state.loading ?
                        <CircularProgressComp/> :
                        this.state.error.value ?
                            <ErrorMessage
                                errorMessage={this.state.error.errorMessage}
                                clicked={this.fetchOrders}
                                buttonText={'RETRY'}
                            /> :
                            <div>
                                {this.state.orderDeleted ?
                                    <SuccessMessage severity={"success"} message={'Order successfully deleted.'}/>
                                    : null}
                                {orders}

                            </div>
                }
            </div>);
    }
}

export default Orders;