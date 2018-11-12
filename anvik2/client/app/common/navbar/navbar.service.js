const navbarService = function ($mdSidenav) {
  'ngInject';

  const id = 'sidenav';

  const toggle = () => {
    return $mdSidenav(id).toggle();
  };

  return {
    toggle
  };
};

export default navbarService;
