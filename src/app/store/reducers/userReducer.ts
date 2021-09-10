import { ActionUnion, ActionTypes } from '../actions/userActions';

export const initialState = {
    users: [{
        firstName: 'John',
        lastName: 'Doe'
    }]
};

export function UserReducer(state = initialState, action: ActionUnion) {
    switch(action.type) {
        case ActionTypes.Get:
            return {
                ...state
            };
        case ActionTypes.Add:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case ActionTypes.Remove:
            return {
                ...state,
                users: [...state.users.filter(item => item.firstName !== action.payload)]
            }
        default:
            return state;
    }
}