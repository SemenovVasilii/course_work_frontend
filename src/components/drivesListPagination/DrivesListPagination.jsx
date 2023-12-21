import './DrivesListPagination.scss'

function DrivesListPagination({ drivesPerPage, totalDrives, paginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDrives / drivesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='drivelistpagination'>
            {
                pageNumbers.map(number => (
                    <div className="dlp__number" key={number}>
                        <button className="dlp__number-button" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export { DrivesListPagination }


