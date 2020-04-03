import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import css from './Layout.module.css';


export const Layout = (props?: any) => (
    <Auxiliary>
        <div> Toolbar, SideDrawer, Backdrop</div>
            <main
                className={css.content}
            >
                {props.children}
            </main>
    </Auxiliary>

);

export default Layout;