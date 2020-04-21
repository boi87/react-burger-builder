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

export interface IBurgerIngredientProps {
    type: string;
}

export interface IBurgerProps {
    ingredients: {
        [key: string]: number;
    }
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
