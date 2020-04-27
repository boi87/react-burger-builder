import React, {FormEvent, SyntheticEvent} from "react";
import axios from '../../../axios-orders';
import {withRouter} from "react-router";

import CircularProgressComp from "../../../components/UI/CircularProgress/CircularProgressComp";
import {Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

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

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        console.log('event', event);

        switch (event?.target.id) {
            case 'name':
                this.setState((state) => {
                    return ({
                        ...state,
                        name: event?.target.value
                    })
                });
                break;
            case 'email':
                this.setState((state) => {
                    return ({
                        ...state,
                        email: event?.target.value
                    })
                });
                break;
            case 'street':
                this.setState((state) => {
                    return ({
                        ...state,
                        address: {
                            ...state.address,
                            street: event?.target.value}
                    })
                });
                break;
            case 'postCode':
                this.setState((state) => {
                    return ({
                        ...state,
                        address: {
                            ...state.address,
                            postCode: event?.target.value}
                    })
                });
                break;
        }

        this.setState((state) => {
            return ({
                ...state,
                [event?.target.id]: event?.target.value
            })
        });
    };

    submitHandler = (event: FormEvent) => {
        event.preventDefault();

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
                this.setState(() => ({loading: false}));
                this.props.history.push('/');
            })
            .catch(error => {
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
                            <TextField onChange={this.handleChange} id="name" label='Your name'/>
                            <TextField onChange={this.handleChange} id="email" label='Your email'/>
                            <TextField onChange={this.handleChange} id="street" label='Your street'/>
                            <TextField onChange={this.handleChange} id="postCode" label='Your post code'/>
                            <FormControl>
                                <InputLabel>Delivery</InputLabel>
                                <Select id="standard-basic" >
                                    <MenuItem value={10}>ASAP</MenuItem>
                                    <MenuItem value={20}>30 mins</MenuItem>
                                    <MenuItem value={30}>1 hour</MenuItem>
                                </Select>
                            </FormControl>

                            <Button
                                style={{color: 'green', marginTop: '10px'}}
                                onClick={this.submitHandler}>
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