<template>
    <div class="nav-container">
        <nav class="simple-bar open-nav">
            <div class="container">
                <div class="row nav-menu">
                    <div class="col-md-3 col-sm-3 columns">
                        <!-- <img class="logo logo-light" alt="Logo" src="#"> -->
                    </div>
                    <div class="col-md-9 col-sm-9 columns text-right">
                        <ul class="menu">
                            <li>
                                <a v-link="{name:'blog'}" target="default">博文&nbsp;</a>
                            </li>
                            <li>
                                <a v-link="{name:'timeline'}" target="default">阅读轨迹&nbsp;</a>
                            </li>
                            <li>
                                <a v-link="{name:'share'}" target="default">好东西分享&nbsp;</a>
                            </li>
                            <li>
                                <a v-link="{name:'hack'}" target="default">黑技术&nbsp;</a>
                            </li>
                            <li>
                                <a v-link="{name:'aboutme'}" target="default">关于我&nbsp;</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mobile-toggle">
                    <i class="icon icon_menu">菜单</i>
                </div>
            </div>
        </nav>
    </div>
</template>

<style type="text/css">
.nav-container{
    background-color: white;
}
</style>
