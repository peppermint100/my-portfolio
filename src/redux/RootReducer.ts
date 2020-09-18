import { combineReducers } from "redux"
import { LanguageReducer } from "./reducers/LanguageReducer"

const RootReducer = combineReducers({
    LanguageReducer
}) 

export type RootReducerType = ReturnType<typeof RootReducer>

export default RootReducer