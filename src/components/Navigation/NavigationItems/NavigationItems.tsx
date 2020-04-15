import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import css from './NavigationItems.module.css'

const NavigationItems = (props: any) => {
    return (
        <ul className={css.navigationItems}>
            <NavigationItem active link='/'> Burger Builder </NavigationItem>
            <NavigationItem link='/'> Checkout </NavigationItem>
        </ul>
    )
}

export default NavigationItems;