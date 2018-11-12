import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import contact from './contact/contact';
import gallery from './gallery/gallery';

let componentModule = angular.module('app.components', [
  Home,
  About,
  contact,
  gallery
])

.name;

export default componentModule;
