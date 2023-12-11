import './DrivesList.scss'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDrives } from '../../actions/Drive'
import { SingleDrive } from '../../components/singleDrive/SingleDrive'
import { DrivesListPagination } from '../../components/drivesListPagination/DrivesListPagination'


function DrivesList() {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [drivesPerPage] = useState(3)

    useEffect(() => {
        setLoading(true)
        getDrives()
        setLoading(false)
    }, [])

    const drives = useSelector(state => state.drive.drives)
    const lastDrivesIndex = currentPage * drivesPerPage
    const firstDrivesIndex = lastDrivesIndex - drivesPerPage
    const currentDrives = drives.slice(firstDrivesIndex, lastDrivesIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (loading) {
        return (
            <div class="preloader-wrapper active">
                <div class="spinner-layer spinner-red-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='driveslist'>
            <div className="dl__column">
                <div className="dl__title">Доступные заказы</div>
                {currentDrives.map((e) => (<SingleDrive key={e.id} {...e} />))}
                <DrivesListPagination drivesPerPage={drivesPerPage} totalDrives={drives.length} paginate={paginate} />
            </div>
        </div>
    )
}

export { DrivesList }
