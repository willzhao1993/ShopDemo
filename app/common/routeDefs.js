/**
 * Created by zhao on 17/5/25.
 */
define([
    'app',
], function (app) {
    app.registerProvider('routeDefs',[
        '$stateProvider',
        '$urlRouterProvider',
        '$couchPotatoProvider',
        '$locationProvider',
        '$provide',
        function ($stateProvider,
                  $urlRouterProvider,
                  $couchPotatoProvider) {
            this.$get = function () {
                return {};
            };

            $urlRouterProvider
                .when('', '/');

            $urlRouterProvider.otherwise('/login');

            $stateProvider
            //登录
            .state('login', {
                url: '/login',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['login/login.ctrl'])
                },
                views: {
                    'main': {
                        templateUrl: 'login/login.tpl.html',
                        controller: 'loginCtrl'
                    }
                }
            })
        }
    ])
});