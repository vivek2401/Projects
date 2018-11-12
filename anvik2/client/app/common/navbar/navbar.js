import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

let navbarModule = angular.module('navbar', [
  uiRouter,
  ngMaterial
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
