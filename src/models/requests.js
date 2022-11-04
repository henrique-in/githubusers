import api from '../services'

export const UserRequest = {
   getUsers: function (name){
    const result = api.get(`users/${name}`)
    return result
   },
   getRepository: function (name){
    const result = api.get(`users/${name}/repos`)
    return result
   }

}