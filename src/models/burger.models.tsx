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

// modal
export interface IModalProps {
    show: boolean,
    purchased: () => void,
    children?: any
}

// error message
export interface IErrorMessageProps {
    errorMessage: string,
    clicked: () => void,
    buttonText: string
}
