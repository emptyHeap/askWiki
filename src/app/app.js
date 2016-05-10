import angular from 'angular'
import angularRoute from 'angular-route'
import angularSanitize from 'angular-sanitize'

import askWikiFilters from './modules/askWiki/filters.js'
import './modules/askWiki/services.js'

import askWikiController from './modules/askWiki/controllers/ask.js'
import askWikiTemplate from './modules/askWiki/templates/ask.html'
import detailWikiController from './modules/askWiki/controllers/detail.js'
import detailWikiTemplate from './modules/askWiki/templates/detail.html'

let studyApp = angular.module('app',[
  'ngRoute',
  'ngSanitize',
  'askWikiFilters',
  'wikiServices'
]).
  controller('askWikiController', askWikiController).
  controller('detailWikiController', detailWikiController)

studyApp.config(['$routeProvider',
  function($routerProvider) {
    $routerProvider.
      when('/time', {
        template: timeTemplate,
        controller: timeController
      }).
      when('/askWiki', {
        template: askWikiTemplate,
        controller: askWikiController
      }).
      when('/askWiki/:subject', {
        template: detailWikiTemplate,
        controller: detailWikiController
      }).
      otherwise({
        redirectTo: '/'
      })
  }
])

