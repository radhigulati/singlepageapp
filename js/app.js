var app = angular.module('FullflashApp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/',
    {
        templateUrl: 'views/home.html',
        controller:'HomeController',
        controllerAs: 'home' 
    });

    $routeProvider.when('/about',
    {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
    });
    
}]);

app.controller('HomeController', function($location){
    var ctr = this;
    ctr.text = "Home Text";  

    ctr.gotoPage = function(page){
    $location.path(page);
}  
});


app.controller('AboutController', function($location){
    var ctr = this;
    ctr.text = "About Text"; 

    ctr.gotoPage = function(page){
    $location.path(page);
}
});