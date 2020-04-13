import React from "react";

import css from './backdrop.module.css'

const BackDrop = (props: any) =>
    props.show ?
        (
            <div className={css.backdrop} onClick={props.purchased}>
            </div>
        )
        : null
;

export default BackDrop;