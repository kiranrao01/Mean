app.controller('PlayersController', ['$scope', 'playerFactory', function($scope, playerFactory){
    function setPlayers(data){
        $scope.players = data;
        $scope.player = {};
    }
    $scope.index = function(){
        playerFactory.index(setPlayers);
    }
    $scope.index()
    $scope.create = function(){
        playerFactory.create($scope.player, setPlayers);
    }
    $scope.delete = function(idx){
        playerFactory.delete(idx,setPlayers)
    }
}])