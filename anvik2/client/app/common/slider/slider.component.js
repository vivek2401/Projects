import template from './slider.html';
import controller from './slider.controller';
import './slider.scss';

let sliderComponent = {
  bindings: {
   imgs : "<"
  },
  template,
  controller
};

export default sliderComponent;
