angular.module('memoryGame').service('mainService', function($http, $q){
    
    this.getPonies = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://ponyfac.es/api.json/id:1,2,3,4,5,6,7,8,9,10,22,21,13,14,15'
        }).then(function(response){
            deferred.resolve(response.data)
        })
        return deferred.promise
    }
    
});