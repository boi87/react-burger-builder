import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import css from './Layout.module.css';


export const Layout = props => (
    <Auxiliary>
        <div> Toolbar, SideDrawer, Backdrop</div>
            <main
                // style={{marginTop: '16px'}}
                className={css.Content}
            >
                {props.children}
            </main>
    </Auxiliary>

);

export default Layout;