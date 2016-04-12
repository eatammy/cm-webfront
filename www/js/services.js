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
  .factory("userService", function($http,localStorageService) {
    return {
      //获取id号为uid的用户的信息
      getOneUser: function(uid) {
        //return $http.get("/cm/app/user/queryOne',{params:{id:uid}}).then(function(response) {
        return $http.get("../testData/userData.json").then(function(response) {
          return response.data.userbean;
        });
      },
      //初始化用户信息存到本地
      initUser:function(userbean){
        localStorageService.update('userbean',userbean);
      }
    };
  })
