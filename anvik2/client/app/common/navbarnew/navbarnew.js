import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarnewComponent from './navbarnew.component';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

let navbarnewModule = angular.module('navbarnew', [
  uiRouter,
  ngMaterial
])

.component('navbarnew', navbarnewComponent)

.name;

export default navbarnewModule;
