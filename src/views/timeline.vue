<template>
<section class="timeline-1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                <p class="lead">
                    每天看的，并觉得值得分享的，保留的文章。
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">

                <div v-for="time in datetime" class="timeline-event">
                    <div v-if="$index%2===0" class="col-sm-6 col-md-push-6">
                        <h2>{{time}}</h2>
                        <p>晴转雨</p>
                    </div>
                    <div v-else class="col-sm-6">
                        <h2>{{time}}</h2>
                        <p>晴转雨</p>
                    </div>
                    <div class="middle">
                        <i class="icon icon-telescope"></i>
                        <div class="vertical-line"></div>
                    </div>
                    <div v-if="$index%2===0" class="col-sm-6 col-md-pull-6">
                        <p>
                            <ul>
                                <li v-for="read in readinfo[time]"><a href="{{read.url}}">{{read.title}}</a></li>
                            </ul>
                        </p>
                    </div>
                    <div v-else class="col-sm-6">
                        <p>
                            <ul>
                                <li v-for="read in readinfo[time]"><a href="{{read.url}}">{{read.title}}</a></li>
                            </ul>
                        </p>
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
                    readinfo: {},
                    datetime: []
                }
            },
            route: {
                data(transition) {
                    this.$http.get('/api/readinfo/paging?start=0').then(function(data) {
                        transition.next({
                            readinfo: data.data.data.values,
                            datetime: data.data.data.dates
                        });
                    });
                }

            },
            compiled() {}
    }
</script>
