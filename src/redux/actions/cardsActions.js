 import { ActionTypes } from "../types/action-types";

 export const setCards = (cards) => {
     return {
         type: ActionTypes.SET_CARDS,
         payload: cards,
     };
 };

 export const selectedCard = (card) => {
    return {
        type: ActionTypes.SELECTED_CARD,
        payload: card,
    };
};