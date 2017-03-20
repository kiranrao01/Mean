var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{templateUrl:'partials/login.html'})
	.when('/dash',{templateUrl:'partials/dash.html'})
	.when('/createQuote',{templateUrl:'partials/newQuote.html'})
	.when('/showAllQuotes',{templateUrl:'partials/showAll.html'})
	.when('/showAllUsers',{templateUrl:'partials/showAllUsers.html'})
	.when('/show/:id',{templateUrl:'partials/showUser.html'})
	.otherwise({redirectTo:'/login'})
})