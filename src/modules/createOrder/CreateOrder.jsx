import './CreateOrder.scss'

function CreateOrder() {
    return (
        <div className='createorder'>
            <div className="createorder__container">
                <div className="createorder__form">
                    <div className="createorder__column">
                        <div className="createorder__title">Форма создания заказа</div>
                        <div className="createorder__departure-title">Место отправления</div>
                        <input
                            type="text"
                            className="createorder__departure-input"
                        />
                        <div className="createorder__destination-title">Место прибытия</div>
                        <input
                            type="text"
                            className="createorder__destination-input"
                        />
                        <div className="createorder__cost-title">Цена</div>
                        <input
                            type="text"
                            className="createorder__cost-input"
                        />
                        <div className="createorder__description-title">Описание</div>
                        <input
                            type="text"
                            className="createorder__description-input"
                        />
                        <button className="createorder__button">Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CreateOrder }
