import './Lk.scss'
import { Header } from '../../modules/header/Header'
import { Footer } from '../../modules/footer/Footer'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { changeName } from '../../actions/User'
import { changeSurname } from '../../actions/User'
import { changePassword } from '../../actions/User'

function Lk() {

    const user = useSelector(state => state.user.currentUser)
    const token = useSelector(state => state.user.token)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    const sendName = (id, name, token) => {
        if (name.length !== 0) {
            changeName(id, name, token)
            setName('')
        } else {
            alert('Имя не может быть пустым')
        }
    }

    const sendSurname = (id, surname, token) => {
        if (surname.length !== 0) {
            changeSurname(id, surname, token)
            setSurname('')
        } else {
            alert('Фамилия не может быть пустой')
        }
    }

    const sendPassword = (id, password, newPassword, token) => {
        if (!lowerCaseLetters.test(password) || !upperCaseLetters.test(password) || !numbers.test(password) || (password.length < 8)) {
            alert('Пароль должен быть больше 8 символов, содержать цифры, заглавные и строчные буквы!')
        } else {
            changePassword(id, password, newPassword, token)
            setPassword('')
            setNewPassword('')
        }
    }

    return (
        <div className='lk'>
            <Header />
            <div className="lk__driver">
                <div className="driver__container">
                    <div className="driver__column">
                        <div className="driver__main">
                            <div className="driver__main-column">
                                <div className="driver__title">Личный кабинет</div>
                                <div className="driver__name">
                                    <div className="driver__name-title">Имя: </div>
                                    <div className="driver__main-row">
                                        <div className="driver__name-container">
                                            <input
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder={user.name}
                                                className="driver__name-input"
                                            />
                                        </div>
                                        <button className="driver__name-change" onClick={() => sendName(user.id, name, token)}>Сохранить</button>
                                    </div>
                                </div>
                                <div className="driver__surname">
                                    <div className="driver__surname-title">Фамилия: </div>
                                    <div className="driver__surname-row">
                                        <div className="driver__surname-container">
                                            <input
                                                type="text"
                                                name="surname"
                                                value={surname}
                                                onChange={(e) => setSurname(e.target.value)}
                                                placeholder={user.surname}
                                                className="driver__surname-input"
                                            />
                                        </div>
                                        <button className="driver__surname-change" onClick={() => sendSurname(user.id, surname, token)}>Сохранить</button>
                                    </div>
                                </div>
                                <div className="driver__password">
                                    <div className="driver__password-row">
                                        <div className="driver__pass">
                                            <div className="driver__password-title">Старый пароль: </div>
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="********"
                                                className="driver__password-input"
                                            />
                                        </div>
                                        <div className="driver__confpass">
                                            <div className="driver__confirmpassword-title">Новый пароль: </div>
                                            <input
                                                type="password"
                                                name="confpass"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="********"
                                                className="driver__confirmpassword-input"
                                            />
                                        </div>
                                        <button className="driver__password-change" onClick={() => sendPassword(user.id, password, newPassword, token)}>Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export { Lk }
