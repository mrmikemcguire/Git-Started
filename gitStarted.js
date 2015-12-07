
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
    
<<<<<<< HEAD
    


=======
    var commands =
        [{
        label: "push",
        command: "git push",
        AKA: "upload",
        variations: 
            [
            "git push -u origin master"  
            ],
        level: "committed",
        images:
            [
            "images/correctPush.png",
            "images/wrongPush.png"
            ]
        },
        {
        label: "add",
        command: "git add .",
        AKA: "track",
        variations: 
            [
            "git add nameOfFile.txt"
            ],
        level: "untracked",
        images:
            [
            "images/correctAdd.png",
            "images/wrongAdd.png"
            ]
        }
    ];
    
    gitStarted.controller("PanelController", function()
        {
        this.tab = 1;
                         
        this.selectTab = function(setTab)
            {
            this.tab = setTab;
            };
        this.isSelected = function (checkTab)
            {
            return this.tab === checkTab;
            };
        })
    })();
>>>>>>> bdca23b6e1e1f3fbc591395f18d31707c57a2e3f
