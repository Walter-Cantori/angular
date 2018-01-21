(function(){
    angular.module('app').directive('userDisplayDirective', [userDisplayDirective]);
    
    function userDisplayDirective(){
        return {
            templateUrl: 'app/user.display.template.html',
            restrict: 'E',
            scope: {
                users: '='
            }
        }
    
    }
})()
