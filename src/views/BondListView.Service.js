import http from '@/core/http-common'
class BondListViewService {    

    getAllBond(){
        return http.get(`bonds`);
    }

    getAmericanBond(id){
        return http.get(`bondresult/${id}/american`)
    }
    getFrancesBond(id){
        return http.get(`bondresult/${id}/frances`)
    }
    getGermanyBond(id){
        return http.get(`bondresult/${id}/germany`)
    }
}

export default new BondListViewService();