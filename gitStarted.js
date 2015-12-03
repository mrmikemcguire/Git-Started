var app = angular.module('gitStarted', []);

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });

(function()
    {
    var app = angular.module('commands', []);
    
    app.controller('CommandsController', function()
        {
        this.instruction = commands;
        });
    
    var commands =
        {
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
    })();