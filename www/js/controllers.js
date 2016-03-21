var app = angular.module('starter.controllers', [])

.controller('cookCtrl', function ($scope, $ionicHistory, $state) {

    //$state.go("tab.cook");
})

.controller('businessCtrl', function ($scope, $ionicHistory, $state) {

  //  $state.go("tab.business");
})

.controller('shareCtrl', function ($scope, $stateParams, $ionicHistory,$state) {

  //  $state.go("tab.share");
})

.controller('userCtrl', function ($scope, $ionicHistory, $state) {

 //   $state.go("tab.user");
});

function getControllerScope(controller) {
    var appElement = document.querySelector('[ng-controller=' + controller + ']');
    var $scope = angular.element(appElement).scope();
    return $scope;
}