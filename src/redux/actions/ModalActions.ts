export const SET_MODAL_STATE = "SET_MODAL_STATE" as const;

export const setModalState = (state: boolean) => {
   return {
       type: SET_MODAL_STATE,
       payload: state
   } 
}