import React, {Component} from 'react'
import * as actionTypes from '../../store/actions/actions';
import {AnyAction, Dispatch} from "redux";
import {connect} from 'react-redux'

import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Modal from '../../components/UI/Modal/Modal';
import OrderedSummary from "../../components/Burger/OrderedSummary/OrderedSummary";

import {IInitialState, IState} from "../../models/burger.models";

import {CircularProgress} from "@material-ui/core";
import {RouteComponentProps} from "react-router";

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 40,
    meat: 130,
    bacon: 70
};

class BurgerBuilder extends Component<IInitialState & RouteComponentProps, IState> {

    readonly state: Readonly<IState> = {
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        // totalPrice: 170,
        purchasing: false,
        error: {
            value: false,
            errorMessage: ''
        },
        loading: false
    };

    componentDidMount(): void {
        // axios.get('https://burger-builder-ef32b.firebaseio.com/ingredients.json')
        //     .then(resp => {
        //         this.setState(() =>
        //             ({
        //                 ingredients: resp.data
        //             })
        //         )
        //     })
    }


    // addIngredientHandler = (type: keyof typeof INGREDIENT_PRICES) => {
        // update ingredient
        // this.setState(state => {
        //         return {
        //             ingredients: {
        //                 ...state.ingredients,
        //                 [type]: state.ingredients[type] + 1
        //             },
        //             totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        //         }
        //     }
        // );
    // };

    // removeIngredientHandler = (type: keyof typeof INGREDIENT_PRICES) => {
        // update ingredient
        // this.setState(state => {
        //         return {
        //             ingredients: {
        //                 ...state.ingredients,
        //                 [type]: state.ingredients[type] > 0 ? state.ingredients[type] - 1 : 0
        //             },
        //             totalPrice: state.ingredients[type] !== 0 ? this.state.totalPrice - INGREDIENT_PRICES[type] : this.state.totalPrice
        //         }
        //     }
        // );
    // };

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

        const queryParams = [];
        for (let ingKey in this.props.ingredients) {
            queryParams.push(
                encodeURI(
                    `${ingKey}=${this.props.ingredients[ingKey]}`
                )
            )
        }

        this.props.history.push({
            pathname: '/checkout',
            search: queryParams.join('&'),
            state: this.state
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
        for (let key in this.props?.ingredients) {
            disabled[key].add = this.props?.ingredients[key] === 5;
            disabled[key].rem = this.props?.ingredients[key] === 0;
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
                                    ingredients={this.props.ingredients}
                                    totalPrice={this.props.totalPrice}
                                    purchased={this.purchaseModeHandler}
                                    continuedToPayment={this.purchaseContinueHandler}
                                />
                        }
                    </Modal>
                    : null}

                <Burger ingredients={this.props.ingredients}/>
                <BuildControls
                    addedIngredient={this.props.onIngredientAdded}
                    removedIngredient={this.props.onIngredientRemoved}
                    totalPrice={this.props.totalPrice}
                    disabledIngrCtrl={disabled}
                    purchased={this.purchaseModeHandler}
                    purchasingMode={this.state.purchasing}
                />
            </Auxiliary>
        )
    }
}

const mapStateToProps = (state: IInitialState) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        onIngredientAdded : () => {},
        onIngredientRemoved : () => {}
    }

};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onIngredientAdded: (ingName: keyof typeof INGREDIENT_PRICES): AnyAction =>
            dispatch({
                type: actionTypes.ADD_INGREDIENT_ACTION,
                payload: ingName
            }),
        onIngredientRemoved: (ingName: keyof typeof INGREDIENT_PRICES): AnyAction =>
            dispatch({
                type: actionTypes.REMOVE_INGREDIENT_ACTION,
                payload: ingName
            }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);