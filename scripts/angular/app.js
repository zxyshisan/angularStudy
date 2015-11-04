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
        .when('/controller', {templateUrl: './views/controller.html', controller: 'personCtrl'})
        .when('/filters1', {templateUrl: './views/filters1.html', controller: 'personCtrl'})
        .when('/filters2', {templateUrl: './views/filters2.html', controller: 'appCtrl'})
        .when('/filters3', {templateUrl: './views/filters3.html', controller: ''})
        .when('/filters4', {templateUrl: './views/filters4.html', controller: ''})
        .when('/http', {templateUrl: './views/http.html', controller: 'httpCtrl'})
        .when('/table', {templateUrl: './views/table.html', controller: 'httpCtrl'})
        .when('/click', {templateUrl: './views/click.html', controller: ''})
        .when('/hide', {templateUrl: './views/hide.html', controller: 'hideCtrl'})
        .when('/events', {templateUrl: './views/events.html', controller: ''})
        .otherwise({redirectTo: '/login'});
}]);