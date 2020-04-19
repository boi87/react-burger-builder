import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import {IOrderSummaryProps} from "../../../models/burger.models";

import Button from "@material-ui/core/Button";

import css from './OrderSummary.module.css'

class OrderedSummary extends React.Component<IOrderSummaryProps, any> {

    ingredientsSummary = Object.keys(this.props.ingredients)
        .map(ingKey => <li key={ingKey}>
            <span>
               {this.props.ingredients[ingKey]} x {ingKey}
            </span>

        </li>);

    render() {
        return (
            <Auxiliary>
                <div className={css.orderContainer}>
                    <h3>Your Order</h3>
                    <p>Your delicious burger contains:</p>
                    <ul>
                        {this.ingredientsSummary}
                    </ul>
                    <p>Total price: <span style={{fontWeight: 'bold'}}>
                    £ {(this.props.totalPrice / 100).toFixed(2)}
                </span>
                    </p>
                    <Button
                        disabled={this.props.totalPrice === 0}
                        style={{color: 'green'}}
                        // onClick={props.continuedToPayment}
                    >Continue
                    </Button>
                </div>
            </Auxiliary>
        )
    }
}


export default OrderedSummary;