import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial
  ])
  .config(($locationProvider,$mdThemingProvider) => {
    "ngInject";

    $mdThemingProvider.definePalette('name1', {
      '50': 'F1ADB0',
      '100': 'EA8489',
      '200': 'E67075',
      '300': 'DF474E',
      '400': 'DC333A',
      '500': 'd91f27',
      '600': 'B21A20',
      '700': '9E171D',
      '800': '8B1419',
      '900': '4F0C0F',
      'A100': 'F1ADB0',
      'A200': 'E67075',
      'A400': 'DF474E',
      'A700': '8B1419',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light

      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

   $mdThemingProvider.definePalette('name2', {
      '50': 'd91f27',
      '100': 'd91f27',
      '200': 'd91f27',
      '300': 'd91f27',
      '400': 'd91f27',
      '500': 'd91f27',
      '600': 'd91f27',
      '700': 'd91f27',
      '800': 'd91f27',
      '900': 'd91f27',
      'A100': 'd91f27',
      'A200': 'd91f27',
      'A400': 'd91f27',
      'A700': 'd91f27',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light

      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

   $mdThemingProvider.definePalette('name3', {
      '50': 'EDE7F6',
      '100': 'D1C4E9',
      '200': 'B39DDB',
      '300': '9575CD',
      '400': '7E57C2',
      '500': '332571',
      '600': '5E35B1',
      '700': '512DA8',
      '800': '4527A0',
      '900': '311B92',
      'A100': 'B388FF',
      'A200': '7C4DFF',
      'A400': '651FFF',
      'A700': '6200EA',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light

      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('purple')
      .warnPalette('purple')

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
