(function(){
    app.controller('pizzaController', [
        function () {
            vm = this
            vm.title = 'Pizza Builder'
            vm.availableToppings = ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers']
            vm.selectedToppins = [],
            vm.filteredToppings = [],
            vm.showSuccessMessage = false


            vm.addTopping = function(top){
                vm.selectedToppins.push(top)
                vm.search = null
                vm.showSuccessMessage = true
            }

            vm.addFilterTopping = function(top){
                vm.filteredToppings.push(top)
            }
        }
    ]);
})()