import "./DriverMain.scss"
import { DrivesList } from "../../modules/drivesList/DrivesList"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { driverCurrentDrive } from "../../actions/Drive"
import { useEffect } from "react"
import { DriverDrive } from "../../modules/driverDrive/DriverDrive"


function DriverMain() {

    const user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        const driver_id = user.id
        driverCurrentDrive(driver_id)
    }, [user])

    const currentDrive = useSelector(state => state.drive.driverCurrentDrive)

    return (
        <>
            {
                (currentDrive && currentDrive.status === "active") ?
                    <div className="drivermain">
                        <DriverDrive />
                    </div>
                    :
                    <div className="drivermain">
                        <DrivesList />
                    </div>
            }
        </>
    )
}

export { DriverMain }