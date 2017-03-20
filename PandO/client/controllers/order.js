app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
    function setProducts(data){
        $scope.products = data;
        $scope.product = {};
    }
    $scope.product = {}
    $scope.products = {}

    $scope.index = function(){
        productFactory.findAll(setProducts);
    }
    $scope.index()
    $scope.buy = function(id){
        productFactory.buy(id, setProducts);
    }

}])
