(function(){
    angular.module('app').factory('UserService', ['$http', '$q', userService]);
    
    function userService($http, $q){
    
        var service = {
            getUsers
        };
    
        function getUsers(){
            var deferred = $q.defer();
    
            $http.get('http://jsonplaceholder.typicode.com/users')
            .then(function(result){
                console.log(result)
                deferred.resolve(result.data);
            });
    
            return deferred.promise;

            
        }

        return service;
        
    }
})()
