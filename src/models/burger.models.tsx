import {RouteComponentProps} from "react-router";

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

// check out
export interface ICheckOutState {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number
}

// burger ingredient
export interface IBurgerIngredientProps {
    type: string;
}

// burger
export interface IBurgerProps {
    ingredients: {
        [key: string]: number;
    }
}

// checkout summary
export interface ICheckOutSummaryProps {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number,
    purchaseCancelled: () => void,
    purchaseContinued: () => void
}

// order summary
export interface IOrderSummaryProps {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number,
    purchased: () => void,
    continuedToPayment: () => void
}

// contact data
export interface IContactDataState {
    name: string,
    email: string,
    address: {
        street: string,
        postCode: string
    },
    loading: boolean
}

export interface IContactDataProps extends RouteComponentProps {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number
}

// modal
export interface IModalProps {
    show: boolean,
    purchased: () => void,
    children?: any
}

// orders
export interface IOrdersState {
    orders: IOrder[]
}

export interface IOrder {
    ingredients: {
        [key: string]: number;
    },
    price: number
}

export interface IOrderProps {
    ingredients: string,
    totalPrice: number
}

// error message
export interface IErrorMessageProps {
    errorMessage: string,
    clicked: () => void,
    buttonText: string
}
