import { ActionTypes } from "../types/action-types";

export const searchCardSuccess = (search) => {
   return {
       type: ActionTypes.SEARCH_CARD_SUCCESS,
       payload: search,
   };
};

// export const searchCardEmpty = (error) => {
//     return {
//         type: ActionTypes.SEARCH_CARD_EMPTY,
//         payload: error,
//     };
//  };