app.controller('menuController', [
  '$scope',
  function($scope){
    $scope.model = {title: "Our Menu"}

    $scope.changeMainDish = function(item, price) {
      $scope.model.mainDish = {item: item, price: price}
    }
  }
])