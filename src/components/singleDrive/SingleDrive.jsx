import './SingleDrive.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { updateDriveStatus } from '../../actions/Drive'
import { addDriverId } from '../../actions/Drive'
import { useSelector } from 'react-redux'

function SingleDrive({ id, passenger_id, cost, departure, destination, description, status }) {

    const [passenger, setPassenger] = useState({})
    const driver_id = useSelector(state => state.user.currentUser.id)

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
    }, [passenger_id])

    const updateStatus = (id, status) => {
        try {
            updateDriveStatus(id, status)
            addDriverId(id, driver_id, passenger_id)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='singledrive'>
            <div className="sd__container">
                <div className="sd__column">
                    <div className="sd__passenger">Заказчик: <span className="sd__passenger-props">{passenger.name} {passenger.surname}</span></div>
                    <div className="sd__cost">Цена: <span className='sd__cost-props'>{cost} рублей</span></div>
                    <div className="sd__departure">Откуда: <span className="sd__departure-props">{departure}</span> </div>
                    <div className="sd__destination">Куда: <span className="sd__destination-props">{destination}</span> </div>
                    <div className="sd__description">Описание: <span className="sd__descripiton-props">{description}</span> </div>
                    <button className="sd__accept" onClick={() => updateStatus(id, "active")}>Принять заказ</button>
                </div>
            </div>
        </div>
    )
}

export { SingleDrive }
