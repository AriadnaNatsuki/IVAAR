import { create } from './BaseService'
//useAcessToken=false ---Consultar BaseService.js
const http = create(false)
export const login = (email,password) => {
    return http.post('/login',{email,password})
}