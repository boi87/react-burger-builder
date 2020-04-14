import React from "react";

import Logo from "../../Logo/Logo";
import NaavigationItems from "../NavigationItems/NavigationItems";

import css from './Toolbar.module.css'

const Toolbar = (props: any) => (
    <header className={css.toolbar}>
        <Logo height='80%'/>
        <div> MENU</div>
        <div> LOGO</div>
        <nav>
            <NaavigationItems/>
        </nav>
    </header>
);

export default Toolbar;