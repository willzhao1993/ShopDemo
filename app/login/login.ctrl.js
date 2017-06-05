/**
 * Created by zhao on 17/5/25.
 */
define([
    'app'
], function (app) {

    'use strict';

    app.registerController('loginCtrl', ['$scope', '$$grape',
        function ($scope, $$grape) {

            /**
             * 登录
             */
            $scope.loginOut = function () {

                //请求登录接口
                $$grape.login($scope.login,{
                    onSuccess: function (data) {
                        console.log(data);
                        if(data.logOut.returnCode == '0'){
                            alert(data.logOut.returnMessage);
                        }else{
                            alert(data.logOut.returnMessage);
                        }
                    },
                    onError: function (code) {
                        console.log(code);
                    }
                })

            };

            /**
             * 初始化
             */
            var init = function () {
                //初始化值
                $scope.login = {
                    username: '',
                    password: ''
                }
            };

            init();
        }
    ])
});