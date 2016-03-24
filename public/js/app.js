angular.module('learnNg', ['ngRoute']);


angular.module('learnNg')
      .directive('navbar', function(){
        return {
          templateUrl: 'html/templates/nav.html',
        };
      });

angular.module('learnNg')
      .config(function($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl: 'html/views/home.html'
        })
        when('/about',{
          templateUrl: 'html/views/home.html'
        })
        when('/contact',{
          templateUrl: 'html/views/home.html'
        })
        when('/post',{
          templateUrl: 'html/views/home.html'
        })
        .otherwise({
          redirectTo: '/'
        })
      });
