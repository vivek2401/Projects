import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sliderComponent from './slider.component';

let sliderModule = angular.module('slider', [
  uiRouter
])

.component('slider', sliderComponent)

.name;

export default sliderModule;
