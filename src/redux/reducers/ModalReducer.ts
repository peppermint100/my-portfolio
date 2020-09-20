import { SET_MODAL_STATE, setModalState } from "./../actions/ModalActions"

const initialState: boolean = false; 
type ModalActionType = ReturnType<typeof setModalState>
    
export const ModalReducer = (state= initialState, action:ModalActionType) => {
   switch(action.type){
        case SET_MODAL_STATE:
            return action.payload
        default: 
            return initialState
   } 
}