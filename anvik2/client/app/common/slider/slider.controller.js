
class SliderController {
      /* @ngInject */
  constructor($interval,$scope,$mdDialog) {

    this.name = 'slider';
    this.cancel = () => {
      $scope.$ctrl.style = null;
      $mdDialog.cancel();
    }
    this.currentIndex = 0;

    this.style = {'background-image':`url(${$scope.$ctrl.imgsrc})`};


    this.rightimg = function() {
      $scope.$ctrl.currentIndex = ($scope.$ctrl.currentIndex < $scope.$ctrl.imgs.length - 1) ? ++$scope.$ctrl.currentIndex : 0;
      $scope.$ctrl.style = {'background-image':`url(${$scope.$ctrl.imgs[$scope.$ctrl.currentIndex]})`};
    }
    this.leftimg = function() {
      if($scope.$ctrl.currentIndex < $scope.$ctrl.imgs.length) {
           if($scope.$ctrl.currentIndex-1 < 0){
             $scope.$ctrl.currentIndex = $scope.$ctrl.imgs.length - 1;
           } else {
           $scope.$ctrl.currentIndex = --$scope.$ctrl.currentIndex;
         }
         } else {
           $scope.$ctrl.currentIndex  = 0;
         }
      $scope.$ctrl.style = {'background-image':`url(${$scope.$ctrl.imgs[$scope.$ctrl.currentIndex]})`};
    }

  }
  $onInit () {
    this.currentIndex = 0;
  }

}

export default SliderController;
