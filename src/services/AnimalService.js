import { create } from './BaseService'

const http=create()

export function AdoptList() {
    return http.get('/adopt')
}