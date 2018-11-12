import angular from 'angular';
import uiRouter from 'angular-ui-router';
import galleryComponent from './gallery.component';

let galleryModule = angular.module('gallery', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('gallery', {
      url: '/gallery',
      component: 'gallery'
    })
    .state('gallery/', {
      url: '/gallery/',
      component: 'gallery'
    })
    .state('types', {
      url: '/gallery/:url',
      component: 'types'
    });
})

.component('gallery', galleryComponent)

.name;

export default galleryModule;
