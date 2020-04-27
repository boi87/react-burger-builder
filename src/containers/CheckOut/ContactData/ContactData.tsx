import React, {FormEvent} from "react";
import axios from '../../../axios-orders';

import {Button, TextField} from "@material-ui/core";

import {IContactDataProps, IContactDataState} from "../../../models/burger.models";

import {CircularProgress} from "@material-ui/core";
import css from './ContactData.module.css'

class ContactData extends React.Component<IContactDataProps, IContactDataState> {

    readonly state: Readonly<IContactDataState> = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading: false
    };

    componentDidMount(): void {
    }

    orderHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log(this.props);

        this.setState(() => ({loading: true}));

        const order = {
            ingredients: this.props.ingredients,
            price: (this.props.totalPrice / 100).toFixed(2),
            customer: {
                name: 'Mike',
                address: {
                    street: 'Test Street',
                    postCode: 'E00E01',
                    city: 'London'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'asap'
        };

        axios.post('./orders.json', order)
            .then(data => {
                console.log(data);
                this.setState(() => ({loading: false}));

            })
            .catch(error => {
                console.log(error.toString());
                this.setState(() => ({
                        ...this.state,
                        error: {
                            value: true,
                            errorMessage: error.toString()
                        },
                        loading: false
                    })
                );
            })
    };

    render() {
        return (
            <div>
                <h4 style={{textAlign: 'center'}}>Enter your contact data</h4>
                {this.state.loading
                    ?
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress color="primary"/>
                    </div>
                    :
                    <div style={{width: '100%', backgroundColor: 'lightGrey'}}>
                        <form className={css.formContainer}>
                            <TextField id="standard-basic" label="Your Name"/>
                            <TextField id="standard-basic" label="Your Email"/>
                            <TextField id="standard-basic" label="Street"/>
                            <TextField id="standard-basic" label="Post code"/>
                            <Button style={{color: 'green'}} onClick={this.orderHandler}>ORDER</Button>
                        </form>
                    </div>
                }

            </div>
        );
    }
};

export default ContactData;