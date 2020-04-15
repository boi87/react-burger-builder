import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'

import css from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends React.Component<any, { showSideDrawer: boolean }> {

    readonly state: Readonly<{ showSideDrawer: boolean }> = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState(() => {
            return {
                showSideDrawer: !this.state.showSideDrawer
            }
        })
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar open={this.sideDrawerClosedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div> Toolbar, SideDrawer, Backdrop</div>
                <main
                    className={css.content}
                >
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;