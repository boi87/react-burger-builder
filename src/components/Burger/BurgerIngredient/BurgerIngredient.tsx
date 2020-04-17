import React from 'react';
import css from './BurgerIngredient.module.css'
import {IBurgerIngredientProps} from "../../../models/burger.models";

const BurgerIngredient = (props: IBurgerIngredientProps) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={css['bread-bottom']}></div>
            break;
        case ('bread-top'):
            ingredient =
                <div className={css['bread-top']}>
                    <div className={css.seeds1}></div>
                    <div className={css.seeds2}></div>
                </div>

            break;
        case ('meat'):
            ingredient = <div className={css.meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className={css.cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={css.salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={css.bacon}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;

};

export default BurgerIngredient;