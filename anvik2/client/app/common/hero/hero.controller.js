// import herosrc from "../../../images/herovideo.mp4";

// import slide1 from "../../../images/slide1.jpg";
// import slide2 from "../../../images/slide2.jpg";
// import slide3 from "../../../images/slide3.jpg";
// import slide4 from "../../../images/slide4.jpg";
// import slide5 from "../../../images/slide5.jpg";
// import slide6 from "../../../images/slide6.jpg";
// import slide7 from "../../../images/slide7.jpg";
// import slide8 from "../../../images/slide8.jpg";


class HeroController {
  /* @ngInject */
  constructor($interval,$scope,$state,$mdDialog) {
    this.name = 'logosrc';
    // this.src = herosrc;
    this.slides = ['slide0 hero', "slide1 hero", "slide2 hero", 'slide3 hero', 'slide4 hero',
                   'slide5 hero', "slide6 hero", "slide7 hero", 'slide8 hero', 'slide9 hero',
                   'slide10 hero', "slide11 hero", "slide12 hero", 'slide13 hero', 'slide14 hero'];
    this.ss = 'slide1';
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

    // var data = document.querySelector(".removecontent").clone;

    this.toggle = () => {
        // angular.element(document).find("dfr").html(`
        //   <md-button ui-sref=""   ng-click="$ctrl.toggleagain()" class="navbutton" layout="row" layout-align='center center'>
        //   <i class="fa fa-times fa-2x" ></i>
        //   </md-button>
        //
        //   `);
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

export default HeroController;
