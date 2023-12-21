import { useSelector } from 'react-redux'
import './DrivesHistory.scss'
import { useEffect, useState } from 'react'
import { getDriverClosedDrives, getPassengerClosedDrives } from '../../actions/Drive'
import { ClosedDrive } from '../closedDrive/ClosedDrive'

function DrivesHistory() {

    const role = useSelector(state => state.user.currentUser.role)
    const id = useSelector(state => state.user.currentUser.id)
    const [currentPage, setCurrentPage] = useState(1)
    const [closedDrivesPerPage] = useState(1)

    useEffect(() => {
        if (role === "driver") {
            getDriverClosedDrives(id)
        } else {
            getPassengerClosedDrives(id)
        }
    }, [id, role])

    const closedDrives = useSelector(state => state.drive.closedDrives)
    const lastDrivesIndex = currentPage * closedDrivesPerPage
    const firstDrivesIndex = lastDrivesIndex - closedDrivesPerPage
    const currentClosedDrives = closedDrives.slice(firstDrivesIndex, lastDrivesIndex)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(closedDrives.length / closedDrivesPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginateNext = () => {
        if (pageNumbers.includes(currentPage + 1)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const paginateBefore = () => {
        if (pageNumbers.includes(currentPage - 1)) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='driveshistory'>
            <div className="dh__column">
                <div className="dh__title">История заказов</div>
                {!(closedDrives.length === 0) ?
                    <>
                        <div className="dh__row">
                            {(currentPage !== pageNumbers[0]) ?
                                <>
                                    <button className="dh__arrowleft" onClick={() => paginateBefore()}>
                                        <img src={require('../../ui/img/arrowstatic.png')} alt="" className="dh__arrowleft-static" />
                                        <img src={require('../../ui/img/arrow.gif')} alt="" className="dh__arrowleft-active" />
                                    </button>
                                </>
                                :
                                <>
                                </>
                            }
                            {currentClosedDrives.map((e) => (<ClosedDrive key={e.id} {...e} />))}
                            {(currentPage !== pageNumbers.at(-1)) ?
                                <>
                                    <button className="dh__arrowright" onClick={() => paginateNext()}>
                                        <img src={require('../../ui/img/arrowstatic.png')} alt="" className="dh__arrowright-static" />
                                        <img src={require('../../ui/img/arrow.gif')} alt="" className="dh__arrowright-active" />
                                    </button>
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className="dh__none">История пуста!</div>
                    </>
                }
            </div>
        </div >
    )
}

export { DrivesHistory }
