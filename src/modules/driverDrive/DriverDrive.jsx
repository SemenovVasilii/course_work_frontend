import { useEffect, useState } from 'react'
import './DriverDrive.scss'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { updateDriverDriveStatus } from "../../actions/Drive"

function DriverDrive() {

    const currentDrive = useSelector(state => state.drive.driverCurrentDrive)
    const { id, passenger_id, driver_id, cost, departure, destination, description, status } = currentDrive
    const [passenger, setPassenger] = useState({})
    const passengerName = passenger.name
    const passengerSurname = passenger.surname

    const updateStatus = (id, status, driver_id, passenger_id) => {
        updateDriverDriveStatus(id, status, driver_id, passenger_id)
    }

    useEffect(() => {
        const getUser = async (id) => {
            try {
                const response = await axios.get(`http://localhost:8080/users/getUser/${id}`, {})
                const data = response.data
                setPassenger(data)
            } catch (e) {
                console.log(e)
            }
        }
        getUser(passenger_id)

        return setPassenger({})
    }, [])

    return (
        <div className='driverdrive'>
            <div className="dd__row">
                <div className="dd__form">
                    <div className="dd__column">
                        <div className="dd__title">Текущий заказ</div>
                        <div className="dd__main">
                            <div className="dd__passenger">Пассажир: <span className='dd__passenger-props'>{passengerName} {passengerSurname}</span></div>
                            <div className="dd__status">Статус: <span className="dd__status-props">{status}</span></div>
                            <div className="dd__cost">Цена: <span className="dd__cost-props">{cost}</span></div>
                            <div className="dd__departure">Забрать: <span className="dd__departure-props">{departure}</span></div>
                            <div className="dd__destination">Отвезти: <span className="dd__destination-props">{destination}</span></div>
                            <div className="dd__description">Описание: <span className="dd__description-props">{description}</span></div>
                            <div className="dd__button-row">
                                <button className="dd__cancel" onClick={() => updateStatus(id, "отменен", driver_id, passenger_id)}>Отменить</button>
                                <button className="dd__complete" onClick={() => updateStatus(id, "завершен", driver_id, passenger_id)}>Завершить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DriverDrive }
