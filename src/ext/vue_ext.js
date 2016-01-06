exports.install = function(Vue, options) {

    Object.defineProperties(Vue.prototype, {

        $prefixedEvent: {
            get: function() {
               return prefixedEvent.bind(this);
            }
        },

        $h5setValue: {
            get: function() {
                return h5setValue;
            }
        },

        $h5getValue: {
            get: function() {
                return h5getValue;
            }
        },

        $h5remove: {
            get: function() {
                return h5remove;
            }
        },

        $getCookie: {
            get: function() {
                return getCookie;
            }
        },

        $setHeaders: {
            get: function() {
                return setHeaders;
            }
        }

    });
  
    //localstorage的存储
    var h5setValue = function(key, value) {
        window.localStorage.setItem(key, value);
    };
    //localstorage的查询
    var h5getValue = function(key) {
        return window.localStorage.getItem(key);
    };

    var h5remove = function(key) {
        window.localStorage.removeItem(key);
    };

    //获取cookie的值
    var getCookie = function(key) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(key + "=")
            if (c_start != -1) {
                c_start = c_start + key.length + 1
                var c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    //request中设置header
    var setHeaders = function(json) {
        var custom = Vue.http.headers.custom;
        Vue.http.headers.custom = Vue.util.extend(json, custom);
    };

    //监听各浏览器动画状态，以便回调 type为：animationstart animationiteration animationend
    var prefixedEvent = function(element, type, callback) {
        callback.bind(this);
        var pfx = ["webkit", "moz", ""]
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p] + type, callback, false);
        }
    };
    
    Vue.http.options.root = 'http://115.29.221.179:8116';
    //拦截器
    Vue.http.interceptors.push({
        request: function(request) {
            //TODO
            return request;
        },
        response: function(response) {
            //TODO
            return response;
        }
    });

    //适配(不太靠谱，已废弃)
    var sheight = document.documentElement.clientHeight;
    var dheight = 1090;
    var radio = sheight / dheight;
    Vue.directive('adaptation', {
        bind: function() {
            this.el.style.webkitTransform = 'scaleY(' + radio + ')';
            this.el.style.marginTop = -(1 - radio) * dheight / 2 + 'px';
        }
    })

}