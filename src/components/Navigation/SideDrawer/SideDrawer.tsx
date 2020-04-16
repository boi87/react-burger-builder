import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

import css from './SideDrawer.module.css'

const SideDrawer = (props: any) => {

    let attachedClasses = [css.sideDrawer, css.close];

    if (props.open) {
        attachedClasses = [css.sideDrawer, css.open]
    }

    return (
        <Auxiliary>
            <BackDrop
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%' marginBottom='32px' />
                <NavigationItems/>
            </div>
        </Auxiliary>
    )
}

export default SideDrawer;