import './DrivesListPagination.scss'

function DrivesListPagination({ drivesPerPage, totalDrives, paginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDrives / drivesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='drivelistpagination'>
            {
                pageNumbers.map(number => (
                    <li className="dlp__item" key={number}>
                        <button className="dlp__link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export { DrivesListPagination }


