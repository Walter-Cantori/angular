(function(){
    angular.module('app').factory('formattingFactory', [formattingFactory])
        
        function formattingFactory(){
            
            function format(value){
                return value.length % 2 == 0 ? value.toUpperCase() : value.toLowerCase()
            }
        
            return { format: format}
        }

})()