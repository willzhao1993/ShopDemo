/**
 * Created by zhao on 17/5/25.
 */
require.config({
    baseUrl : '',
    urlArgs : '',
    paths : {
        'jquery' : 'assets/js/jquery/jquery.min',
        'angular' : 'assets/js/angular/angular.1.2.29.min',
        'angular-ui-router' : 'assets/js/angular-ui-router/angular-ui-router.min',
        'angular-couch-potato' : 'assets/js/angular-couch-potato/angular-couch-potato',
        'ui-bootstrap' : 'assets/js/ui-bootstrap/ui-bootstrap.min',
        'app' : 'common/app',
        'app-init' : 'common/app-init',
        'mainCtrl' : 'common/controller/mainCtrl',
        'routeDefs' : 'common/routeDefs',
        'config' : 'common/config',
        'zgz.grape' : 'common/api/grape'
    },

    shim : {
        'jquery' : {
            exports : 'jquery',
        },
        'angular' : {
            exports : 'angular',
        },
        'angular-ui-router' : {
            deps : ['angular']
        },
        'angular-couch-potato': {
            deps : ['angular']
        },
        'ui-bootstrap' : {
            deps : ['angular']
        },
        'app' : {
            deps : ['angular']
        },
        'app-init' : {
            deps : ['angular']
        },
        'mainCtrl' : {
            deps : ['angular']
        },
        'routeDefs' : {
            deps : ['angular']
        },
        'zgz.grape' : {
            deps : ['angular']
        }
    },

    priority: [
        'jquery',
        'angular',
        'app-init',
        'mainCtrl'
    ],

    waitSeconds: 250
    
});

require([
    'jquery',
    'angular',
    'app-init',
    'mainCtrl'
],function ($, angular) {
    angular.element().ready(function () {
        angular.bootstrap($("#ng-app"), ["zgz.grape"]);
    })
});