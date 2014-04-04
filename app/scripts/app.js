/* global app:true */
'use strict';

var app = angular.module('ngNewsitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);

  app.constant('FIREBASE_URL', 'https://ng-newsit.firebaseio.com/');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
