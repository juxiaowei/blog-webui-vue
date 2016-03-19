export default {
  getAllArticle(cb) {
     Vue.http.get('/1.1/classes/Article?limit=10&&order=createDate&&').then(data => {
      cb(data.data.results)
    })
  }

}