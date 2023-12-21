import { useState } from 'react'
import './Registration.scss'
import { Link } from 'react-router-dom'
import { registartion } from '../../actions/User'

function Registration() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [role, setRole] = useState('passenger')

    const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    const Validate = () => {
        if (name && surname && email && password && passwordConfirm && role) {
            console.log(role)
            if (!validEmail.test(email)) {
                return alert('Не валидная почта!')
            }
            if (!lowerCaseLetters.test(password) || !upperCaseLetters.test(password) || !numbers.test(password) || (password.length < 8)) {
                alert('Пароль должен быть больше 8 символов, содержать цифры, заглавные и строчные буквы!')
            }
            if (password === passwordConfirm) {
                registartion(name, surname, email, password, role)
                    .then(setName(''), setSurname(''), setEmail(''), setPassword(''), setPasswordConfirm(''), setRole(''))
                    .then(<Link push to="/"></Link>)
            } else {
                alert('Пароли не совпадают!')
            }
        } else {
            alert('Заполните все поля!')
        }
    }

    return (
        <div className="registration">
            <div className="reg__column">
                <div className='reg_form'>
                    <div className='reg_reg'>Регистрация</div>
                    <div className='reg_name'>Имя</div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Василий"
                        className='reg_name-input'
                    />
                    <div className='reg_surname'>Фамилия</div>
                    <input
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Семенов"
                        className='reg_surname-input'
                    />
                    <div className='reg_email'>Почта</div>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ivaso2004@mail.ru"
                        className='reg_email-input'
                    />
                    <div className='reg_role'>
                        <div className="reg_role-title">Роль</div>
                        <input
                            type="radio"
                            id="passenger"
                            name="role"
                            value="passenger"
                            onChange={(e) => setRole(e.target.value)}
                            className='reg_role-input'
                            checked="checked"
                        />
                        <label for="passenger" className='reg_role-text'>Пассажир</label>
                        <br></br>
                        <input
                            type="radio"
                            id="driver"
                            name="role"
                            value="driver"
                            onChange={(e) => setRole(e.target.value)}
                            className='reg_role-input'
                        />
                        <label for="driver" className='reg_role-text'>Водитель</label>
                    </div>
                    <div className="reg_pass-row">
                        <div className="reg_pass-pass">
                            <div className="reg_password">Пароль</div>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className='reg_password-input'
                            />
                        </div>
                        <div className="reg-pass-conf">
                            <div className="reg_confirmpassword">Подтверждение</div>
                            <input
                                type="password"
                                name="passwordConfirm"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                placeholder="********"
                                className='reg_confirmpassword-input' />
                        </div>
                    </div>
                    <button className='login_button' onClick={() => Validate()}>Продолжить</button>
                    <div className='tologin'>У меня уже есть <Link to='/'><a className='tologin_button'>аккаунт</a></Link></div>
                </div>
            </div>
        </div>
    )
}

export { Registration }