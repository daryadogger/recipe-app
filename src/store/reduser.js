import {ActionType} from '../store/action';

const initialState = {
    recipes: []
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_RECIPE:
            return {
                ...state,
                recipes: action.payload
            };

        case ActionType.EDIT_RECIPE:
            return {
                ...state,
                recipes: action.payload
            };

        case ActionType.DELETE_RECIPE:
            return {
                ...state,
                recipes: action.payload
            };

        default:
        return state;
    }
};

export {reduser};