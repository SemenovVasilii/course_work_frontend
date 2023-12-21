import './PassengerMain.scss'
import { CreateOrder } from '../../modules/createOrder/CreateOrder'
import { useSelector } from 'react-redux'
import { passengerCurrentDrive } from "../../actions/Drive"
import { useEffect } from 'react'
import { PassengerDrive } from '../../modules/passengerDrive/PassengerDrive'
import { Footer } from '../../modules/footer/Footer'
import { Header } from '../../modules/header/Header'
import { Extra } from '../../modules/extra/Extra'


function PassengerMain() {

    const passenger_id = useSelector(state => state.user.currentUser.id)
    const currentDrive = useSelector(state => state.drive.passengerCurrentDrive)

    useEffect(() => {
        passengerCurrentDrive(passenger_id)
    }, [currentDrive.status, passenger_id])



    return (
        <>
            <Header />
            {
                ((currentDrive.status === "открыт") || (currentDrive.status === "активен")) ?
                    <div className="passengermain">
                        <PassengerDrive />
                        <Extra />
                    </div>
                    :
                    <div className="passengermain">
                        <CreateOrder />
                        <Extra />
                    </div>
            }
            <Footer />
        </>
    )
}

export { PassengerMain }
