import http from '@/core/http-common'
class BondListViewService {    
    
    getAllBond(){
        let de = localStorage.getItem('user');
        this.sampleUser = JSON.parse(de);
        return http.get(`users/${this.sampleUser.id}/bonds`);
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