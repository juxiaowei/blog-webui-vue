<template>
<section class="article-single">
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-md-3"></div>
            <div class="col-sm-8">
                <div class="article-body">
                    <p class="lead">node开发规范&nbsp;</p>
                    <figure>
                        <figcaption>发布：2015年5月1日</figcaption>
                    </figure>
                    <p>
                        <h4>关于Node规范约束</h4>
                        <p>由于javascript弱语言的特性，所以导致其每个人的写法过于飘逸，灵活，使得团队合作的时候，不是那么好读别人的代码，沟通变得困难，鉴于此。我做出一个相对合理的规范，希望大家按照此规范来进行开发：</p>
                        <ul>
                            <li>结尾必须分号。</li>
                            <li>使用单引号。</li>
                            <li>每个var只声明一个变量。</li>
                            <li>使用首字母小写给变量属性和函数命名。</li>
                            <li>类名首字母大写。</li>
                            <li>常量大写。</li>
                            <li>变量或者函数名称必须采用驼峰式命名规则。</li>
                            <li>在if中使用描述性的条件。如：if (isValidPassword) {}</li>
                            <li>类的封装采用json对象的形式。</li>
                            <li>每个方法函数必须对应函数式文档来说明其参数和作用。</li>
                            <li>每一个文件只能采用module.exports的方式，暴露接口。除非特殊情况才使用exports 来暴露。</li>
                            <li>所有的回调必须采用promise..then的方式来编写。不能直接写callback函数。</li>
                            <li>routes层需要将参数提出来，并封装成一个json对象，传入service层，处理完毕后再进行response的响应。</li>
                            <li>service层只处理数据，并必须采用promis的方式来进行封装。</li>
                            <li>每个项目中会有一个README.MD文件，所有的数据库设计类必须在这个文件中进行详细说明，并注意类的缩进。</li>
                            <li>项目中直接使用log来替代console的输出。</li>
                            <li>每个service必须对应一个test unit。</li>
                            <li>生产线中node必须采用pm2来部署和跟踪状态，其他时候采用轻量级的forever。</li>
                        </ul>
                        <p>大致想到的就这么多，该文档会不断补充和完善。</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <myinfo></myinfo>
</section>
</template>

<script>
    import myinfo from '../components/myinfo.vue'
    export default {
      components: {
        myinfo
      },
      data() {
        return {
          author: ''
        }
      },
      route: {
        data(transition) {
          return {
            author: 'hades!'
          }
        }
      },
      compiled() {}
    }
</script>
<style type="text/css">
.myInfo {
    position: fixed;
    top: 170px;
    left: 90px;
}
</style>
