import React from "react";

import css from './BuildControl.module.css'
import AddIcon from '@material-ui/icons/Delete';
import {Icon, IconButton} from "@material-ui/core";

const BuildControl = (props: any) => (
    <div className={css.buildControl}>
        <div className={css.labelContainer}>{props.label}</div>
        <div className={css.buttonsContainer}>
            <IconButton  onClick={props.removed}>
                <Icon>remove</Icon>
            </IconButton>
            <IconButton onClick={props.added}>
                <Icon>add</Icon>
            </IconButton>
        </div>
    </div>
)

export default BuildControl;
