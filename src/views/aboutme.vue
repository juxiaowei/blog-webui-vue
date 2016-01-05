<template>
<section class="side-image clearfix">
    <header class="header-icons overlay">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="text-white">Hello, I'm Hades
                    <br>A
                    <strong>Full Stack</strong>&nbsp;developer</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <i class="icon icon-desktop text-white"></i>
                    <h2 class="text-white">Web Developer</h2>
                </div>
                <div class="col-sm-3">
                    <i class="icon icon-mobile text-white"></i>
                    <h2 class="text-white">UI / UX Development</h2>
                </div>
                <div class="col-sm-3">
                    <i class="icon icon-genius text-white"></i>
                    <h2 class="text-white">System Developer</h2>
                </div>
                <div class="col-sm-3">
                    <i class="icon text-white icon-phone"></i>
                    <h2 class="text-white">Mobile Developer</h2>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-6 content col-sm-8 clearfix">
                <ul class="blog-snippet-2">
                    <li>
                        <div class="icon">
                            <i class="icon icon-profile-male"></i>
                        </div>
                        <div class="title">
                            <a href="#">我是个Geek 更是个Hacker<br>读过《黑客与画家》<br>并深以为然 :-)<br></a>
                            <span class="sub alt-font"></span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="icon icon-heart"></i>
                        </div>
                        <div class="title">
                            <a href="#">在我眼里,前端或后端,ios或安卓,原生或HTML5...<br>都只是通往同一片大海的溪流江河。而作为船夫的我，最喜欢渡人，渡己<br></a>
                            <span class="sub alt-font"></span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="icon icon-heart"></i>
                        </div>
                        <div class="title">
                            <a href="#">在我眼里,coding是我这辈子最乐意一直做下去的事情,<br>coding是认识世界.也是构建世界<br></a>
                            <span class="sub alt-font"></span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="icon icon-heart"></i>
                        </div>
                        <div class="title">
                            <a href="#">在我眼里，即便有一天衣食无忧，我依然会时不时技痒难忍,敲两行代码自娱自乐<br><br></a>
                            <span class="sub alt-font"></span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="icon icon-happy"></i>
                        </div>
                        <div class="title">
                            <a href="#">我就是我，不一样的烟火<br></a>
                            <span class="sub alt-font">
                                <br>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 col-sm-2 pull-right">
                <ul class="blog-snippet-2">
                    <li>
                        <br>
                        <br>
                        <br>
                        <div class="title text-center" style="font-weight: 600;">如果你看了心情好，可以考虑打赏我哦 :-)
                            <span class="sub alt-font"></span>
                        </div>
                    </li>
                    <li>
                        <div class="col-sm-offset-3 col-md-5 col-sm-3">
                            <img class="background-image" src="/build/img/hadesalipay.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
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
