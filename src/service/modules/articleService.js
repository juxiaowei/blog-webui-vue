export default {
  getAllArticle(cb) {
     Vue.http.get('/api/article/paging/0').then(data => {
      cb(data.data.data.records)
    })
  }

}