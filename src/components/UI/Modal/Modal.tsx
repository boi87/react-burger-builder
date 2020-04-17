import React from "react";

import Auxiliary from '../../../hoc/Auxiliary'
import BackDrop from "../Backdrop/Backdrop";
import {IModalProps} from "../../../models/burger.models";

import css from './modal.module.css';

class Modal extends React.Component<IModalProps, any> {
    render() {
        return (
            <Auxiliary>
                <BackDrop show={this.props.show} clicked={this.props.purchased}/>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                     className={css.modal}>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

export default Modal;