(function () {
  'use strict';

  var dependencies = ['ngMaterial',
                      'ui.router'];

  angular.module('weddingPage', dependencies)
    .config(weddingPageConfig);

  function weddingPageConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    var apiKey = 'AIzaSyB_dMEBT5lOT8BQlaPA5HRez0ZMWQln_3s';
    var databaseURL = 'https://weddingsite-a7b7e.firebaseio.com';

    firebase.initializeApp({
      apiKey,
      databaseURL
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      controller: 'indexController',
      controllerAs: 'vm',
      templateUrl: 'views/index.html'
    })
    .state('index.historia', {
      url: 'historia',
      data: {
        'selectedTab': 1
      },
      views: {
        'historia': {
          controller: 'historiaController',
          controllerAs: 'vm',
          templateUrl: 'views/historia.html'
        }
      }
    })
    .state('index.padrinhos', {
      url: 'padrinhos',
      data: {
        'selectedTab': 2
      },
      views: {
        'padrinhos': {
          controller: 'padrinhosController',
          controllerAs: 'vm',
          templateUrl: 'views/padrinhos.html'
        }
      }
    })
    .state('index.rspv', {
      url: 'rspv',
      data: {
        'selectedTab': 4
      },
      views: {
        'rspv': {
          controller: 'RSPVController',
          controllerAs: 'vm',
          templateUrl: 'views/rspv.html'
        }
      }
    });
  }

})();
