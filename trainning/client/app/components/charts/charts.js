(function() {

    class Charts{
        constructor(ChartsService){
            this.ChartsService = ChartsService
        }
        
        $onInit(){
            console.log('test')
            this.ChartsService.getResult()
                .then(result => {
                    this.data = result
                })
        }

        $onChanges(changesObj){
            console.log(changesObj)
        }

        $onDestroy(){
            
        }

        load(){
            this.text = "change"
        }
        
    }

    Charts.$$ngIsClass = true;
    Charts.$inject = ['ChartsService']

    angular.module('trainning').component('chartsComponent', {
        bindings: {},
        templateUrl: "components/charts/charts.html",
        controller: Charts,
    })

})()