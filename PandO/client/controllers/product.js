app.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory){

    function setProducts(data){
        $scope.products = data;
        $scope.product = {};
    }

    $scope.index = function(){
        productFactory.findAll(setProducts);
    }
    $scope.index()
    $scope.add = function(){
        productFactory.add($scope.product, setProducts);
    }
    $scope.remove = function(id){
        productFactory.remove(id,setProducts)
    }
}])