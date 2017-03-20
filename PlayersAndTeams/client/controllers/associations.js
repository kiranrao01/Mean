app.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){
    function setPlayers(data){
        $scope.players = data;
        $scope.player = {};
    }
    $scope.getPlayers = function(){
        playerFactory.index(setPlayers);
    }
    function setTeams(data){
        $scope.teams = data;
        $scope.team = {};
    }
    $scope.getTeams = function(){
        teamFactory.index(setTeams);
    }
    $scope.getTeams();
    $scope.getPlayers();

    $scope.assign = function(playerid, teamname){
        playerFactory.assign(playerid, teamname, setPlayers)
    }
    $scope.clear = function(idx){
        playerFactory.clear(idx, setPlayers)
    }
}])