const SET_AUTH = "SET_AUTH"
const SET_CURRENT_USER = "SET_CURRENT_USER"

const defaultState = {
    currentUser: {},
    token: '',
    isAuth: false,
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export const SetAuth = data => ({ type: SET_AUTH, payload: data })
export const SetCurrentUser = data => ({ type: SET_CURRENT_USER, payload: data })
