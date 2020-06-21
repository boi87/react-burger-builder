import React from "react";
import {connect} from "react-redux";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";
import {ICheckOutState, IInitialState} from "../../models/burger.models";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

import {RouteComponentProps} from 'react-router'
import {Dispatch} from "redux";

class CheckOut extends React.Component<RouteComponentProps<{}, any, ICheckOutState> & IInitialState, ICheckOutState> {

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
        // this.setState((state) => (
        //     {
        //         ingredients: this.props?.history?.location?.state?.ingredients || state.ingredients,
        //         totalPrice: this.props?.history?.location?.state?.totalPrice || state.totalPrice
        //     })
        // )
    }


    onCancelPurchase = () => {
        this.props.history.goBack();
    };

    onContinuePurchase = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckOutSummary
                    ingredients={this.props.ingredients}
                    totalPrice={this.props.totalPrice}
                    purchaseCancelled={this.onCancelPurchase}
                    purchaseContinued={this.onContinuePurchase}
                />
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    component={ContactData}
                    // render={() => (
                    //     <ContactData
                    //         ingredients={this.props.ingredients}
                    //         totalPrice={this.props.totalPrice}
                    //     />)}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state: IInitialState) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

export default connect(mapStateToProps)(CheckOut);