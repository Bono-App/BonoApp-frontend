import http from '@/core/http-common'
class LogInViewService {
    // Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco

    getUsersByEmail(email){
        return http.get(`users/${email}`)
    }
}

export default new LogInViewService();