import { ActionInterface } from "../Store"
import { SESSION_TYPES } from "../actions/SessionActions"

export const SessionReducer = (state:boolean = false, action: ActionInterface ) => {
    switch(action.type) {
        case SESSION_TYPES.SET_LOGGED_IN :
            return action.payload
        default:
            return state
    }
}