import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Alert from "@material-ui/lab/Alert";

import {IAlertProps} from "../../../models/burger.models";
import css from './SuccessMessage.module.css'
import {Button} from "@material-ui/core";

const SuccessMessage = (props: IAlertProps) => {


    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <Alert className={css.alertContainer}
                   icon={<CheckIcon fontSize="inherit"/>} severity={props.severity}
            >
                {props.message}
            </Alert>
        </div>

    )
};

export default SuccessMessage;