(function() {

    function Header(){
        var vm = this

        vm.test = 'Header1'
        
    }
   
    angular.module('trainning').component('headerComponent',{
        bindings: {
            
        },
        templateUrl: 'components/common/header/header.html',
        controller: Header,
    })

    

})()