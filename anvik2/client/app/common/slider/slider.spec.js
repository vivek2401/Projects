import SliderModule from './slider';
import SliderController from './slider.controller';
import SliderComponent from './slider.component';
import SliderTemplate from './slider.html';

describe('Slider', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SliderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SliderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SliderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SliderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SliderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SliderController);
    });
  });
});
