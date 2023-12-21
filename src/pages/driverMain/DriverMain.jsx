import "./DriverMain.scss"
import { DrivesList } from "../../modules/drivesList/DrivesList"
import { useSelector } from "react-redux"
import { driverCurrentDrive } from "../../actions/Drive"
import { useEffect } from "react"
import { DriverDrive } from "../../modules/driverDrive/DriverDrive"
import { Footer } from "../../modules/footer/Footer"
import { Header } from "../../modules/header/Header"
import { Extra } from "../../modules/extra/Extra"


function DriverMain() {

    const driver_id = useSelector(state => state.user.currentUser.id)
    const currentDrive = useSelector(state => state.drive.driverCurrentDrive)

    useEffect(() => {
        driverCurrentDrive(driver_id)
    }, [currentDrive.status, driver_id])



    return (
        <>
            <Header />
            {
                (currentDrive.status === "активен") ?
                    <div className="drivermain">
                        <DriverDrive />
                        <Extra />
                    </div>
                    :
                    <div className="drivermain">
                        <DrivesList />
                        <Extra />
                    </div>
            }
            <Footer />
        </>
    )
}

export { DriverMain }