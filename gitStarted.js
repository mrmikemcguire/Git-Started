
$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });


(function()
    {
    var gitStarted = angular.module('gitStarted', []);

    gitStarted.controller('arrayController', ['$http', function($http)
        {
        var array = this;
        array.commands = [];
        $http.get('commands.JSON').success(function(data)
              {
              array.commands = data;
              });
        }]);
    
    gitStarted.controller('CLIController', function($scope)
        {
        $scope.instructions = commands;
        });          
     })();
    
    


