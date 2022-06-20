import http from '@/core/http-common'
class BondListViewService {    

    getAllBond(){
        return http.get(`bonds`);
    }

    getAmericanBond(id){
        return http.get(`americanbond/${id}`)
    }
}

export default new BondListViewService();