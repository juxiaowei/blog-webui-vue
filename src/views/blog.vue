<template>
<section class="blog-masonry">
    <div class="container">
        <div class="row">
            <div class="text-center col-sm-11">
                <ul class="blog-filters">
                    <li data-filter="*" class="active">
                        <span>All</span>
                    </li>
                    <li>
                        <span>node
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>云服务
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>web
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>docker
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>项目
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>架构
                            <br>
                        </span>
                    </li>
                    <li>
                        <span>其他
                            <br>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="blog-masonry-container flow-grid">
                <div v-for="article in articles" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 blog-masonry-item fadeInUp animated">
                        <a href="{{article.url}}"><div class="shadow"></div></a>
                        <a><img class="item-img" :src="article.pic"></a>
                        <div class="post-title">
                            <a href="{{article.url}}">{{article.title}}</a>
                            <div class="post-meta">
                                <span class="sub alt-font">{{article.createDate}}</span>
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

        }
    }
</script>

<style type="text/css">

.flow-grid .item-img{
    width: 100%;
    height: 180px;
}

.flow-grid .col-xs-12{
    height: 350px;
}

.flow-grid .col-sm-6{
   height: 350px;
}

.flow-grid .col-md-4{
    height: 300px;
}

.flow-grid .col-lg-3 {
    height:300px;
}

.shadow{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
    color: #fff;
    letter-spacing: 0.25em;
    line-height: 1.2;
    font-weight: 700;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out, -moz-transform 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out, -o-transform 0.3s ease-out;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.shadow:hover{
    opacity: 1;
}

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

@media (max-width: 550px) {
  .blog-filters{
    display: none;
  }

  .flow-grid .col-lg-3 {
    height: 350px;
  }

  .flow-grid .item-img{
    width: 100%;
    height: 250px;
}
}

</style>
