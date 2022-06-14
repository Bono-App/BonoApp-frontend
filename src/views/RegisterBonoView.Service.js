import http from '@/core/http-common'
class RegisterBonoViewService {
    endpoint = 'bonds';

    createNewBono(createBono){
        return http.post(`${this.endpoint}`, createBono)
    }
}

export default new RegisterBonoViewService();