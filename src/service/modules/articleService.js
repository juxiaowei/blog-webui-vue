const articles = [
  {
    title: '高姿态的使用CDN',
    pic: 'http://www.ihades.me/blog-masonry-2.jpg',
    url: 'http://www.ihades.me/gaozitaishiyongcdn.html',
    tag: '其他',
    createDate: new Date()
  },
  {
    title: '团队内部在践行的技术栈',
    pic: 'http://www.ihades.me/blog-masonry-2.jpg',
    url: 'http://www.ihades.me/yitaojishuzhan.html',
    tag: '其他',
    createDate: new Date()
  },{
    title: 'Flux到底是什么？',
    pic: 'http://www.ihades.me/blog-masonry-2.jpg',
    url: 'http://www.ihades.me/fluxdelijie.html',
    tag: 'web',
    createDate: new Date()
  },{
    title: '用Docker构建开发环境',
    pic: 'http://www.ihades.me/docker2.jpg',
    url: 'http://www.ihades.me/yongdockerkaifahuanjing.html',
    tag: 'docker',
    createDate: new Date()
  },{
    title: 'Mac下初尝Docker',
    pic: 'http://www.ihades.me/docker1.jpg',
    url: 'http://www.ihades.me/macxiachangshidocker.html',
    tag: 'docker',
    createDate: new Date()
  }
]
export default {
  getAllArticle(cb) {
    //假装网络请求来的数据
    setTimeout(() => cb(articles), 100)
  }

}