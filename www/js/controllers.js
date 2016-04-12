var app = angular.module('starter.controllers', [])

.controller('cookCtrl', function ($scope, $ionicHistory, $state) {
    $scope.onSwipeLeft = function() {
      $state.go("tab.business");
    };
})

.controller('businessCtrl', function ($scope, $ionicHistory, $state) {
    $scope.onSwipeLeft = function() {
      $state.go("tab.share");
    };
    $scope.onSwipeRight = function() {
      $state.go("tab.cook");
    };
})

.controller('shareCtrl', function ($scope, $stateParams, $ionicHistory,$state) {
    $scope.onSwipeLeft = function() {
      $state.go("tab.user");
    };
    $scope.onSwipeRight = function() {
      $state.go("tab.business");
    };
})

.controller('userCtrl', function ($scope,$ionicHistory, $state,$http,userService,localStorageService) {
    $scope.onSwipeRight = function() {
      $state.go("tab.share");
    };
    //测试数据
    $http.get("../testData/userData.json").then(function(response) {
      userService.initUser(response.data.userbean);
    });
    $scope.uInfo=localStorageService.get('userbean');
})
  //标题返回键
  .controller('myNavCtrl', function ($scope, $ionicHistory,localStorageService, $state,$ionicNavBarDelegate) {
    //用户数据
    $scope.uInfo=localStorageService.get('userbean');
    //返回按钮动作
    $scope.goBack=function(){
      $ionicHistory.goBack();
    };
    //$scope.getPreviousTitle=function(){
    //  return $ionicNavBarDelegate.getPreviousTitle();
    //};
  });

function getControllerScope(controller) {
    var appElement = document.querySelector('[ng-controller=' + controller + ']');
    var $scope = angular.element(appElement).scope();
    return $scope;
}
