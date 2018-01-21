angular.module('trainning').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function(
    $stateProvider, $urlRouterProvider, $locationProvider
){

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            component: 'homeComponent'
        })

        .state('charts', {
            url: '/charts',
            component: 'chartsComponent'      
        });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');

}]) 
    
        
