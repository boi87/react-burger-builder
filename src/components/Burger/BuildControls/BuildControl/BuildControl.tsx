import React from "react";

import css from './BuildControl.module.css'
import Button from "@material-ui/core/Button";
import {Icon} from "@material-ui/core";

const BuildControl = (props: any) => (
    <div className={css.buildControl}>
        <div>{props.label}</div>
        <Button
            variant='text'
            color='primary'
            startIcon={<Icon>add</Icon>} />
        <Button
            variant='text'
            color='secondary'
            startIcon={<Icon>remove</Icon>} />
    </div>
)

export default BuildControl;
