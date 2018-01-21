(function(){
  angular.module('primeiraApp').component('fields', {
    bindings:{
      id: '@',
      label: '@',
      grid: '@',
      placeholder: '@',
      type: '@',
      model: '=', //2 way bind that will make changes mande in controller reflect in component and vice-versa
      readonly: '<'
    },
    controller: [
      'gridSystem',
      function(gridSystem){
        this.$onInit = () => this.gridClass = gridSystem.toCssClass(this.grid)
      }
    ],
    template: `
    <div class="{{$ctrl.gridClass}}">
      <div class="form-group">
        <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
        <input ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control"
        type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly"/>
      </div>
    </div>
    `
  })
})()