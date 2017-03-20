app.controller('TeamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
    function setTeams(data){
        $scope.teams = data;
        $scope.team = {};
    }
    $scope.index = function(){
        teamFactory.index(setTeams);
    }
    $scope.index();
    $scope.create = function(){
        teamFactory.create($scope.team, setTeams);
    }
    $scope.delete = function(idx){
        teamFactory.delete(idx, setTeams);
    }
}])