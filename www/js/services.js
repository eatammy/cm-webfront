angular.module('starter.services', [])

  //localStoragec存储
  .factory('localStorageService', [function() {
    return {
      get: function localStorageServiceGet(key, defaultValue) {
        var stored = localStorage.getItem(key);
        try {
          stored = angular.fromJson(stored);
        } catch (error) {
          stored = null;
        }
        if (defaultValue && stored === null) {
          stored = defaultValue;
        }
        return stored;
      },
      update: function localStorageServiceUpdate(key, value) {
        if (value) {
          localStorage.setItem(key, angular.toJson(value));
        }
      },
      clear: function localStorageServiceClear(key) {
        localStorage.removeItem(key);
      }
    };
  }])

  //获取用户信息
  .factory("userService", function($http) {
    var userData = {};
    return {
      getOneUser: function(id) {
        //return $http.get("/cm/app/user/queryOne',{params:{id:id}}).then(function(response) {
        return $http.get("../testData/userData.json").then(function(response) {
          userData=response.data.userbean;
          return response.data.userbean;
        });
      }
    };
  })
