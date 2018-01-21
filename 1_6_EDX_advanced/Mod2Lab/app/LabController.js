angular.module('app')
.controller('LabController', [ 
    function () { 
        var vm = this; 
        vm.title = 'title from controler'

        vm.person = {
            name: 'Samuel Clemens',
            penName: 'Mark Twain'
        };

        vm.show = function() {
            alert(JSON.stringify(vm.person));
        }
    } 
]);
