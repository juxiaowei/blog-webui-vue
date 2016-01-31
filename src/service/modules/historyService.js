export default {

  getAllHistory(cb) {
    
    Vue.http.get('/api/readinfo/paging?start=0').then(data => {
       cb(data.data.data)
    });

  }

}