(() => {

    class ChartsService{
        constructor($http){
            //super()
            this.$http = $http
        }

        getResult(){
            return this.$http.get('/api/testJson')
                .then(result => {
                    return result.data
                })
                .catch(e => {return e})
        }
    }

    ChartsService.$inject = ['$http']

    angular.module('trainning').service('ChartsService', ChartsService)

})()