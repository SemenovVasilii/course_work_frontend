import axios from 'axios'


export const createDrive = async (passenger_id, cost, departure, destination, description) => {
    try {
        const response = await axios.post(`http://localhost:8080/drive/createDrive`, {
            passenger_id: passenger_id,
            cost: cost,
            departure: departure,
            destination: destination,
            description: description
        })
        alert(response.data.message)
    } catch (e) {
        alert(e)
        console.log(e)
    }
}