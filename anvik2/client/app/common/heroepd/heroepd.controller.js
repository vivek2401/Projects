class HeroepdController {
  /* @ngInject */
  constructor($interval,$scope,$state,$mdDialog) {
    this.name = 'logosrc';
    this.slides = ['slideepd0', "slideepd1", "slideepd2", 'slideepd3', 'slideepd4',
                   'slideepd5', "slideepd6", "slideepd7", 'slideepd8', 'slideepd9',
                   'slideepd10', "slideepd11", "slideepd12", 'slideepd13', 'slideepd14'];

    this.currentIndex = Math.floor(Math.random() * 14);
    this.setCurrentSlideIndex = function (index) {
        this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
        return this.currentIndex === index;
     };
    $interval(function(){
      $scope.$ctrl.currentIndex = ($scope.$ctrl.currentIndex < $scope.$ctrl.slides.length - 1) ? ++$scope.$ctrl.currentIndex : 0;
    },5000);

    this.toggle = () => {
        this.showdialog();
    }

    this.movetogallery = () => {
      $state.go('gallery');
    }

    $scope.$ctrl.showdialog = function(ev,src) {
      $mdDialog.show({
        contentElement: '#myDialog',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };


  }
}

export default HeroepdController;
