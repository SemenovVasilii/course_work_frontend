import axios from 'axios'
import { store } from "../store";
import { SetDriverCurrentDrive, SetDrives, SetPassengerCurrentDrive, SetClosedDrives } from '../store/driveReducer'

export const createDrive = async (passenger_id, cost, departure, destination, description) => {
    try {
        const response = await axios.post(`http://localhost:8080/drives/createDrive`, {
            passenger_id: passenger_id,
            cost: cost,
            departure: departure,
            destination: destination,
            description: description
        })
        passengerCurrentDrive(passenger_id)
    } catch (e) {
        alert(e)
        console.log(e)
    }
}

export const getDrives = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/drives/getDrives`, {})
        const drives = response.data
        store.dispatch(SetDrives(drives))
    } catch (e) {
        console.log(e)
    }
}

export const updateDriverDriveStatus = async (id, status, driver_id, passenger_id) => {
    try {
        const response = await axios.put(`http://localhost:8080/drives/updateDriverDriveStatus`, {
            id: id,
            status: status
        })
        driverCurrentDrive(driver_id)
        passengerCurrentDrive(passenger_id)
        getDriverClosedDrives(driver_id)
    } catch (e) {
        console.log(e)
    }
}

export const updatePassengerDriveStatus = async (id, status, passenger_id, driver_id) => {
    try {
        const response = await axios.put(`http://localhost:8080/drives/updatePassengerDriveStatus`, {
            id: id,
            status: status
        })
        passengerCurrentDrive(passenger_id)
        driverCurrentDrive(driver_id)
        getPassengerClosedDrives(passenger_id)
    } catch (e) {
        console.log(e)
    }
}



export const addDriverId = async (id, driver_id) => {
    try {
        const response = await axios.put(`http://localhost:8080/drives/addDriverId`, {
            id: id,
            driver_id: driver_id
        })
    } catch (e) {
        console.log(e)
    }
}

export const passengerCurrentDrive = async (passenger_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/drives/passengerCurrentDrive`, {
            headers: { passenger_id: passenger_id }
        })
        store.dispatch(SetPassengerCurrentDrive(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const driverCurrentDrive = async (driver_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/drives/driverCurrentDrive`, {
            headers: { driver_id: driver_id }
        })
        store.dispatch(SetDriverCurrentDrive(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const getDriverClosedDrives = async (driver_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/drives/getDriverClosedDrives`, {
            headers: { driver_id: driver_id }
        })
        store.dispatch(SetClosedDrives(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const getPassengerClosedDrives = async (passenger_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/drives/getPassengerClosedDrives`, {
            headers: { passenger_id: passenger_id }
        })
        store.dispatch(SetClosedDrives(response.data))
    } catch (e) {
        console.log(e)
    }
}

