import { createStore } from "redux";
import reducers from "./reducers/index";

// createStore pued utilizar 3 parametros
const store = createStore(
    reducers,
    {}, //el segundo parametro podrian ser un middleware(Saga o Trunk) si no hay qeda {}
     
     
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // activa la herramiento de desarrollo en el navegador Chrome
    )

// metodo subcribe se ejecuta cuando hay un cambio
// store.subscribe(()=> console.log(store));

export default store;