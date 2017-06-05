/**
 * Created by zhao on 17/5/25.
 */
define([
    'app',
    'routeDefs'
], function (app) {

    'use strict';

    /**
     * @desc 主模块的运行块
     */
    app.run(['$couchPotato', '$state', '$stateParams', '$rootScope',
        function ($couchPotato, $state, $stateParams, $rootScope) {

            app.lazy = $couchPotato;//懒装载
            $rootScope.$state = $state;//根scope获取路由信息
            $rootScope.$stateParams = $stateParams;//根scope获取路由参数信息
        }
    ]);

    /**
     * @desc 主模块的初始配置
     */
    app.config(['$httpProvider', function ($httpProvider) {

        //解决跨域问题
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }]);

});