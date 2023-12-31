const SET_DRIVES = "SET_DRIVES"
const SET_PASSENGER_CURRENT_DRIVE = "SET_PASSENGER_CURRENT_DRIVE"
const SET_DRIVER_CURRENT_DRIVE = "SET_DRIVER_CURRENT_DRIVE"
const SET_CLOSED_DRIVES = "SET_CLOSED_DRIVES"

const defaultState = {
    drives: [],
    passengerCurrentDrive: {},
    driverCurrentDrive: {},
    closedDrives: []
}

export const driveReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DRIVES:
            return {
                ...state,
                drives: action.payload
            }
        case SET_PASSENGER_CURRENT_DRIVE:
            return {
                ...state,
                passengerCurrentDrive: action.payload
            }
        case SET_DRIVER_CURRENT_DRIVE:
            return {
                ...state,
                driverCurrentDrive: action.payload
            }
        case SET_CLOSED_DRIVES:
            return {
                ...state,
                closedDrives: action.payload
            }
        default:
            return state
    }
}

export const SetDrives = data => ({ type: SET_DRIVES, payload: data })
export const SetPassengerCurrentDrive = data => ({ type: SET_PASSENGER_CURRENT_DRIVE, payload: data })
export const SetDriverCurrentDrive = data => ({ type: SET_DRIVER_CURRENT_DRIVE, payload: data })
export const SetClosedDrives = data => ({ type: SET_CLOSED_DRIVES, payload: data })