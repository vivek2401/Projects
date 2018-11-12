import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroepdComponent from './heroepd.component';

let heroepdModule = angular.module('heroepd', [
  uiRouter
])

.component('heroepd', heroepdComponent)

.name;

export default heroepdModule;
