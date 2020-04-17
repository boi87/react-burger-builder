import React from "react";

import css from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import {IBurgerProps} from "../../models/burger.models";

const Burger = (props: IBurgerProps) => {

    // turn obj of ingredients into array of BurgerIngredient
    const ingredientsArr = Object.keys(props.ingredients)
        .map(ingrKey => [...Array(props.ingredients[ingrKey])]
            .map((_, i) =>
                <BurgerIngredient key={ingrKey + i} type={ingrKey}/>
            )
        )
        .reduce((arr, el) => arr.concat(el), []);

    return (
        <div className={css.burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredientsArr.length === 0
                ? <p>Please start adding ingredients!</p>
                : ingredientsArr}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default Burger;