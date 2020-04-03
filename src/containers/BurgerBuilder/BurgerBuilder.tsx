import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IState} from "../../models/burger.models";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
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
            bacon: 1,
            cheese: 1,
            meat: 0
        },
        totalPrice: 4
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

        setTimeout(() => {
            console.log(this.state.totalPrice);
        },0)
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

        setTimeout(() => {
            console.log(this.state.totalPrice);
        },0)
    };

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addedIngredient={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;