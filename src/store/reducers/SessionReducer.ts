import { ActionInterface } from "."
import { SESSION_TYPES } from "../actions/SessionActions"

export const SessionReducer = (state = false as boolean, action: ActionInterface ) => {
    switch(action.type) {
        case SESSION_TYPES.SET_LOGGED_IN :
            return action.payload
        default:
            return state
    }
}