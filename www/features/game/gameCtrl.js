angular.module('memoryGame').controller('gameCtrl', function ($scope, mainService) {

    $scope.getPonies = function () {
        var picIds = [];
        for (var i = 1; i < 10; i++) {
            var random = Math.floor((Math.random() * 161) + 1);
            if (picIds.indexOf(random) === -1) {
                picIds.push(random);
            }
            else {
                i--;
            }
        }
        picIds = picIds.concat(picIds.slice(0));
        console.log(picIds);
        picIds = shuffleArray(picIds);
        console.log(picIds);

        mainService.getPonies(picIds).then(function (response) {
            console.log(response);
            $scope.ponies = response.faces;
        })
    };

    $scope.getPonies();


    // Randomize array element order using Durstenfeld shuffle algorithm.
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