import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import {IState} from "../../models/burger.models";

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 40,
    meat: 130,
    bacon: 70
};

class BurgerBuilder extends Component<{}, IState> {
// constructor(props) {
//     super(props);
//     this.state = {
//
//     }
// }
    readonly state: Readonly<IState> = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1
        },
        totalPrice: 170
    };

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

    render() {
        // if no quantity for ingredient, disable remove button
        const disabled: { [key: string]: {'add': boolean, 'rem': boolean} } = {
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
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addedIngredient={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    disabled={disabled}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;