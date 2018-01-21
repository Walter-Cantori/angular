(function() {

    class Home{
        constructor(){
            this.new = 'new'
            this.value = 'value'
        }
        

        $onInit(){
            console.log('test home')
            this.fillValues()
        }

        $onChanges(changesObj){

        }

        $onDestroy(){
            
        }

        fillValues(){
            this.name = "home"
            this.init = "init"
        }
        
    }

    Home.$$ngIsClass = true;
    angular.module('trainning').component('homeComponent', {
        bindings: {},
        templateUrl: "components/home/home.html",
        controller: Home,
    })

    
    

})()