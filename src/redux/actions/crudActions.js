 import { ActionTypes } from "../types/action-types";

  export const createCard = (create) => {
     return {
         type: ActionTypes.CREATE_CARD,
         payload: create,
     };
 };
  export const deleteCArd = (card) => {
     return {
         type: ActionTypes.DELETE_CARD,
         payload: card,
     };
 };