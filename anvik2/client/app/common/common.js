import angular from 'angular';
import Navbar from './navbar/navbar';
import Navbarnew from './navbarnew/navbarnew';
import Hero from './hero/hero';
import User from './user/user';
import sidenav from './sidenav/sidenav';
import types from './types/types';
import slider from './slider/slider';
import menu from './menu/menu';
import heroepd from './heroepd/heroepd';


let commonModule = angular.module('app.common', [
  Navbar,
  Navbarnew,
  Hero,
  User,
  sidenav,
  types,
  slider,
  menu,
  heroepd
])

.name;

export default commonModule;
