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
angular.module('starter', ['ionic','ngCordova','starter.controllers','starter.services','share.controllers','share.routers',
  'user.controllers','user.routers'])
.run(function($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory,$cordovaToast,$cordovaKeyboard,$ionicPopup) {
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
    //双击退出
    $ionicPlatform.registerBackButtonAction(function (e) {
        if (ionic.keyboard.isOpen) {
            $cordovaKeyboard.close();
        }
        //判断处于哪个页面时双击退出
        else if ($location.path() == '/tab/cook' || $location.path() == '/tab/business' ||
            $location.path() == '/tab/share' || $location.path() == '/tab/user') {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortBottom('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
        }
        else if ($ionicHistory.backView()) {
            if (ionic.keyboard.isOpen) {
                $cordovaKeyboard.close();
            } else {
                $ionicHistory.goBack();
            }
        } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortBottom('再按一次退出系统');
            setTimeout(function () {
                $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
        }
        e.preventDefault();
        return true;
    }, 101);
    /* //弹出窗口退出
     $ionicPlatform.registerBackButtonAction(function (e) {
     function showConfirm() {
     var confirmPopup = $ionicPopup.confirm({
     title: '<strong>退出应用?</strong>',
     template: '你确定要退出应用吗?',
     okText: '退出',
     cancelText: '取消'
     });
     confirmPopup.then(function (res) {
     if (res) {
     ionic.Platform.exitApp();
     } else {
     // Don't close
     }
     });
     }
     //判断处于哪个页面时双击退出
     if ($location.path() == '/tab' ) {
     if (ionic.keyboard.isOpen) {
     $cordovaKeyboard.close();
     }else{
     showConfirm();
     }
     }else if ($ionicHistory.backView()) {
     if (ionic.keyboard.isOpen) {
     $cordovaKeyboard.close();
     }else{
     $ionicHistory.goBack();
     }
     }else {
     // This is the last page: Show confirmation popup
     showConfirm();
     }
     e.preventDefault();
     return false;
     }, 101);
     */

    //保存用户信息（测试用）
    $rootScope.uData={
      "userbean":
      {
        "attentions":143,
        "funs":144,
        "headIcon":"http://7vijoa.com1.z0.glb.clouddn.com/img7.jpg",
        "uWords":"只有食物让我心安",
        "uid":9,
        "username":"Mark Brown",
        "sex":"男",
        "address":"广东 汕头"
      }
    };
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
    abstract: true,     //抽象页面，不能独立作为页面展示只能作为其他页面父页面，当加载子页面之前加载父页面。
    templateUrl: 'cm/app/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cook', {
    url: '/cook',
    views: {
      'tab-cook': {
        templateUrl: 'cm/app/cook/main.html',
        controller: 'cookCtrl'
      }
    }
  })

  .state('tab.business', {
      url: '/business',
      views: {
        'tab-business': {
          templateUrl: 'cm/app/business/main.html',
          controller: 'businessCtrl'
        }
      }
    })

  .state('tab.share', {
      url: '/share',
      views: {
          'tab-share': {
              templateUrl: 'cm/app/share/main.html',
              controller: 'shareCtrl'
          }
      }
  })
    /*.state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'cm/app/user/main.html',
        controller: 'userCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/cook');

});
