/**
 * Created by zhao on 17/5/25.
 */
define([
    'angular',
    'config'
], function (angular,config) {

    'use strict';

    angular.module('grape', [

    ])

        .factory('$$grape', ['$q', '$http', '$timeout', '$rootScope',
            function ($q, $http, $timeout, $rootScope) {


                return {
                    /**
                     * 登录
                     * @param keywords
                     * @param options
                     */
                    login : function (keywords, options) {
                        var _data = keywords;
                        $http({
                            method:'POST',
                            dataType: 'JSON',
                            contentType: 'application/json; charset=UTF-8',
                            url: config.backend.ip + config.backend.login,
                            headers: '',
                            data: _data
                        })
                            .success(function (data) {
                                options.onSuccess(data);
                            })
                            .error(function (code) {
                                options.onError(code);
                            })
                    }
                }

            }
        ])
});