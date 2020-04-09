import React from 'react';
import css from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";
import {Button} from '@material-ui/core';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props: any) => (
    <div className={css.buildControls}>
        <p>Price: <span style={{fontWeight: 'bold'}}>£ {(props.totalPrice / 100).toFixed(2)}</span></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.addedIngredient(ctrl.type)}
                removed={() => props.removedIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <Button disabled={props.totalPrice === 0} variant="contained">CHECK OUT</Button>
    </div>
);

export default BuildControls;