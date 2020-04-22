import React from "react";

import Burger from "../../Burger/Burger";

import {ICheckOutSummaryProps} from "../../../models/burger.models";

import Button from "@material-ui/core/Button";
import css from './CheckOutSummary.module.css';

const CheckOutSummary = (props: ICheckOutSummaryProps) => {

    return (
        <div className={css.checkOutSummary}>
            <h1>Hopefully it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                style={{color: 'green'}}
                onClick={props.purchaseContinued}>
                CONTINUE
            </Button>
            <Button
                color={"secondary"}
                onClick={props.purchaseCancelled}>
                CANCEL
            </Button>
        </div>
    )
}

export default CheckOutSummary;