const articles = [
  [{
    title: '团队内部在践行的技术栈',
    pic: '/build/img/blog-masonry-2.jpg',
    url: '/build/article/yitaojishuzhan.html',
    tag: '其他',
    createDate: new Date()
  }, {
    title: 'Flux到底是什么？',
    pic: '/build/img/blog-masonry-2.jpg',
    url: '/build/article/fluxdelijie.html',
    tag: 'web',
    createDate: new Date()
  }],
  [{
    title: '用Docker构建开发环境',
    pic: '/build/img/docker2.jpg',
    url: '/build/article/yongdockerkaifahuanjing.html',
    tag: 'docker',
    createDate: new Date()
  }, {
    title: 'Mac下初尝Docker',
    pic: '/build/img/docker1.jpg',
    url: '/build/article/macxiachangshidocker.html',
    tag: 'docker',
    createDate: new Date()
  }],
  [{
    title: '团队内部在践行的技术栈',
    pic: '/build/img/blog-masonry-2.jpg',
    url: '/build/article/yitaojishuzhan.html',
    tag: '其他',
    createDate: new Date()
  }, {
    title: 'Flux到底是什么？',
    pic: '/build/img/blog-masonry-2.jpg',
    url: '/build/article/fluxdelijie.html',
    tag: 'web',
    createDate: new Date()
  }],
  [{
    title: '用Docker构建开发环境',
    pic: '/build/img/docker2.jpg',
    url: '/build/article/yongdockerkaifahuanjing.html',
    tag: 'docker',
    createDate: new Date()
  }, {
    title: 'Mac下初尝Docker',
    pic: '/build/img/docker1.jpg',
    url: '/build/article/macxiachangshidocker.html',
    tag: 'docker',
    createDate: new Date()
  }]
]
export default {
  getAllArticle(cb) {
    setTimeout(() => cb(articles), 100)
  }

}