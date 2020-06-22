import * as actionTypes from "./actions";

export const addIngredientAction = (payload: { [ingName: string]: string }) => ({
    type: actionTypes.ADD_INGREDIENT_ACTION,
    payload: payload
});
export const removeIngredientAction = (payload: { [ingName: string]: string }) => ({
    type: actionTypes.REMOVE_INGREDIENT_ACTION,
    payload: payload
});
export const initialFetchIngredientsAction = () => ({
    type: actionTypes.INITIAL_FETCH_INGREDIENTS_ACTION
});