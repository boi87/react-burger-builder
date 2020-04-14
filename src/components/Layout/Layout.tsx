import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'

import css from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


export const Layout = (props?: any) => (
    <Auxiliary>
        <SideDrawer/>
        <Toolbar />
        <div> Toolbar, SideDrawer, Backdrop</div>
            <main
                className={css.content}
            >
                {props.children}
            </main>
    </Auxiliary>

);

export default Layout;