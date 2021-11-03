(function () {
    'use strict';

    angular.module('LunchCheck', []).controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        
        $scope.checkMenu = function () {
            var menu_raw = $scope.menu;
            if (menu_raw != undefined) {
                var menu_array = menu_raw.split(',');

                if (menu_array.length <= 3) {
                    $scope.message = 'Enjoy!';
                }
                else {
                    $scope.message = 'Too much!'
                }
            }
            else {
                $scope.message = "Please enter data first";
            }            
        }

    }
})();