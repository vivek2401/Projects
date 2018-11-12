class MenuController {
  /* @ngInject */
  constructor($mdDialog,$state) {
    this.name = 'menu';
    this.cancel = () => {
      $mdDialog.cancel();
    }
    this.menuclick = (menu) => {
      $state.go(menu);
      $mdDialog.cancel();
    }
  }
}

export default MenuController;
