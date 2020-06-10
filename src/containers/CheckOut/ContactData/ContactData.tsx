import React, {FormEvent} from "react";
import axios from '../../../axios-orders';
import {withRouter} from "react-router";

import CircularProgressComp from "../../../components/UI/CircularProgress/CircularProgressComp";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

import {IContactDataProps, IContactDataState, IOrderPost} from "../../../models/burger.models";
import css from './ContactData.module.css'
import SuccessMessage from "../../../components/UI/Alert/SuccessMessage";


class ContactData extends React.Component<IContactDataProps, IContactDataState> {

    readonly state: Readonly<IContactDataState> = {
        orderForm: {
            name: '',
            email: '',
            address: {
                street: '',
                postCode: ''
            },
            delivery: 'ASAP',
        },
        orderSuccess: false,
        loading: false
    };

    handleSelectChange = (event: any) => {
        this.setState((state) => {
            return ({
                ...state,
                orderForm: {
                    ...state.orderForm,
                    delivery: event?.target.value
                }
            })
        });
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        // console.log('event', event);

        switch (event?.target.id) {
            case 'name':
            case 'email':
                this.setState((state) => {
                    return ({
                        ...state,
                        orderForm: {
                            ...state.orderForm,
                            [event?.target.id]: event?.target.value
                        }
                    })
                });
                break;
            case 'street':
            case 'postCode':
                this.setState((state) => {
                    return ({
                        ...state,
                        orderForm: {
                            ...state.orderForm,
                            address: {
                                ...state.orderForm.address,
                                [event?.target.id]: event?.target.value
                            }

                        }
                    })
                });
                break;
        }
    };

    orderBuilder = (event: FormEvent) => {
        event.preventDefault();
        this.setState(() => ({loading: true}));

        const order: IOrderPost = {
            ingredients: this.props.ingredients,
            price: (this.props.totalPrice / 100).toFixed(2),
            customer: {
                name: this.state.orderForm.name,
                email: this.state.orderForm.email,
                address: {
                    street: this.state.orderForm.address.street,
                    postCode: this.state.orderForm.address.postCode
                },
            },
            delivery: this.state.orderForm.delivery
        };

        this.submitHandler(order);

    };

    submitHandler = (order: IOrderPost) => {
        console.log(order);
        axios.post('./orders.json', order)
            .then(() => {
                this.setState(() => ({loading: false, orderSuccess: true}));
                setTimeout(() => this.props.history.push('/'), 1000)
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
            });
    }

    render() {
        const form = (<div className={css.formContainer}>
            <h4 style={{textAlign: 'center'}}>Enter your contact data</h4>
            <form className={css.form}>
                <TextField onChange={this.handleChange} id="name" label='Your name'/>
                <TextField onChange={this.handleChange} id="email" label='Your email'/>
                <TextField onChange={this.handleChange} id="street" label='Your street'/>
                <TextField onChange={this.handleChange} id="postCode" label='Your post code'/>
                <FormControl>
                    <InputLabel>Delivery</InputLabel>
                    <Select id="standard-basic"
                            defaultValue={'ASAP'}
                            onChange={this.handleSelectChange}
                    >
                        <MenuItem value={'ASAP'}>ASAP</MenuItem>
                        <MenuItem value={'30 mins'}>30 mins</MenuItem>
                        <MenuItem value={'1 hour'}>1 hour</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    disabled={this.props.totalPrice === 0}
                    style={{color: this.props.totalPrice === 0 ? 'grey' : 'green', marginTop: '10px'}}
                    onClick={this.orderBuilder}>
                    ORDER
                </Button>
            </form>
        </div>);

        return (
            <div>
                {
                    this.state.loading ?
                        <CircularProgressComp/>
                        : this.state.orderSuccess ?
                        <SuccessMessage
                            severity="success"
                            message={'Your order was placed.'}/>
                        : form
                }
            </div>
        );
    }
};

export default withRouter(ContactData);