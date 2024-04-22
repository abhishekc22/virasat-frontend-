import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {persistStore} from 'redux-persist'
import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "@reduxjs/toolkit"
import Usereducer from './Userslice'




const persistconfig= { key: 'root', storage, version: 1 };
const reducer = combineReducers({
    Usereducer,
  
    
})
const persisteReducer=persistReducer(persistconfig,reducer)
const store=configureStore({
    reducer:persisteReducer
})
const persistor=persistStore(store)

export {store,persistor};
