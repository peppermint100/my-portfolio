import { combineReducers } from "redux"
import { LanguageReducer } from "./reducers/LanguageReducer"
import { ModalReducer } from "./reducers/ModalReducer"

const RootReducer = combineReducers({
    LanguageReducer,
    ModalReducer
}) 

export type RootReducerType = ReturnType<typeof RootReducer>

export default RootReducer