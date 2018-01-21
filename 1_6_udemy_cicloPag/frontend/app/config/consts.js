angular.module('primeiraApp').constant('consts', {
    apiUrl:'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user_',
    appName: 'Primeira App'
}).run(['$rootScope', 'consts', function($rootScope, consts){
    $rootScope.consts = consts
}])