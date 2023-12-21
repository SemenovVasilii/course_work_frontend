import './PassengerDrive.scss'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { updatePassengerDriveStatus } from "../../actions/Drive"

function PassengerDrive() {

    const currentDrive = useSelector(state => state.drive.passengerCurrentDrive)
    console.log(currentDrive)
    const { id, passenger_id, driver_id, cost, departure, destination, description, status } = currentDrive
    const [driver, setDriver] = useState({})
    const driverName = driver.name
    const driverSurname = driver.surname

    const updateStatus = (id, status, passenger_id, driver_id) => {
        updatePassengerDriveStatus(id, status, passenger_id, driver_id)
    }

    useEffect(() => {
        if (driver_id) {
            const getUser = async (id) => {
                try {
                    const response = await axios.get(`http://localhost:8080/users/getUser/${id}`, {})
                    const data = response.data
                    setDriver(data)
                } catch (e) {
                    console.log(e)
                }
            }
            getUser(driver_id)
        }

        return setDriver({})
    }, [])

    return (
        <div className='passengerdrive'>
            <div className="pd__row">
                <div className="pd__form">
                    <div className="pd__column">
                        <div className="pd__title">Текущий заказ</div>
                        <div className="pd__main">
                            <div className="pd__passenger">Водитель: <span className='pd__passenger-props'>{driverName} {driverSurname}</span></div>
                            <div className="pd__status">Статус: <span className='pd__status-props'>{status}</span></div>
                            <div className="pd__cost">Цена: <span className='pd__cost-props'>{cost}</span></div>
                            <div className="pd__departure">Заберут: <span className='pd__departure-props'>{departure}</span></div>
                            <div className="pd__destination">Отвезут: <span className='pd__destination-props'>{destination}</span></div>
                            <div className="pd__description">Описание: <span className='pd__description-props'>{description}</span></div>
                            <div className="pd__button-row">
                                <button className="pd__cancel" onClick={() => updateStatus(id, "отменен", passenger_id, driver_id)}>Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PassengerDrive }
