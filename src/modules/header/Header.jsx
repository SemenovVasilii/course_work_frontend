import './Header.scss'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/User'

function Header() {
    return (
        <div className='header'>
            <div className="header__row">
                <div className="header__logo">
                    <img src={require('../../ui/img/Logo.png')} alt="" className="footer__logo-img" />
                </div>
                <div className="header__slogan">Обгоним время для тех, кто опаздывает</div>
                <div className="header__menu">
                    <div className="header__menu-row">
                        <Link to='/'>
                            <button className="header__menu-home">
                                <img src={require('../../ui/img/mainstatic.png')} alt="" className="header__menu-static" />
                                <img src={require('../../ui/img/main.gif')} alt="" className="header__menu-active" />
                            </button>
                        </Link>
                        <Link to='/lk'>
                            <button className="header__menu-lk">
                                <img src={require('../../ui/img/lkstatic.png')} alt="" className="header__menu-static" />
                                <img src={require('../../ui/img/lk.gif')} alt="" className="header__menu-active" />
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className="header__menu-exit" onClick={() => logout()}>
                                <img src={require('../../ui/img/exitstatic.png')} alt="" className="header__menu-static" />
                                <img src={require('../../ui/img/exit.gif')} alt="" className="header__menu-active" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { Header }
