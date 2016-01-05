<template>
<section class="blog-masonry bg-muted first-child">
    <div class="container">
        <div class="row">
            <div class="blog-masonry-container">
                <div v-for="good in goods" class="col-md-4 col-sm-6 blog-masonry-item">
                    <div class="item-inner">
                        <div class="post-title">
                            <h2>
                            <a href="/getArtical">{{good.title}}</a>
                            </h2>
                            <p>
                                {{good.desc}}
                            </p>
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
                    goods: []
                }
            },
            route: {
                data(transition) {
                    let goods = [{
                            title: 'xxxx',
                            url: 'http://www.ihades.me',
                            desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
                            createDate: ''
                        }, {
                            title: 'xxxx',
                            url: 'http://www.ihades.me',
                            desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
                            createDate: ''
                        }, {
                            title: 'xxxx',
                            url: 'http://www.ihades.me',
                            desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
                            createDate: ''
                        }, {
                            title: 'xxxx',
                            url: 'http://www.ihades.me',
                            desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
                            createDate: ''
                        }, {
                            title: 'xxxx',
                            url: 'http://www.ihades.me',
                            desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
                            createDate: ''
                        }
                    ]
                    return {
                        goods: goods
                    }
                }
            },
            compiled() {}
    }
</script>
<style type="text/css">
    .bg-muted{
        margin-top: 30px;

    }
</style>