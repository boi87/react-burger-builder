import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "@material-ui/core/Button";

const OrderedSummary = (props: any) => {
    // console.log('ordersumm', props);
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingKey => <li key={ingKey}>
            <span>
               {props.ingredients[ingKey]} x {ingKey}
            </span>

        </li>);

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your delicious burger contains:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: <span style={{fontWeight: 'bold'}}>
                    £ {(props.totalPrice / 100).toFixed(2)}
                </span>
            </p>
            <Button
                disabled={props.totalPrice === 0}
                color={"primary"}
                // onClick={props.continuedToPayment}
            >Continue to payment
            </Button>
        </Auxiliary>
    )
}

export default OrderedSummary;