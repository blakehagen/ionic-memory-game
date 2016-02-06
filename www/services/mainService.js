angular.module('memoryGame').service('mainService', function($http, $q){
    
    this.getPonies = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://ponyfac.es/api.json/id:23,33,44'
        }).then(function(response){
            deferred.resolve(response.data)
        })
        return deferred.promise
    }
    
});