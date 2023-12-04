import { useSelector } from "react-redux/es/hooks/useSelector"
import { CreateOrder } from '../../modules/createOrder/CreateOrder'

function Main() {

    const user = useSelector(state => state.user.currentUser)
    const role = user.role

    return (
        <>
            {(role === "driver") ?
                <div className="driver">driver</div>
                :
                <div className="main__passenger">
                    <div className="main__passenger-row">
                        <CreateOrder />
                    </div>
                </div>
            }
        </>
    )
}

export { Main }
