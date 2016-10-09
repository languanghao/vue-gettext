(function () {
    function install(Vue) {
        var defaultFunction = function (a) {
            return a;
        };

        Vue.prototype._ = window.gettext || defaultFunction;
    }

    if (typeof exports == "object") {
        module.exports = install
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return install
        })
    } else if (window.Vue) {
        Vue.use(install)
    }
})();