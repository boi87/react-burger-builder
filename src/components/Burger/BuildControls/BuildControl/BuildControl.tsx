import React from "react";

import css from './BuildControl.module.css'
import AddIcon from '@material-ui/icons/Delete';
import {Icon, IconButton} from "@material-ui/core";

const BuildControl = (props: any) => {
    // console.log(props);
    return (<div className={css.buildControl}>
        <div className={css.labelContainer}>{props.label}</div>
        <div className={css.buttonsContainer}>
            <IconButton disabled={props.disabled.rem} onClick={props.removed}>
                <Icon>remove</Icon>
            </IconButton>
            <IconButton disabled={props.disabled.add} onClick={props.added}>
                <Icon>add</Icon>
            </IconButton>
        </div>
    </div>)
}

export default BuildControl;
