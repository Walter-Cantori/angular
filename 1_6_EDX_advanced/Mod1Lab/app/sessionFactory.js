(function(){
    angular.module('app').factory('sessionFactory', ['$window', 'formattingFactory', sessionFactory]);
    
    function sessionFactory($window, formattingFactory) {
        
        function save(key, value) {
            var newValue = formattingFactory.format(value)
            $window.sessionStorage.setItem(key, newValue);
        }
    
        function get(key) {
            return $window.sessionStorage.getItem(key);
        }
    
        function clear() {
            $window.sessionStorage.clear();
        }
        
        return {
            save: save,
            get: get,
            clear: clear
        }
    }

})()
