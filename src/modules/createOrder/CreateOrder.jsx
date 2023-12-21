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

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;

    const Create = () => {
        if (departure && destination && cost && description) {
            if (lowerCaseLetters.test(cost) || upperCaseLetters.test(cost)) {
                alert('Формат цены: 2000')
                setCost('')
            } else {
                createDrive(passenger_id, cost, departure, destination, description)
                    .then(setDeparture(''), setDestination(''), setCost(''), setDescription(''))
            }
        } else {
            alert('Заполните все поля!')
        }

    }

    return (
        <div className='createorder'>
            <div className="createorder__row">
                <div className="createorder__form">
                    <div className="createorder__column">
                        <div className="createorder__title">Закажите машину</div>
                        <div className="createorder__main">
                            <div className="createorder__departure-title">Где вас забрать?</div>
                            <input
                                type="text"
                                className="createorder__departure-input"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                            />
                            <div className="createorder__destination-title">Куда хотите приехать?</div>
                            <input
                                type="text"
                                className="createorder__destination-input"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                            <div className="createorder__cost-title">Укажите цену в рублях</div>
                            <input
                                type="text"
                                className="createorder__cost-input"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                            <div className="createorder__description-title">Добавьте описание</div>
                            <input
                                type="text"
                                className="createorder__description-input"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div className="createorder__button-row">
                                <button className="createorder__button" onClick={() => Create()} >Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CreateOrder }
