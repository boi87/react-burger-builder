import React from 'react';

import {IOrderProps} from "../../models/burger.models";
import css from './Order.module.css'

const Order = (props: IOrderProps) => {

    // props.ingredients.

    return (
        <div className={css.order}>
            <p>Ingredients: {props.ingredients} </p>
            <p>Price: <span style={{fontWeight: 'bold'}}>£ {(props.totalPrice / 100).toFixed(2)}</span></p>        </div>
    )
};

export default Order;