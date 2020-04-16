import React from "react";

import css from './HamburgerMenu.module.css';

const HamburgerMenu = (props: any) =>  (
        <div className={css.hamContainer} onClick={props.clicked} >
            <div className={css.hamPiece}></div>
            <div className={css.hamPiece}></div>
            <div className={css.hamPiece}></div>
        </div>
    );

export default HamburgerMenu;