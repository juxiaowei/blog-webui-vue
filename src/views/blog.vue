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
                        <span @click='test()'>其他
                            <br>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="blog-masonry-container flow-grid">
                <div v-for="list in articles" @click="test()" class="flow-grid-col col-xs-12 col-sm-6 col-md-4 col-lg-3 blog-masonry-item fadeInUp animated">
                     <div v-for="article in list" class="item-inner">
                        <a><img class="item-img" :src="article.pic"></a>
                        <div class="post-title">
                            <a href="{{article.url}}">{{article.title}}</a>
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
    import store from '../store'
    const { getAllArticle } = store.actions

    export default {
        computed: {
            articles() {
                return store.state.articles
            }
        },
        created () {
           getAllArticle()
        },
        methods: {
            test() {
                var doms = document.getElementsByClassName('flow-grid-col');
                for (var i = 0; i < doms.length; i++) {
                    doms[0].className = 'flow-grid-col col-xs-12 col-sm-6 col-md-4 col-lg-3 blog-masonry-item section-article section-user'
                }
            }
        }
    }
</script>

<style type="text/css">

.section-article{
    -webkit-transition: 500ms opacity cubic-bezier(.17,.67,.6,1.3);
    transition: 500ms opacity cubic-bezier(.17,.67,.6,1.3);
}

.section-user{
    position: relative;
    display: block;
    padding: 15px;
    -webkit-transition: 1000ms -webkit-transform cubic-bezier(.17,.67,.6,1.3);
    transition: 1000ms transform cubic-bezier(.17,.67,.6,1.3);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.post-title a{
    color: black;
    font-size: 18px;
    font-weight: bold;
}

@media (max-width: 700px) {
  .post-title a{
    font-size: 24px;
  }
}

.item-inner{
    padding-bottom: 20px;
}

.flow-grid{
    overflow:hidden;
    min-height: 600px;
}

.flow-grid .flow-grid-col:nth-child(2){
    -webkit-animation-delay: 100ms;
       -moz-animation-delay: 100ms;
         -o-animation-delay: 100ms;
            animation-delay: 100ms;
}

.flow-grid .flow-grid-col:nth-child(3){
    -webkit-animation-delay: 200ms;
       -moz-animation-delay: 200ms;
         -o-animation-delay: 200ms;
            animation-delay: 200ms;
}

.flow-grid .flow-grid-col:nth-child(4){
    -webkit-animation-delay: 300ms;
       -moz-animation-delay: 300ms;
         -o-animation-delay: 300ms;
            animation-delay: 300ms;
}


.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(100px);
        -ms-transform: translateY(100px);
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }
}

</style>
