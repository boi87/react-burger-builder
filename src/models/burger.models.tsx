import {History, LocationState} from "history";

export interface IState {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number,
    purchasing: boolean,
    error: {
        value: boolean,
        errorMessage: string
    },
    loading: boolean
}

export interface ICheckOutState {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number
}

export interface IBurgerIngredientProps {
    type: string;
}

export interface IBurgerProps {
    ingredients: {
        [key: string]: number;
    }
}

export interface IBurgerBuilderProps {
    history: History<LocationState>
}

export interface ICheckOutProps {
    history: History<LocationState>
}

export interface ICheckOutSummaryProps {
    ingredients: {
        [key: string]: number;
    },
    purchaseCancelled: () => void,
    purchaseContinued: () => void
}

export interface IOrderSummaryProps {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number,
    purchased: () => void,
    continuedToPayment: () => void
}

export interface IModalProps {
    show: boolean,
    purchased: () => void,
    children?: any
}

export interface IErrorMessageProps {
    errorMessage: string,
    clicked: () => void,
    buttonText: string
}
