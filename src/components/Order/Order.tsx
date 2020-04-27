import React from 'react';

import {IOrderProps} from "../../models/burger.models";
import css from './Order.module.css'

const Order = (props: IOrderProps) => {

    return (
        <div className={css.order}>
            <p>Ingredients: <span style={{fontWeight: 'bold'}}>
                    {props.ingredients}
                </span>
            </p>
            <p>Price: <span style={{fontWeight: 'bold'}}>
                    £ {props.totalPrice}
                </span>
            </p>
        </div>
    )
};

export default Order;