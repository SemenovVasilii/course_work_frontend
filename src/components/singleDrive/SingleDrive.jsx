import './SingleDrive.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { updateDriverDriveStatus } from '../../actions/Drive'
import { addDriverId } from '../../actions/Drive'
import { useSelector } from 'react-redux'
import { driverCurrentDrive } from "../../actions/Drive"

function SingleDrive({ id, passenger_id, cost, departure, destination, description, status }) {

    const [passenger, setPassenger] = useState({})
    const driver_id = useSelector(state => state.user.currentUser.id)

    const updateStatus = (id, status, driver_id) => {
        addDriverId(id, driver_id)
        updateDriverDriveStatus(id, status, driver_id)
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
    }, [])

    return (
        <div className='singledrive'>
            <div className="sd__container">
                <div className="sd__column">
                    <div className="sd__passenger">Заказчик: <span className="sd__passenger-props">{passenger.name} {passenger.surname}</span></div>
                    <div className="sd__cost">Цена: <span className='sd__cost-props'>{cost} рублей</span></div>
                    <div className="sd__departure">Откуда: <span className="sd__departure-props">{departure}</span> </div>
                    <div className="sd__destination">Куда: <span className="sd__destination-props">{destination}</span> </div>
                    <div className="sd__description">Описание: <span className="sd__description-props">{description}</span> </div>
                    <button className="sd__accept" onClick={() => updateStatus(id, "активен", driver_id)}>Принять заказ</button>
                </div>
            </div>
        </div>
    )
}

export { SingleDrive }
