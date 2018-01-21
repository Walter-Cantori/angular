(function(){
    angular.module('app').controller('UserDisplayController', ['UserService', userDisplayController]);
    
    function userDisplayController(userService){
        var vm = this;
        vm.users = [];
        vm.executeSearch = executeSearch;
    
        function executeSearch(){
            userService.getUsers()
                .then(result => {
                    console.log(result)
                    vm.users = result
                })
                .catch(e => console.error(e))
        }
    
    }
})()
