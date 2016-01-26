<template>
<section class="blog-masonry">
    <div class="container">
        <div class="row">
            <div class="text-center col-sm-11">
                <ul class="blog-filters">
                    <li data-filter="*" class="active">
                        <span>All</span>
                    </li>
                    <li data-filter=".node">
                        <span>node
                            <br>
                        </span>
                    </li>
                    <li data-filter=".java">
                        <span>java
                            <br>
                        </span>
                    </li>
                    <li data-filter=".web">
                        <span>web
                            <br>
                        </span>
                    </li>
                    <li data-filter=".docker">
                        <span>docker
                            <br>
                        </span>
                    </li>
                    <li data-filter=".ios">
                        <span>IOS
                            <br>
                        </span>
                    </li>
                    <li data-filter=".database">
                        <span>database
                            <br>
                        </span>
                    </li>
                    <li data-filter=".other">
                        <span>其他
                            <br>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="blog-masonry-container">
                <div v-for="article in articles" class="col-md-4 col-sm-6 blog-masonry-item {{article.tag}}">
                    <div class="item-inner">
                        <a href="{{article.url}}"><img alt="Blog Preview" src="/build/img/blog-masonry-2.jpg"></a>
                        <div class="post-title">
                            <h2>
                            <a href="{{article.url}}">{{article.title}}</a>
                            </h2>
                            <div class="post-meta">
                                <span class="sub alt-font">{{article.createDate|parsePubDate}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
            data() {
                return {
                    articles: []
                }
            },
            route: {
                data(transition) {
                    this.$http.get('/api/article/paging?start=0').then(function(data) {
                        transition.next({
                            articles: [{
                                title: '团队内部在践行的技术栈',
                                pic: '/build/img/blog-masonry-2.jpg',
                                url: '/build/article/yitaojishuzhan.html',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '何为Flux ？',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '关于Docker二',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '关于Docker一',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }]
                        })
                    })
                }
            },
            compiled() {}
    }
</script>
