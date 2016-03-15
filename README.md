##基于VueJs的博客前端源码
###项目目的

> - 用Vue做一个自己需要的博客。
> - 教一下大家真实的现代前端项目是如何工程化，如何架构，如何构建出来的。
> - 整个项目你会用到node的后台服务express, nosql的数据库mongodb，前端的开发框架vuejs,reactjs，状态管理vuex,redux，webpack的构建环境，mocha,karma的单元测试，Electron的桌面app开发，各种云服务的使用，感受一下基于nginx的微架构等技术。**O, it's great, you are a fullstack developer.**

###项目说明
该项目是个人博客[iAmHades](http://www.iamhades.com)的前端源码，它属于博客系统的一部分，博客系统一共分4个部分:

> - [基于VueJs构建的Blog前端页面部分](https://github.com/iAmHades/blog-webui-vue) 
> - [提供base rest api的后台部分](https://github.com/iAmHades/blog)
> - [使用antDesign＋Electron的博客内容管理系统](https://github.com/iAmHades/blog-admin-client)
> - [收藏阅读笔记的safari插件](https://github.com/iAmHades/blog-safari-plugin)

该博客架构上采用前后端分离的开发开发模式，前端部分的页面服务全部构建在CDN上([使用CDN构建服务](https://github.com/iAmHades/articles/issues/1))，同时它借助一个[safari插件](https://github.com/iAmHades/blog-safari-plugin)，能够轻松收藏记录你阅读的文章到后台服务中，然后由前端的阅读轨迹模块呈现你读过的文章。自己[发表的文章](https://github.com/iAmHades/articles)，目前借助GitHub项目管理里面的issue进行发表，后台的[内容管理系统](https://github.com/iAmHades/blog-admin-client)只管理issue的标题头，地址，从而实现博客文章的简单发布。
###关于项目的配置文件
回到博客的前端部分，作为前端项目在构建开发，部署上线的时候需要考虑到如下几点：

> - 代码的热更新，预览同步：webpack的招牌技能。
> - 网络的优化: 合并js和css以减少请求数量，同时压缩它们，并且服务端开启gzip以减少网络传输。
> - 缓存的利用: 使用CDN，并添加Expires,Cache-Control之类的头。
> - 代码的校验: 使用ESlint进行代码的校验。
> - 平滑部署: 使用基于文件内容的hash版本冗余机制。
> - 代码的后期维护: 采用组件化的开发方式，并将html,js,css集中于.vue文件中，同时使用Vuex这样的状态管理方案。

基于以上几点的优化，我们使用webpack来构建，并按以上几点要求配置webpack，你会发现webpack可以轻松实现以上几点，非常赞。配置好的配置文件，在工程中，请使用者自行查阅，其中有2个地方需要修改为你自己的，才能正常使用，分别是：
#####在webpack.base.conf.js的配置文件中，

    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: 'your cdn path',
      filename: '[name].js'
    },
  输出项的publicPath的设置，请设置为你自己的CDN路径，比如我的设置为：
  

    publicPath: 'http://iamhades.oss-cn-shanghai.aliyuncs.com/',

#####在webpack.prod.conf.js的配置文件中，

     new AliyunossWebpackPlugin({
        buildPath: __dirname + '/build',
        region: 'your region',
        accessKeyId: 'your accessKeyId',
        accessKeySecret: 'your accessKeySecret',
        bucket: 'your bucket',
        deleteAll: true,
        getObjectHeaders: function(filename) {
           return {
             'Cache-Control': 'max-age=2592000'
           }
        }
    })
请设置你自己的阿里云oss的参数，其实该插件是[aliyunoss-webpack-plugin](https://www.npmjs.com/package/aliyunoss-webpack-plugin)（鄙人根据需要自己写的），用于每次编译完成后文件，自动上传到指定的CDN中。记住我们的整个前端工程实际上是构建在CDN服务中的，所以像index.html这样的入口文件，也会上传。
其实你可以直接使用[vue-cli工具](https://github.com/vuejs/vue-cli)来生成项目，它里面除了部署cdn，其他的都是按照上面几点的优化准则来配置的，非常具有范例性。本工程也是使用的它来生成的，后面根据自己喜好做了部分调整。
###关于项目的网络通信
该项目使用了[vue-resource](https://www.npmjs.com/package/vue-resource), 其封装的非常好，个人蛮喜欢的。在实际使用中，有个地方需要注意，在文件vue_ext.js 中，

    Vue.http.interceptors.push({
        request: function(request) {
            request.url='http://115.29.221.179:8116'+request.url
             // TODO
            return request
        },
        response: function(response) {
            // TODO
            return response
        }
    })
里面 **http://115.29.221.179:8116** 部分，请修改为你自己的地址。因为整个博客是前后端分离开发的，所以对于请求来说，存在跨域请求，其需要完整的请求路径。

###代码检验
引入eslint进行代码代码检验，并使用eslint-plugin-standard作为一个基础标准使用，然后根据自己喜好调整了部分要求，它们如下：

> - space-before-function-paren  函数定义时括号前面要不要有空格，关闭检查
> - indent 缩进风格，关闭检查
> - eol-last 文件以单一的换行符结束，关闭检查
> - spaced-comment 注释风格要不要有空格，开启检查，设置为符号后面有空格
> - comma-spacing 逗号前后的空格，开启检查，设置为前没有后面存在空格
> - no-trailing-spaces 一行结束后面不要有空格，开启检查，设置为警告提示
> - space-infix-ops  中缀操作符周围要不要有空格, 关闭检查
> - key-spacing 对象字面量中冒号的前后空格, 关闭检查
> - quotes 引号类型，开启检查，设置为单引号
> - padded-blocks  块语句内首行尾是否要空行，关闭检查
> - space-before-blocks 不以新行开始的块{前面要不要有空格, 关闭检查
> - eqeqeq  必须是否全等，开启检查，设置为警告提示
> - no-trailing-spaces 一行结束后面不要有空格，
> - no-multiple-empty-lines 空行最多不能超过2行，开启检查，设置为警告提示 


###用法  
#####开发时的运行命令  
> npm run dev 

开发模式，具备代码的热替换功能。其是用Express来构建的本地开发服务，入口文件为dev-server.js。
#####正式环境的自动构建部署命令：  
> npm run build

这个命令执行后，其会自动完成测试，压缩，优化，部署cdn的工作，非常cool。

