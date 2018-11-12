class ContactController {
    /* @ngInject */
  constructor($scope,$mdDialog) {
    this.name = 'contact';
    this.toggle = (ev,src) => { 
        $mdDialog.show({
          contentElement: '#myDialogcontact',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        });

    }
  }
}

export default ContactController;
