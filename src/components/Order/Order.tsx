import React from 'react';
import axios from './../../axios-orders'

import {IOrderProps} from "../../models/burger.models";
import css from './Order.module.css'
import {Icon} from "@material-ui/core";

const Order = (props: IOrderProps) => {
// turn obj of ingredients into string of ingredients and qty
    const ingredientsStr = Object.keys(props.ingredients)
        .map(ingrKey => (
                <span>
                    <span className={css.ingrKey}>{ingrKey} ({props.ingredients[ingrKey]})</span>
                </span>
            )
        );

    const deleteOrderHandler = (id: string) => {
        console.log(id);
        axios.delete(`https://burger-builder-ef32b.firebaseio.com/orders/${id}.json`)
            .then(resp => {
                console.log(resp);
                // this.setState(() =>
                //     ({
                //         ingredients: resp.data
                //     })
                // )
                props.ordersFetched();
            });
    };

    return (
        <div className={css.order}>

            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                {/*<Icon color="primary">edit</Icon>*/}
                <Icon color="secondary" onClick={() => deleteOrderHandler(props.id)}>delete</Icon>
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