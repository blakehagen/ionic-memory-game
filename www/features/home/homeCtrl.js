angular.module('memoryGame').controller('homeCtrl', function($scope, mainService){
    
    $scope.test = 'hello world --> home view'
    
    $scope.getPonies = function(){
        mainService.getPonies().then(function(response){
            console.log(response);
        })
    };
    
    $scope.getPonies();
    
    
    
    
});