import http from '@/core/http-common'
class RegisterBonoViewService {
    endpoint = 'bono';

    createNewBono(createBono){
        return http.post(`${this.endpoint}/register`, createBono)
    }
}

export default new RegisterBonoViewService();