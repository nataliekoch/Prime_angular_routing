var app = angular.module('electionApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/bernie', {
      templateUrl:'views/bernie.html',
      controller:'bernieController'
    })
    .when('/clinton', {
      templateUrl:'views/clinton.html',
      controller:'clintonController'
    })
    .when('/trump', {
      templateUrl:'views/trump.html',
      controller:'trumpController'
    })
    .when('/ted', {
      templateUrl:'views/ted.html',
      controller:'tedController'
    })

    $locationProvider.html5Mode(true);

}]);

app.controller('bernieController', ['$scope', function($scope){

}]);

app.controller('clintonController', ['$scope', function($scope){

}]);

app.controller('trumpController', ['$scope', function($scope){
  
}]);

app.controller('tedController', ['$scope', function($scope){

}]);
