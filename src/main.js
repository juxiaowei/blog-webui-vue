import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import filters from './filter'
import err from './views/500.vue'
import notfind from './views/404.vue'
import blog from './views/blog.vue'
import timeline from './views/timeline.vue'
import share from './views/share.vue'
import aboutme from './views/aboutme.vue'
import hack from './views/hack.vue'
import articleinfo from './views/articleinfo.vue'
window.Vue = Vue
Vue.use(Router)
var router = new Router({
    hashbang: false,
    history: true,
    saveScrollPosition: true
});
window.router = router;

Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
    '/404': {
        name: 'notfind',
        component: notfind
    },
    '/500': {
        component: err
    },
    '/': {
        name: 'blog',
        component: blog
    },
    '/timeline': {
        name: 'timeline',
        component: timeline
    },
    '/share': {
        name: 'share',
        component: share
    },
    '/aboutme': {
        name: 'aboutme',
        component: aboutme
    },
    '/hack': {
        name: 'hack',
        component: hack
    },
    '/articleinfo/': {
        name: 'articleinfo',
        component: articleinfo
    }

});

// router.beforeEach(function(transition) {
//     router.app.optionshow = false;
//     window.scrollTo(0, 0)
//     transition.next()
// })

router.start(App, '#app')