import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import animation from 'angular-animate';

let heroModule = angular.module('hero', [
  uiRouter,animation
])

.component('hero', heroComponent)

.name;

export default heroModule;
