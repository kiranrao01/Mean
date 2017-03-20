app.factory('playerFactory', ['$http', function(){
    var factory = {}
    var players = [
        {name: 'Logan'},
        {name: 'Jimmy'},
        {name: 'Speros'}
    ]
    factory.index = function(cb){
        cb(players);
    }
    factory.create = function(player,cb){
        players.push(player);
        cb(players);
    }
    factory.delete = function(idx, cb){
        players.splice(idx, 1);
        cb(players);
    }
    factory.assign = function(idx, str, cb){
        players[idx].team = str;
        cb(players)
    }
    factory.clear = function(idx, cb){
        players[idx].team = null;
        cb(players)
    }

    return factory;
}])
