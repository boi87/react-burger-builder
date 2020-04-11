import React from "react";

import css from './modal.module.css';

const modal = (props: any) => (
    <div className={css.modal}>
        {props.children}
    </div>
);

export default modal;