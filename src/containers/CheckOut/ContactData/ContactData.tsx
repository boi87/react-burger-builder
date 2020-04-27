import React, {FormEvent} from "react";
import axios from '../../../axios-orders';
import {withRouter} from "react-router";

import CircularProgressComp from "../../../components/UI/CircularProgress/CircularProgressComp";
import {Button, TextField} from "@material-ui/core";

import {IContactDataProps, IContactDataState} from "../../../models/burger.models";
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
                this.props.history.push('/');
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
                {this.state.loading
                    ?
                    <CircularProgressComp/>
                    :
                    <div className={css.formContainer}>
                        <h4 style={{textAlign: 'center'}}>Enter your contact data</h4>
                        <form className={css.form}>
                            <TextField id="standard-basic" label="Your Name"/>
                            <TextField id="standard-basic" label="Your Email"/>
                            <TextField id="standard-basic" label="Street"/>
                            <TextField id="standard-basic" label="Post code"/>
                            <Button
                                style={{color: 'green', marginTop: '10px'}}
                                onClick={this.orderHandler}>
                                ORDER
                            </Button>
                        </form>
                    </div>
                }
            </div>
        );
    }
};

export default withRouter(ContactData);