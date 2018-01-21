(function(){
  angular.module('primeiraApp').controller('billingCycleCtrl', [
    '$http',
    'msgs',
    'tabs',
    '$location',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs, tabs, $location){
    const vm = this
    const url = 'http://localhost:3003/api/BillingCycles'

   
    vm.refresh = function(){
      const page = parseInt($location.search().page) || 1
      $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`) //changed limit to 1 for testing
        .then( response => {
          vm.billingCycle = {credits: [{}], debits: [{}]}
          vm.billingCycles = response.data 
          
          vm.calculateValues()
          tabs.show(vm, { tabList: true, tabCreate: true})
              
            
        })
        .catch( response =>  msgs.addError(response.data.errors) )

    }

    vm.create = function(){
      $http.post(url, vm.billingCycle)
        .then( response => {
          vm.refresh()
          msgs.addSucess('Operacao realizada com sucesso')
        })
        .catch( response => {
          msgs.addError(response.data.errors) })
    }

    vm.showTabUpdate = function(billingCycle){
      vm.billingCycle = billingCycle
      vm.calculateValues()
      tabs.show(vm, { tabUpdate: true })
    }

    vm.showTabDelete = function(billingCycle){
      vm.billingCycle = billingCycle
      vm.calculateValues()
      tabs.show(vm, { tabDelete: true })
    }

    vm.update = function(){
      const updateUrl = `${url}/${vm.billingCycle._id}`
      $http.put(updateUrl, vm.billingCycle)
        .then( response => {
          vm.refresh()
          msgs.addSucess('Operacao realizada com sucesso')
        })
        .catch( e => msgs.addError(e.data.errors))
    }

    vm.delete = function(){
      const deleteUrl = `${url}/${vm.billingCycle._id}`
      $http.delete(deleteUrl, vm.billingCycle)
        .then( response => {
          vm.refresh()
          msgs.addSucess('Operacao realizada com sucesso')
        })
        .catch( e => msgs.addError(e.data.errors))
    }

    vm.addCredit = function(index){
      vm.billingCycle.credits.splice(index + 1, 0, {})
    }

    vm.cloneCredit = function(index, {name, value}){
      vm.billingCycle.credits.splice(index + 1, 0, {name, value})
      vm.calculateValues()
    }

    vm.deleteCredit = function(index){
      if(vm.billingCycle.credits.length > 1){
        vm.billingCycle.credits.splice(index, 1)
        vm.calculateValues()
      }
    }

    vm.addDebit = function(index){
      vm.billingCycle.debits.splice(index + 1, 0, {})
    }

    vm.cloneDebit = function(index, {name, value, status}){
      vm.billingCycle.debits.splice(index + 1, 0, {name, value, status})
      vm.calculateValues()
    }

    vm.deleteDebit = function(index){
      if(vm.billingCycle.debits.length > 1){
        vm.billingCycle.debits.splice(index, 1)
        vm.calculateValues()
      }
    }

    vm.calculateValues = function(){
      vm.credit = 0
      vm.debit = 0

      if(vm.billingCycle){
        vm.billingCycle.credits.forEach(({value}) => {
          vm.credit += !value || isNaN(value) ? 0 : parseFloat(value)
        });

        vm.billingCycle.debits.forEach(({value}) => {
          vm.debit += !value || isNaN(value) ? 0 : parseFloat(value)
        });
      }

      vm.total = vm.credit - vm.debit

    }

    vm.refresh()
  }

})()