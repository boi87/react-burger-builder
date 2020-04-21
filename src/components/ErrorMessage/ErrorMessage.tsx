import React from "react";
import {Button} from "@material-ui/core";
import {IErrorMessageProps} from "../../models/burger.models";

import css from './ErrorMessage.module.css';

const ErrorMessage = (props: IErrorMessageProps) => {
    return (
        <div className={css.errorMessageBox}>
            <p>{props.errorMessage}</p>
            <Button color={'secondary'} onClick={props.clicked}>
                {props.buttonText}
            </Button>
        </div>
    )
};

export default ErrorMessage;