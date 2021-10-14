//Definimos una key ACCESS_TOKEN donde guardar el token
const ACCESS_TOKEN = 'access_token'
//Conseguir el token de acceso de la API del navegador localStorage
export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN)
//Configurar el token de acceso de la API del navegador localStorage
export const setAccessToken = (value) => window.localStorage.setItem(ACCESS_TOKEN,value)
//Borrar el token de acceso de la API del navegador localStorage
export const deleteAcessToken=() => window.localStorage.removeItem(ACCESS_TOKEN)