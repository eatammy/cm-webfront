/**
 * Created by 丁岳雄 on 2016/3/31.
 */
var shareCtrl = angular.module('share.controllers', [])
  //美食圈
  .controller('shareGroupCtrl', function ($scope, $ionicHistory, $state ,localStorageService) {
    $scope.uInfo=localStorageService.get('userbean');
    $scope.goToPersonal=function(uid){
      $state.go("personal",{uid:uid});
    };
  })
  //美食圈正文
  .controller('shareGroupDetailCtrl', function ($scope, $ionicHistory, $state) {
  })
  //个人主页
  .controller('sharePersonalCtrl', function ($scope, $ionicHistory, $state,$stateParams) {
    $scope.uid=$stateParams.uid;
  })
  //美食忆文
  .controller('shareMemoryCtrl', function ($scope, $ionicHistory, $state) {
  })

