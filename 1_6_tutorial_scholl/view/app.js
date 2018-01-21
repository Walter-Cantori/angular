(function() {
  var app = angular.module('gemStore', ["directive-store"]);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller('StoreController', ["$http", function($http) {
    var store = this;
    store.products = [];

    $http.get("./products.json").then(function(data){
      store.products = data.data;
    })
    .catch(function(e){
      console.error(e);
     });

  }]);

  
  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

})();
