import React from "react";
// import { NavLink } from
import NavigationItem from "./NavigationItem/NavigationItem";

import css from './NavigationItems.module.css'

const NavigationItems = (props: any) => {
    // const isActive = this.
    return (
        <ul className={css.navigationItems}>
            <NavigationItem link='/'> Burger Builder </NavigationItem>
            <NavigationItem link='/orders'> Orders </NavigationItem>
        </ul>
    )
}

export default NavigationItems;