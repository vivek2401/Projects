import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidenavComponent from './sidenav.component';
import sidenavService from './sidenav.service';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

let sidenavModule = angular.module('sidenav', [
  uiRouter,
  ngMaterial
])

.component('sidenav', sidenavComponent)
.factory('sidenav', sidenavService)
.name;

export default sidenavModule;
