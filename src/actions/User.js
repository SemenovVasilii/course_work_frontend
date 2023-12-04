import axios from "axios";
import { store } from "../store";
import { SetAuth } from "../store/userReducer";
import { SetUser } from "../store/userReducer";
import { useDispatch } from 'react-redux'

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
        store.dispatch(SetAuth(token))
        getUser(token)
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
    }
}

export const getUser = async (token) => {
    try {
        const response = await axios.get(`http://localhost:8080/users/getUser`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const user = response.data
        console.log(user)
        store.dispatch(SetUser(user))
    } catch (e) {
        console.log(e)
    }
}