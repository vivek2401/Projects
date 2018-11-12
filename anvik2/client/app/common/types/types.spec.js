import TypesModule from './types';
import TypesController from './types.controller';
import TypesComponent from './types.component';
import TypesTemplate from './types.html';

describe('Types', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TypesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TypesController();
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
      expect(TypesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TypesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TypesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TypesController);
    });
  });
});
