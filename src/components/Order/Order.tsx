import React from 'react';

import {IOrderProps} from "../../models/burger.models";
import css from './Order.module.css'
import {Button, Icon} from "@material-ui/core";

const Order = (props: IOrderProps) => {
// turn obj of ingredients into string of ingredients and qty
    const ingredientsStr = Object.keys(props.ingredients)
        .map(ingrKey => (
                <span>
                    <span className={css.ingrKey}>{ingrKey} ({props.ingredients[ingrKey]})</span>
                </span>
            )
        );

    return (
        <div className={css.order}>

            <div className={css.orderActionsContainer}>
                {/*<Icon color="primary">edit</Icon>*/}
                <Button color="secondary"
                        disabled={props.deleting}
                        onClick={() => props.orderDeleted(props.id)}>
                    <Icon>delete</Icon>
                </Button>
            </div>
            <p>Ingredients:
                {ingredientsStr}
            </p>
            <p>Price: <span style={{fontWeight: 'bold'}}>
                    £ {props.totalPrice}
                </span>
            </p>
        </div>
    )
};

export default Order;