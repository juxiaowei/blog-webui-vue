const articles = [{
  title: 'Eslint规则说明',
  pic: 'http://www.ihades.me/blog-masonry-2.jpg',
  url: 'https://github.com/iAmHades/articles/issues/6',
  tag: '项目',
  createDate: new Date()
}, {
  title: '关于该博客',
  pic: 'http://www.ihades.me/blog-masonry-2.jpg',
  url: 'https://github.com/iAmHades/blog-webui-vue',
  tag: '项目',
  createDate: new Date()
}, {
  title: '高姿态的使用CDN',
  pic: 'http://www.ihades.me/blog-masonry-2.jpg',
  url: 'https://github.com/iAmHades/articles/issues/1',
  tag: '云服务',
  createDate: new Date()
}, {
  title: '团队内部在践行的技术栈',
  pic: 'http://www.ihades.me/blog-masonry-2.jpg',
  url: 'https://github.com/iAmHades/articles/issues/5',
  tag: '架构',
  createDate: new Date()
}, {
  title: 'Flux到底是什么？',
  pic: 'http://www.ihades.me/blog-masonry-2.jpg',
  url: 'https://github.com/iAmHades/articles/issues/2',
  tag: 'web',
  createDate: new Date()
}, {
  title: '用Docker搭建开发环境',
  pic: 'http://www.ihades.me/docker2.jpg',
  url: 'https://github.com/iAmHades/articles/issues/4',
  tag: 'docker',
  createDate: new Date()
}, {
  title: 'Mac下初尝Docker',
  pic: 'http://www.ihades.me/docker1.jpg',
  url: 'https://github.com/iAmHades/articles/issues/3',
  tag: 'docker',
  createDate: new Date()
}]
export default {
  getAllArticle(cb) {
    // 假装网络请求来的数据
    setTimeout(() => cb(articles), 100)
  }

}