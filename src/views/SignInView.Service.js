import http from '@/core/http-common'
class SignInViewService {
    createNewUser(user){
        return http.post(`users`, user)
    }
}

export default new SignInViewService();