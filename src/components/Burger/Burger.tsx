import React from "react";

import css from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import {IBurgerProps} from "../../models/burger.models";

const burger = (props: IBurgerProps) => {

    // turn obj of ingredients into array of BurgerIngredient
    const ingredientsArr = Object.keys(props.ingredients)
        .map(ingrKey => [...Array(props.ingredients[ingrKey])]
            .map((_, i) =>
                <BurgerIngredient key={ingrKey + i} type={ingrKey}/>
            )
        );

    return (
        <div className={css.burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='salad'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;