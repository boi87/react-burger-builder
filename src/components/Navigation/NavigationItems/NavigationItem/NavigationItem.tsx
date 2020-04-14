import React from "react";

import css from './NavigationItem.module.css'

const NavigationItem = (props: any) => {
    return (
        <li className={css.navigationItem}>
            <a href={props.link}
               className={props.active ? css.active : undefined}
            >{props.children}</a>
        </li>
    )
}

export default NavigationItem;