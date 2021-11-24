import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const create = obj => {
    const request = axios.post(baseUrl, obj)
    return request.then(response => response.data)
}

export default { create }