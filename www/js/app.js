// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
/**
 * cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
 *cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
 * for return button
 */
angular.module('starter', ['ionic','ngCordova','starter.controllers'])

.run(function($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory,$cordovaToast,$cordovaKeyboard) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
/*  暂不能使用此功能，有bug*/
    //双击退出
   /* $ionicPlatform.registerBackButtonAction(function (event) {
        //判断处于哪个页面时双击退出
        if ($location.path() == '/tab/fHunter') {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortTop('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
        }
        else if ($ionicHistory.backView()) {
            if ($cordovaKeyboard.isVisible()) {
                $cordovaKeyboard.close();
            } else {
                $ionicHistory.goBack();
            }
        } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortTop('再按一次退出系统');
            setTimeout(function () {
                $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
        }
        event.preventDefault();
        return true;
    }, 101);*/

})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    //解决android tab导航条在顶部 start
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    //解决android tab导航条在顶部 end

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: false,     //抽象页面，if true不能独立作为页面展示只能作为其他页面父页面，当加载子页面之前加载父页面。
    templateUrl: 'cm/app/tabs.html'
  })

    //“我”界面内的路由设置
    .state('user', {
      url: '/user/setting',
      abstract: false,
      templateUrl: 'cm/app/user/setting/main.html'
    })

  // Each tab has its own nav history stack:

    /*.state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab');

});
