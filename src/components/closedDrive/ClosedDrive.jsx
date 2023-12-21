import { useSelector } from 'react-redux'
import './ClosedDrive.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ClosedDrive({ id, passenger_id, driver_id, cost, departure, destination, description, status }) {

    const role = useSelector(state => state.user.currentUser.role)
    const [passenger, setPassenger] = useState({})
    const [driver, setDriver] = useState({})

    useEffect(() => {
        if (role === "driver") {
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
        } else {
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
    }, [role, driver_id, passenger_id])


    return (
        <div className='closedrive'>
            <div className="cd__container">
                <div className="cd__column">
                    {
                        (Object.keys(passenger).length !== 0) ?
                            <div className="cd__passenger">Пассажир: <span className='cd__passenger-props'>{passenger.name} {passenger.surname}</span></div>
                            :
                            <div className="cd__driver">Водитель: <span className='cd__driver-props'>{driver.name} {driver.surname}</span></div>
                    }
                    <div className="cd__status">Статус: <span className='cd__status-props'>{status}</span></div>
                    <div className="cd__cost">Цена: <span className='cd__cost-props'>{cost} рублей</span></div>
                    <div className="cd__departure">Откуда: <span className='cd__departure-props'>{departure}</span></div>
                    <div className="cd__destination">Куда: <span className='cd__destination-props'>{destination}</span></div>
                    <div className="cd__description">Описание: <span className='cd__description-props'>{description}</span></div>
                </div>
            </div>
        </div>
    )
}

export { ClosedDrive }
