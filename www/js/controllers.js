angular.module('starter.controllers', [])

.controller('fSkillCtrl', function($scope,$ionicHistory, $state) {
        $ionicHistory.clearHistory();
   //     $state.go("tab.fSkill");
})

.controller('fHunterCtrl', function($scope, $ionicHistory,Chats,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
        $ionicHistory.clearHistory();
    //    $state.go("tab.fHunter");
})

.controller('fGroupCtrl', function($scope, $stateParams,$ionicHistory,Chats,$state) {
     $ionicHistory.clearHistory();
     //   $state.go("tab.fGroup");
})

.controller('fMyselfCtrl', function($scope,$ionicHistory,$state) {
        $ionicHistory.clearHistory();
       // $state.go("tab.fMyself");
});
