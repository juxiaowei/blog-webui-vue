<template>
<section class="blog-masonry bg-muted first-child">
    <div class="container">
        <div class="row">
            <div class="blog-masonry-container">
                <div v-for="good in shares" class="col-md-4 col-sm-6 blog-masonry-item">
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
    import store from '../store'
    const { getAllShare } = store.actions

    export default {
        computed: {
            shares() {
                return store.state.shares
            }
        },
        created () {
           getAllShare()
        }
    }
</script>
<style type="text/css">
    .bg-muted{
        margin-top: 30px;

    }
</style>