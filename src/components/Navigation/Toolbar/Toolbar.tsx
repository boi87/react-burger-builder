import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import css from './Toolbar.module.css'

const Toolbar = (props: any) => (
    <header className={css.toolbar}>
        <Logo height='80%' clicked={props.open}/>
        <div> MENU</div>
        <div> LOGO</div>
        <nav className={css.desktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;