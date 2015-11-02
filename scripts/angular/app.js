/**
 * Created by Administrator on 2015/10/30 0030.
 */
'use strict';
//定义项目入口
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {templateUrl: './views/tpl/login.html', controller: 'LoginCtrl'})
        .when('/register', {templateUrl: './views/tpl/register.html', controller: 'RegCtrl'})
        .when('/intro', {templateUrl: './views/intro.html', controller: ''})
        .when('/directive', {templateUrl: './views/directive.html', controller: ''})
        .when('/expression', {templateUrl: './views/expression.html', controller: ''})
        .when('/application', {templateUrl: './views/application.html', controller: 'appCtrl'})
        .when('/string', {templateUrl: './views/string.html', controller: ''})
        .when('/num', {templateUrl: './views/num.html', controller: ''})
        .when('/object', {templateUrl: './views/object.html', controller: ''})
        .when('/array', {templateUrl: './views/array.html', controller: ''})
        .when('/bind', {templateUrl: './views/bind.html', controller: ''})
        .when('/repeat', {templateUrl: './views/repeat.html', controller: ''})
        .otherwise({redirectTo: '/login'});
}]);