import { ActionTypes } from "../types/action-types";


const initialState = {
    cards: [],
};


// {action,payload} aplico destructurin directamente en la funcion de flecha
export const cardReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_CARDS:
            return {...state, cards: payload};
        default:
            return state;
    }
}

export const cardSelectedReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_CARD:
            return {...state, ...payload};
        default:
            return state;
    }
}

export const cardCreateReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.CREATE_CARD:
            return {...state, create: payload};
        default:
            return state;
    }
}

export const cardDeleteReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.DELETE_CARD:
            return {...state, card: payload};
        default:
            return state;
    }
}
export const cardSearchReducer = (state = [], {type, payload}) => {
    switch(type){
        case ActionTypes.SEARCH_CARD_SUCCESS:
            return {...state, search: payload};
        default:
            return state;
    }
}