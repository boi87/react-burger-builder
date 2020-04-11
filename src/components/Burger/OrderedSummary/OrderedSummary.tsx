import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "@material-ui/core/Button";

const OrderedSummary = (props: any) => {
    // console.log('ordersumm', props);
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingKey => <li key={ingKey}>
            <span
                style={{'fontWeight': 'bold', 'textTransform': 'capitalize'}}
            >
                {ingKey}:
            </span>
            {props.ingredients[ingKey]}
        </li>);

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your delicious burger contains:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Button
                    disabled={props.totalPrice === 0}
                    variant="contained"
                    color={"secondary"}
                    onClick={props.purchased}
                >Edit order
                </Button>
                <Button
                    disabled={props.totalPrice === 0}
                    variant="contained"
                    color={"primary"}
                    // onClick={props.puschasingModeHandler}
                >Continue to checkout
                </Button>
            </div>
        </Auxiliary>
    )
}

export default OrderedSummary;