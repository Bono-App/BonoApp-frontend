import http from '@/core/http-common'
class RegisterBonoViewService {
    // Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco
    endpoint = 'bonds';

    createNewBono(createBono){
        return http.post(`${this.endpoint}`, createBono)
    }
}

export default new RegisterBonoViewService();