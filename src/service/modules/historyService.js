export default {

  getAllHistory(cb) {
    Vue.http.get('/1.1/classes/ReadInfo?limit=1000&&order=createDate&&').then(data => {
      cb(data.data.results)
    })
  }

}