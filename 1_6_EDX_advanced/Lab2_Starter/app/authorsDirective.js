angular.module('app').directive('authors', function(){
    return {
        restrict: 'E',
        //replace: true,
        scope: {
            authors: '=authors',
            action: '&'
        },
        templateUrl: 'authors.html'       
    }
})