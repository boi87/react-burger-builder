import * as actionTypes from './actions/actions';
import {IInitialState} from "../models/burger.models";
import { AnyAction} from "redux";

const initialState: IInitialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 1,
        meat: 1
    },
    totalPrice: 170,
};

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT_ACTION:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT_ACTION:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;