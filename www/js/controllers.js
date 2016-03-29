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

.controller('userCtrl', function ($scope, $ionicHistory, $state,$http) {
    $scope.onSwipeRight = function() {
      $state.go("tab.share");
    };
    //测试数据
    var uData={
      "userbean":
      {
        "attentions":143,
        "funs":144,
        "headIcon":"http://7vijoa.com1.z0.glb.clouddn.com/img7.jpg",
        "uWords":"只有食物让我心安",
        "uid":9,
        "username":"Mark Brown"
      }
    };
    $scope.uInfo=uData.userbean;
    $http.get('/cm/app/user/queryOne',{params:{id:1}
    }).success(function(data,status){
      //$scope.uInfo=data.userbean;
    }).error(function(data,status){
      //错误时执行的代码
    });

});

function getControllerScope(controller) {
    var appElement = document.querySelector('[ng-controller=' + controller + ']');
    var $scope = angular.element(appElement).scope();
    return $scope;
}
