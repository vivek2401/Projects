import angular from 'angular';
import uiRouter from 'angular-ui-router';
import typesComponent from './types.component';

let typesModule = angular.module('types', [
  uiRouter
])

.component('types', typesComponent)

.name;

export default typesModule;
