app.factory('teamFactory', ['$http', function(){
    var factory = {}
    var teams = [
        {name: 'Seahawks'},
        {name: 'Bills'},
        {name: 'Ravens'}
    ]
    factory.index = function(cb){
        cb(teams);
    }
    factory.create = function(team,cb){
        teams.push(team);
        cb(teams);
    }
    factory.delete = function(idx, cb){
        teams.splice(idx,1);
        cb(teams)
    }

    return factory;
}])