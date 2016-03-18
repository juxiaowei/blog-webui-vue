export default {

  getAllHistory(cb) {
    Vue.http.get('/api/readinfo/paging/0').then(data => {
      cb(data.data.data)
    })
  }

}