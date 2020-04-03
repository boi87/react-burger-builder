export interface IBurgerProps {
    ingredients: {
        [key: string]: number;
    }
}

export interface IState {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number
}