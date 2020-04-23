import React from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";
import {ICheckOutState, ICheckOutProps} from "../../models/burger.models";

class CheckOut extends React.Component<ICheckOutProps, ICheckOutState> {

    readonly state: Readonly<ICheckOutState> = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice: 280
    };

    componentDidMount(): void {
        console.log('CheckOut', this.props.history.location.state);
        // const ingredients = this.props.history.location.state['ingredients'];
        // const totalPrice = this.props.history.location.state['totalPrice'];
        this.setState(() => ({
            ingredients: this.props.history.location.state['ingredients'],
            totalPrice: this.props.history.location.state['totalPrice']
        })
        );
    }


    onCancelPurchase = () => {
        console.log(this.props.history);
        return this.props.history.goBack();
    };

    onContinuePurchase = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckOutSummary
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.onCancelPurchase}
                    purchaseContinued={this.onContinuePurchase}
                />
            </div>
        )
    }
}

export default CheckOut;