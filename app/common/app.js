define([
    'jquery',
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'ui-bootstrap',
    'zgz.grape'

], function ($, angular , couchPotato) {

    'use strict';

    /**
     * 创建主模块，注入配置模块
     */
    var app = angular.module('zgz.grape', [
        'scs.couch-potato',
        'ui.router',
        'ui.bootstrap',
        'grape'
    ]);

    couchPotato.configureApp(app);

    return app;

});