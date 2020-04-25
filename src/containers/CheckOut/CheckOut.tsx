import React from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";
import {ICheckOutState} from "../../models/burger.models";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

import {RouteComponentProps} from 'react-router'

class CheckOut extends React.Component<RouteComponentProps<{}, any, ICheckOutState>, ICheckOutState> {

    readonly state: Readonly<ICheckOutState> = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    };

    componentDidMount(): void {
        this.setState((state) => (
            {
                ingredients: this.props?.history?.location?.state?.ingredients || state.ingredients,
                totalPrice: this.props?.history?.location?.state?.totalPrice || state.totalPrice
            })
        )
    }


    onCancelPurchase = () => {
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
                    totalPrice={this.state.totalPrice}
                    purchaseCancelled={this.onCancelPurchase}
                    purchaseContinued={this.onContinuePurchase}
                />
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    component={ContactData}/>
            </div>
        )
    }
}

export default CheckOut;