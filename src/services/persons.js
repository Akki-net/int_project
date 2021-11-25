import axios from "axios";
const baseUrl = '/api/persons'

const create = obj => {
    const request = axios.post(baseUrl, obj)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const removeOne = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(response => response.data)
}

export default { create, getAll, removeOne, update }