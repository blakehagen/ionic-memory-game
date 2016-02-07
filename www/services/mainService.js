angular.module('memoryGame').service('mainService', function($http, $q){
    
    this.getPonies = function(picIds){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://ponyfac.es/api.json/id:' + picIds
        }).then(function(response){
            deferred.resolve(response.data)
        })
        return deferred.promise
    }
    
});