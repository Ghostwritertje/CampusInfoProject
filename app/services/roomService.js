'use strict';

angular.module('campusInfoControllers').factory("RoomService", ['$http',
    function RoomService($http) {



        return {
            getRooms: function (callback) {
                $http.get('backend/rooms.json').success(function(data) {
                    callback(data);
                });
               /* $http.get('backend/rooms.json').success(function (data) {
                    return  data;
                });*/

            },
            getRoom: function (callback, roomId) {
                $http.get('backend/rooms/'+roomId +'.json').success(function(data) {
                   callback(data);
               });
            }
        }
    }]);