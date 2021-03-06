import {RouteComponentProps} from "react-router";

export interface IInitialState extends IBurgerBuilderOwnProps{
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number
}

export interface IState {
    purchasing: boolean,
    error: {
        value: boolean,
        errorMessage: string
    },
    loading: boolean
}

// burger builder

export interface IBurgerBuilderOwnProps {
    onIngredientAdded?: ((ingName: string) => void)
    onIngredientRemoved?: ((ingName: string) => void)
    onInitialFetch?: (() => void)
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
    orderForm: {
        name: string,
        email: string,
        address: {
            street: string,
            postCode: string
        },
        delivery: 'ASAP' | '30 mins' | '1 hour'},
    orderSuccess: boolean,
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
    orders: IOrderGet[],
    error: {
        value: boolean,
        errorMessage: string
    },
    orderDeleted: boolean,
    deletingOrder: boolean,
    loading: boolean
}

export interface IOrderGet {
    id: string,
    ingredients: {
        [key: string]: number;
    },
    price: number
}

export interface IOrderPost {
    ingredients: {
        [key: string]: number;
    },
    price: string,
    customer: {
        name: string,
        email: string,
        address: {
            street: string,
            postCode: string
        },
    },
    delivery: 'ASAP' | '30 mins' | '1 hour'
}

export interface IOrderProps {
    id: string,
    ingredients: {
    [key: string]: number;
},
    totalPrice: number,
    orderDeleted: (id: string) => void
    deleting: boolean
}

// alert
export interface IAlertProps {
    message: string
    severity: "success" | "info" | "warning" | "error" | undefined
}

// error message
export interface IErrorMessageProps {
    errorMessage: string,
    clicked?: () => void,
    buttonText: string
}
