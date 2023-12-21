import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__row">
                <div className="footer__slogan">
                    Нам по пути!
                </div>
                <div className="footer__logo">
                    <img src={require('../../ui/img/Logo.png')} alt="" className="footer__logo-img" />
                </div>
                <div className="footer__links">
                    <div className="footer__links-row">
                        <div className="footer__links-title">Контакты: </div>
                        <div className="footer__links-email">ivaso2004@mail.ru</div>
                        <a href="https://t.me/smnv_vs" className="footer__links-tg">
                            <img src={require('../../ui/img/tg.png')} alt="" className="footer__tg-img" />
                        </a>
                        <a href="https://vk.com/smnv_vs" className="footer__links-vk">
                            <img src={require('../../ui/img/vk.png')} alt="" className="footer__vk-img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }
