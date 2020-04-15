import React from "react";
import Auxiliary from '../../../hoc/Auxiliary'
import BackDrop from "../Backdrop/Backdrop";

import css from './modal.module.css';

const modal = (props: any) => (
    <Auxiliary>
        <BackDrop show={props.show} clicked={props.purchased}/>
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
             className={css.modal}>
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;