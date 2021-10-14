import { create } from './BaseService'

const http=create()

export function listAdoptions() {
    return http.get('/adopt')
}

export function getAnimal(id) {
    return http.get(`/adopt/${id}`)
}

export const createAnimal = (animal) => {
    return http.post('/new-animal', animal)
}