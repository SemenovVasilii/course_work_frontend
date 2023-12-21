import './YandexMap.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps'


function YandexMap() {
    return (
        <div className='yandexmap'>
            <YMaps>
                <div className='map'>
                    <Map defaultState={{ center: [59.929499, 30.296698], zoom: 15 }} width='98%' height='50vh' padding='0px' />
                </div>
            </YMaps>
        </div>
    )
}

export { YandexMap }
