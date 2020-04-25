import React from "react";
import {Button, TextField} from "@material-ui/core";

import css from './ContactData.module.css'

class ContactData extends React.Component<any, any> {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    };

    componentDidMount(): void {
        console.log('ContactData mounted');
    }

    handleChange() {

    }

    render() {
        return (
            <div>
                <h4 style={{textAlign: 'center'}}>Enter your contact data</h4>
                <form className={css.formContainer}>
                    <TextField id="standard-basic" label="Your Name"/>
                    <TextField id="standard-basic" label="Your Email"/>
                    <TextField id="standard-basic" label="Street"/>
                    <TextField id="standard-basic" label="Post code"/>
                    <Button style={{color: 'green'}}>ORDER</Button>
                </form>
            </div>
        );
    }
};

export default ContactData;