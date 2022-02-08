// Este archivo se encarga de combinar los reducers y son enviados al archivo store.js

import { combineReducers } from 'redux';
import { cardReducer, cardSelectedReducer, cardCreateReducer, cardDeleteReducer, cardSearchReducer} from "./cardReducer";//

const reducers = combineReducers({
    allCards : cardReducer,
    card: cardSelectedReducer,
    create: cardCreateReducer,
    delete: cardDeleteReducer,
    search: cardSearchReducer,
});

export default reducers;

