import React from 'react';
import css from './BurgerIngredient.module.css'

const burgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={css.breadBottom}></div>
            break;
        default:
    }

};

export default burgerIngredient;