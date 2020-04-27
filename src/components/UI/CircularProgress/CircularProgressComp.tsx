import React from "react";
import {CircularProgress} from "@material-ui/core";
import css from './CircularProgressComp.module.css';

const CircularProgressComp = () => (
    <div className={css.circularProgressContainer}>
        <CircularProgress color={"primary"}/>
    </div>
)

export default CircularProgressComp;