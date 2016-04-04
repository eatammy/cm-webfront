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

.controller('userCtrl', function ($scope, $rootScope,$ionicHistory, $state,$http,userService) {
    $scope.onSwipeRight = function() {
      $state.go("tab.share");
    };
    //测试数据
    //$scope.uInfo=userService.getOneUser(1);
    //console.log($scope.uInfo.address);
    $scope.uInfo=$rootScope.uData.userbean;
    //console.log($scope.uInfo);
   /* $http.get('/cm/app/user/queryOne',{params:{id:1}
    }).success(function(data,status){
      //$scope.uInfo=data.userbean;
    }).error(function(data,status){
      //错误时执行的代码
    });*/

})
  //标题返回键
  .controller('myNavCtrl', function ($scope,$rootScope, $ionicHistory, $state,$ionicNavBarDelegate) {
    //用户数据
    $scope.uInfo=$rootScope.uData.userbean;
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
