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
                    <div v-bind:class="{'col-sm-6':true,'col-md-push-6':($index%2)===0}">
                        <h2>{{time}}</h2>
                        <p>晴转雨</p>
                    </div>
                    <div class="middle">
                        <i class="icon icon-telescope"></i>
                        <div class="vertical-line"></div>
                    </div>
                    <div v-bind:class="{'col-sm-6':true, 'col-md-pull-6':($index%2)===0}">
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
                    let dataMap = {
                        '2016-1-4': [{
                            title: '能利用爬虫技术做到哪些很酷很有趣很有用的事情？',
                            url: 'http://www.zhihu.com/question/27621722/answer/47616178',
                            tag: '杂文',
                            createDate: ''
                        }, {
                            title: '一看就懂的ReactJs入门教程-精华版',
                            url: 'http://www.cnblogs.com/yunfeifei/p/4486125.html',
                            tag: 'web',
                            createDate: ''
                        }, {
                            title: 'iOS 开发 UI 搭建心得（一）—— 驾驭 StoryBoard',
                            url: 'http://lvwenhan.com/ios/452.html',
                            tag: 'ios',
                            createDate: ''
                        }, {
                            title: 'iOS 开发 UI 搭建心得（二）—— 善用 xib',
                            url: 'http://lvwenhan.com/ios/453.html',
                            tag: 'ios',
                            createDate: ''
                        }],
                        '2016-1-3': [{
                                title: 'react-native 与 react-web 的融合',
                                url: 'https://github.com/tmallfe/tmallfe.github.io/issues/20',
                                tag: 'web',
                                createDate: ''
                            }, {
                                title: 'Web应用的缓存设计模式',
                                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NzQ3ODAwMQ==&mid=208245199&idx=1&sn=763b9320973b51e7994ee68cffd62468#rd',
                                tag: 'web',
                                createDate: ''
                            }
                        ]
                    }
                    let time=[];
                    Object.keys(dataMap).forEach((key)=>{
                        time.push(key);
                    })
                    return {
                        readinfo:dataMap,
                        datetime:time
                    }
                }
            },
            compiled() {}
    }
</script>
