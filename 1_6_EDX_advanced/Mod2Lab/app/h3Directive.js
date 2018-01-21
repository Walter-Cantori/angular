angular.module('app').directive('h3Directive', function(){
    return {
        scope: {
            title: '@'
        },
        restrict: 'E',
        template: '<h3>{{title}}</h3>',
    }
})