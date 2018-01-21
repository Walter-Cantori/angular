(function(){
    angular.module('primeiraApp').component('paginator', {
    bindings: {
      url: '@',
    },
    controller: ['$location', '$http', function($location, $http) {
        const url = 'http://localhost:3003/api/BillingCycles'
        
        this.$onInit = () =>  {
        $http.get(`${url}/count`)
            .then( response => {
                this.pages = Math.ceil(response.data.value /10 )

                var pages = parseInt(this.pages) || 1;
                this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1);
                this.current = parseInt($location.search().page) || 1;
                this.needPagination = this.pages > 1;
                this.hasPrev = this.current > 1;
                this.hasNext = this.current < this.pages;
        
                this.isCurrent = function(i) {
                return this.current == i
                }
            })
            .catch(e => console.log(error))
        
        
      } 
 
    }],
    template: `
       <ul ng-if="$ctrl.needPagination"
         class="pagination pagination-sm no-margin pull-right">
         <li ng-if="$ctrl.hasPrev">
           <a ng-href="{{ $ctrl.url }}?page={{ $ctrl.current - 1}}">«</a>
         </li>
         <li ng-class="{active: $ctrl.isCurrent(i)}"
           ng-repeat="i in $ctrl.pagesArray">
           <a ng-href="{{ $ctrl.url }}?page={{i}}">{{i}}</a>
         </li>
         <li ng-if="$ctrl.hasNext">
           <a ng-href="{{ $ctrl.url }}?page={{ $ctrl.current + 1}}">»</a>
         </li>
       </ul>
    `
 });
})()

/*(function(){
    angular.module('primeiraApp').component('paginator', {
        bindings: {
            pages: '@',
            url: '@',
        },
        controller: [
            '$location',
            function($location){
                this.$onInit = () => {
                    const pages = parseInt(this.pages) || 1
                    this.pagesArray = Array(pages).fill(0).map( (e, i) => i + 1)

                    this.current = parseInt($location.search().page) || 1
                    this.needPagination = this.pages > 1
                    this.hasPrevPage = this.current > 1
                    this.hasNextPage = this.current < this.pages
    
                    this.isCurrent = function(i){
                        return this.current == i
                    }
                }

                
            }
        ],
        template: `
            <ul ng-if="$ctrl.needPagination" class="pagination">
                <li ng-if="$ctrl.hasPrevPage">
                    <a href="{{ $ctrl.url }}?page={{ $ctrl.current - 1 }}">Anterior</a>
                </li>
                <li ng-class="{ active: $ctrl.isCurrent(index) }" ng-repeat="index in $ctrl.pagesArray">
                    <a href="{{ $ctrl.url }}?page={{ index }}">{{ index }}</a>
                </li>
                <li ng-if="$Ctrl.hasNextPage">
                    <a href="{{ $ctrl.url }}?page={{ $ctrl.current + 1 }}">Proximo</a>
                </li>
            </ul> 
        `
    })
})()
*/