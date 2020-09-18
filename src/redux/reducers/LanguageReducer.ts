import { SET_LANGUAGE, setLanguage } from "./../actions/LanguageActions"

const initialState: string | null = null 
type LanguageActionsType = ReturnType<typeof setLanguage>
    
export const LanguageReducer = (state= initialState, action:LanguageActionsType) => {
   switch(action.type){
        case SET_LANGUAGE:
            return action.payload
        default: 
            return initialState
   } 
}