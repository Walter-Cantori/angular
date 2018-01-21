(function(){
    angular.module('app').controller('ContactController', [function(){

        var vm = this;

        vm.message = 'Contact Us'

        vm.send = function(){
            alert('Message Sent')
        }

    }])
})()