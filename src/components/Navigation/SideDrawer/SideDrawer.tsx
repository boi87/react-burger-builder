import React from "react";

import Logo from "../../Logo/Logo";
import NaavigationItems from "../NavigationItems/NavigationItems";

import css from './SideDrawer.module.css'

const SideDrawer = (props: any) => {
    return (
        <div className={css.sideDrawer}>
            <Logo height='11%'/>
            <nav>
                <NaavigationItems></NaavigationItems>
            </nav>
        </div>
    )
}

export default SideDrawer;