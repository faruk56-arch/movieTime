import axios from 'axios'

const API_URL = "http://localhost:8000"

export const getMovie = async () => {
    try {
        const response = await axios.get(`${API_URL}/:name`)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}
export default getMovie
