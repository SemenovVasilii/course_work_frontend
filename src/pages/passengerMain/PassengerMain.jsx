import './PassengerMain.scss'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { CreateOrder } from '../../modules/createOrder/CreateOrder'
import { passengerCurrentDrive } from "../../actions/Drive"
import { useEffect } from "react"
import { PassengerDrive } from '../../modules/passengerDrive/PassengerDrive'

function PassengerMain() {

    const user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        const passenger_id = user.id
        passengerCurrentDrive(passenger_id)
    }, [user])

    const currentDrive = useSelector(state => state.drive.passengerCurrentDrive)

    return (
        <>
            {
                (currentDrive && ((currentDrive.status === "open") || (currentDrive.status === "active"))) ?
                    <div className="passengermain">
                        <PassengerDrive />
                    </div>
                    :
                    <div className="passengermain">
                        <CreateOrder />
                    </div>
            }
        </>
    )
}

export { PassengerMain }
