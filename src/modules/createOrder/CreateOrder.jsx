import { useState } from 'react'
import { createDrive } from '../../actions/Drive'
import './CreateOrder.scss'
import { useSelector } from 'react-redux'

function CreateOrder() {

    const passenger_id = useSelector(state => state.user.currentUser.id)
    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')
    const [cost, setCost] = useState('')
    const [description, setDescription] = useState('')

    const Create = () => {
        createDrive(passenger_id, cost, departure, destination, description)
            .then(setDeparture(''), setDestination(''), setCost(''), setDescription(''))
    }

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
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                        />
                        <div className="createorder__destination-title">Место прибытия</div>
                        <input
                            type="text"
                            className="createorder__destination-input"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        <div className="createorder__cost-title">Цена</div>
                        <input
                            type="text"
                            className="createorder__cost-input"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                        <div className="createorder__description-title">Описание</div>
                        <input
                            type="text"
                            className="createorder__description-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className="createorder__button" onClick={() => Create()} >Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CreateOrder }
