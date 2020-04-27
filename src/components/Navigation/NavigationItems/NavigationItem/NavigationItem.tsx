import React from "react";

import css from './NavigationItem.module.css'
import {NavLink} from "react-router-dom";

const NavigationItem = (props: any) => {
    return (
        <li className={css.navigationItem}>
            <NavLink
                exact
                to={props.link}
                activeClassName={css.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;