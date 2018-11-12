import NavbarnewModule from './navbarnew';
import NavbarnewController from './navbarnew.controller';
import NavbarnewComponent from './navbarnew.component';
import NavbarnewTemplate from './navbarnew.html';

describe('Navbarnew', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavbarnewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavbarnewController();
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
      expect(NavbarnewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NavbarnewComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NavbarnewTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NavbarnewController);
    });
  });
});
