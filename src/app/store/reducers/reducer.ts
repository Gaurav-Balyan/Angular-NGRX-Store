import { ActionUnion, ActionTypes } from '../actions/actions';

export const initialState = {
    items: [],
    cart: []
};

export function ShopReducer(state = initialState, action: ActionUnion) {
    switch(action.type) {
        case ActionTypes.LoadSuccess:
            return {
                ...state,
                // items: [...action.payload],
                items: [].concat(action.payload),
                // items: [].concat.apply([], action.payload),
            };
        case ActionTypes.Add:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case ActionTypes.Remove:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.name !== action.payload.name)]
            }
        default:
            return state;
    }
}