app.factory('productFactory', ['$http', function(){
    var factory = {}
    var products = [
        {name:'Keyboard', price: 149.99, quantity: 50},
        {name:'Mouse', price: 59.99, quantity: 50},
        {name:'Basketball', price: 21.99, quantity: 50}
        ]
    factory.findAll = function(callback){
        callback(products);
    }
    factory.add = function(product, callback){
        product.quantity = 50;
        products.push(product);
        callback(products);
    }
    factory.remove = function(idx, callback){
        products.splice(idx,1);
        callback(products);
    }
    factory.buy = function(idx, callback){
        products[idx].quantity -= 1;
        if(products[idx].quantity <= 0){
            products[idx].quantity = 0;
            callback(products);
        }else{
            callback(products);
        }
    }

    return factory;
}])