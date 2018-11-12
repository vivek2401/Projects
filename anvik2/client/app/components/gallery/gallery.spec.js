import GalleryModule from './gallery';
import GalleryController from './gallery.controller';
import GalleryComponent from './gallery.component';
import GalleryTemplate from './gallery.html';

describe('Gallery', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GalleryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GalleryController();
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
      expect(GalleryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = GalleryComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GalleryTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GalleryController);
    });
  });
});
