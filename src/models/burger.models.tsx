export interface IState {
    ingredients: {
        [key: string]: number;
    },
    totalPrice: number,
    purchasing: boolean
}

export interface IBurgerIngredientProps {
    type: string;
}

export interface IBurgerProps {
    ingredients: {
        [key: string]: number;
    }
}
