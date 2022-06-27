import http from '@/core/http-common'
class SignInViewService {
    // Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco
    createNewUser(user){
        return http.post(`users`, user)
    }
}

export default new SignInViewService();