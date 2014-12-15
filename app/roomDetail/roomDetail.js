'use strict';


angular.module('campusInfoControllers').controller('RoomDetailController', ['$scope', '$http', '$routeParams', 'RoomService',
    function RoomDetailController($scope, $http, $routeParams, RoomService) {
        var roomName = $routeParams.roomName;


        RoomService.getRoom(function(dataResponse){
            $scope.room = dataResponse;
        }, roomName);


        $scope.roomName = roomName;


    }]);