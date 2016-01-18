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
                        <a v-link="{name:'articleinfo'}"><img alt="Blog Preview" src="/build/img/blog-masonry-2.jpg"></a>
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
                    this.$http.get('/article/paging?start=0').then(function(data) {
                        return {
                            articles: [{
                                title: '关于Docker初级篇',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '关于Docker初级篇',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '关于Docker初级篇',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }, {
                                title: '关于Docker初级篇',
                                pic: '/build/img/blog-masonry-2.jpg',
                                tag: 'docker',
                                createDate: new Date()
                            }]
                        }
                    })
                }
            },
            compiled() {}
    }
</script>
