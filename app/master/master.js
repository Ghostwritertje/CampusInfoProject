'use strict';


angular.module('campusInfoControllers').controller('MasterController', ['$scope', '$http', '$routeParams', '$location', 'RoomService',
    function MasterController($scope, $http, $routeParams, $location, RoomService) {
        RoomService.getRooms(function (data) {
            $scope.rooms = data;
        });

        $scope.title = "Master Page";


        $scope.goRoom =  function goRoom(roomNaam) {
          $location.path("roomDetail/" + roomNaam);
        }


    }]);