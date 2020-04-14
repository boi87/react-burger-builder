import React from "react";

import burgerLogo from './../../assets/images/burger-logo.png';

import css from './Logo.module.css'

const Logo = (props: any) => (
    <div className={css.logo} style={{height: props.height}}>
        <img src={burgerLogo} />
    </div>
);

export default Logo;