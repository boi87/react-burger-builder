import {Action} from "redux";

export const ADD_INGREDIENT_ACTION: Action = {type: 'ADD_INGREDIENT'};
export const REMOVE_INGREDIENT_ACTION: Action = {type: 'REMOVE_INGREDIENT'};

export const INITIAL_FETCH_INGREDIENTS_ACTION: Action = {type: 'INITIAL_FETCH_INGREDIENTS_ACTION'};
export const INITIAL_FETCH_INGREDIENTS_ACTION_COMPLETED: Action = {type: 'INITIAL_FETCH_INGREDIENTS_ACTION_COMPLETED'};
export const INITIAL_FETCH_INGREDIENTS_ACTION_FAILED: Action = {type: 'INITIAL_FETCH_INGREDIENTS_ACTION_FAILED'};