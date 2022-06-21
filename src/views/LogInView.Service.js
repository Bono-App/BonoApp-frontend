import http from '@/core/http-common'
class LogInViewService {

    getUsersByEmail(email){
        return http.get(`users/${email}`)
    }
}

export default new LogInViewService();