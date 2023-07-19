export const SESSION_TYPES = {
    SET_LOGGED_IN: "SET_LOGGED_IN"
}

export const SESSION_ACTIONS = {
    SET_LOGGED_IN : (loggedIn: boolean) =>{
        return {
            type: SESSION_TYPES.SET_LOGGED_IN,
            payload: loggedIn
        }
    }
}