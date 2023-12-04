import { useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { login } from '../../actions/User'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Validate = () => {
        if (email && password) {
            login(email, password)
                .then(setEmail(''), setPassword(''))
        } else {
            alert('Заполните все поля!')
        }
    }

    return (
        <div className="login">
            <div className='login_form'>
                <div className='login_enter'>Вход</div>
                <div className='login_email'>Почта</div>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ivaso2004@mail.ru"
                    className='login_email-input'
                />
                <div className='login_password'>Пароль</div>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                    className='login_password-input' />
                <button className='login_button' onClick={() => Validate()}>Продолжить</button>
                <div className='toreg'>Нет аккаунта? <Link to='/registration'><a className='toreg_button'>Создать аккаунт</a></Link></div>
            </div>
        </div>
    )
}

export { Login }
