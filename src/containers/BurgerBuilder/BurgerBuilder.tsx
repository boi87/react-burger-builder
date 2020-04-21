import React, {Component} from 'react';
import axios from '../../axios-orders'

import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderedSummary from "../../components/Burger/OrderedSummary/OrderedSummary";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import {Button, CircularProgress} from "@material-ui/core";

import {IState} from "../../models/burger.models";

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 40,
    meat: 130,
    bacon: 70
};

class BurgerBuilder extends Component<{}, IState> {

    readonly state: Readonly<IState> = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 170,
        purchasing: false,
        error: {
            value: false,
            errorMessage: ''
        },
        loading: false
    };

    componentDidMount(): void {
        axios.get('https://burger-builder-ef32b.firebaseio.com/ingredients.json')
            .then(resp => {
                this.setState(() => {
                    return {
                        ingredients: resp.data
                    }
                })
            })
    }


    addIngredientHandler = (type: keyof typeof INGREDIENT_PRICES) => {
        // update ingredient
        this.setState(state => {
                return {
                    ingredients: {
                        ...state.ingredients,
                        [type]: state.ingredients[type] + 1
                    },
                    totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
                }
            }
        );
    };

    removeIngredientHandler = (type: keyof typeof INGREDIENT_PRICES) => {
        // update ingredient
        this.setState(state => {
                return {
                    ingredients: {
                        ...state.ingredients,
                        [type]: state.ingredients[type] > 0 ? state.ingredients[type] - 1 : 0
                    },
                    totalPrice: state.ingredients[type] !== 0 ? this.state.totalPrice - INGREDIENT_PRICES[type] : this.state.totalPrice
                }
            }
        );
    };

    purchaseModeHandler = () => {
        this.setState(state =>
            ({
                ...this.state,
                purchasing: !state.purchasing,
                error: {
                    value: false,
                    errorMessage: ''
                }
            })
        )
    };

    purchaseContinueHandler = () => {
        this.setState(() => ({
                ...this.state,
                loading: true
            })
        );

        const order = {
            ingredients: this.state.ingredients,
            price: (this.state.totalPrice / 100).toFixed(2),
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
                this.setState(() => ({
                        ...this.state,
                        purchasing: false,
                        loading: false
                    })
                );

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
        // if no quantity for ingredient, disable remove button
        const disabled: { [key: string]: { 'add': boolean, 'rem': boolean } } = {
            salad: {add: false, rem: false},
            bacon: {add: false, rem: false},
            cheese: {add: false, rem: false},
            meat: {add: false, rem: false}
        };
        for (let key in this.state?.ingredients) {
            disabled[key].add = this.state?.ingredients[key] === 5;
            disabled[key].rem = this.state?.ingredients[key] === 0;
        }

        return (
            <Auxiliary>
                {this.state.purchasing ?
                    <Modal show={this.state.purchasing} purchased={this.purchaseModeHandler}>

                        {this.state.loading
                            ? <CircularProgress color="primary"/>
                            : this.state.error.value
                                ?
                                <ErrorMessage errorMessage={this.state.error.errorMessage}
                                              clicked={this.purchaseModeHandler}
                                              buttonText={'CANCEL'}
                                />
                                : <OrderedSummary
                                    ingredients={this.state.ingredients}
                                    totalPrice={this.state.totalPrice}
                                    purchased={this.purchaseModeHandler}
                                    continuedToPayment={this.purchaseContinueHandler}
                                />
                        }
                    </Modal>
                    : null}

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addedIngredient={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    disabledIngrCtrl={disabled}
                    purchased={this.purchaseModeHandler}
                    purchasingMode={this.state.purchasing}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;