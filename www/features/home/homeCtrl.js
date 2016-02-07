angular.module('memoryGame').controller('homeCtrl', function ($scope, mainService) {
    
    // $scope.test = 'hello world --> home view'
    
    $scope.getPonies = function () {
        var picIds = [];
        for (var i = 1; i < 11; i++) {
            var random = Math.floor((Math.random() * 161) + 1);
            picIds.push(random);
            picIds.push(random);
        }
        console.log(picIds);

        shuffleArray(picIds);
        console.log(picIds.join(','));
        


        mainService.getPonies(picIds).then(function (response) {
            console.log(response);
            $scope.ponies = response.faces;
        })
    };

    $scope.getPonies();


    // Randomize array element order in-place.
    // Using Durstenfeld shuffle algorithm.
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

});