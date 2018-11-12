class AboutController {
      /* @ngInject */
  constructor($scope,$mdDialog) {
    this.name = 'about';
    this.toggle = (ev,src) => {
        $mdDialog.show({
          contentElement: '#myDialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        });

    }
  }
}

export default AboutController;
