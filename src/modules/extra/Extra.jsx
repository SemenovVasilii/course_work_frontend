import './Extra.scss'
import { YandexMap } from '../../components/yandexMap/YandexMap'
import { DrivesHistory } from '../../components/drivesHistory/DrivesHistory'

function Extra() {
    return (
        <div className='extra'>
            <YandexMap />
            <DrivesHistory />
        </div>
    )
}

export { Extra }
