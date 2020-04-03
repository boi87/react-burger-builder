import React from 'react';
import css from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props: any) => (
    <div className={css.buildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.addedIngredient(ctrl.type)}
                removed={() => props.removedIngredient(ctrl.type)}

            />
        ))}

    </div>
);

export default BuildControls;