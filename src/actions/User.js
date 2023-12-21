import axios from "axios";
import { store } from "../store";
import { SetAuth, SetCurrentUser, Logout } from "../store/userReducer";

export const registartion = async (name, surname, email, password, role) => {
    try {
        const response = await axios.post(`http://localhost:8080/auth/registration`, {
            name: name,
            surname: surname,
            email: email,
            password: password,
            role: role
        })
        alert(response.data.message)
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
    }
}

export const login = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:8080/auth/login`, {
            email: email,
            password: password
        })
        const token = response.data.token
        localStorage.setItem('token', token)
        store.dispatch(SetAuth(token))
        getCurrentUser(token)
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
    }
}

export const getCurrentUser = async (token) => {
    try {
        const response = await axios.get(`http://localhost:8080/users/getCurrentUser`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const user = response.data
        store.dispatch(SetCurrentUser(user))
    } catch (e) {
        console.log(e)
    }
}

export const changeName = async (id, name, token) => {
    try {
        const response = await axios.put(`http://localhost:8080/users/changeName`, {
            id: id,
            name: name
        })
        getCurrentUser(token)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
    }
}

export const changeSurname = async (id, surname, token) => {
    try {
        const response = await axios.put(`http://localhost:8080/users/changeSurname`, {
            id: id,
            surname: surname
        })
        getCurrentUser(token)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
    }
}

export const changePassword = async (id, password, newPassword, token) => {
    try {
        const response = await axios.put(`http://localhost:8080/users/changePassword`, {
            id: id,
            password: password,
            newPassword: newPassword
        })
        getCurrentUser(token)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
    }
}

export const logout = async () => {
    store.dispatch(Logout())
    localStorage.removeItem('token')
}