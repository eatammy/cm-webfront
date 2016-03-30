/**
 * Created by 丁岳雄 on 2016/3/30.
 * 说明：“我”的页面的子页面的路由配置
 */
angular.module('user.routers', [])
  .config(function($stateProvider) {
    $stateProvider
      //设置
      .state('setting', {
        url: '/user/setting',
        templateUrl: 'cm/app/user/setting/main.html',
        controller: 'userSettingCtrl'
      })
      //修改个人详细信息
      .state('detailInfo', {
        url: '/user/setting/detailInfo',
        templateUrl: 'cm/app/user/setting/detailInfo/main.html',
        controller: 'userDetailInfoCtrl'
      })
      //添加朋友
      .state('tab.addFriend', {
        url: '/user/addFriend',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/addFriend/main.html',
            controller: 'userAddFriendCtrl'
          }
        }
      })
      //我的食谱
      .state('recipes', {
        url: '/user/recipes',
        templateUrl: 'cm/app/user/recipes/main.html',
        controller: 'userRecipesCtrl'
      })
      //我的收藏
      .state('tab.collections', {
        url: '/user/collections',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/collections/main.html',
            controller: 'userCollectionsCtrl'
          }
        }
      })
      //我的订单
      .state('tab.orders', {
        url: '/user/orders',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/orders/main.html',
            controller: 'userOrdersCtrl'
          }
        }
      })
      //我的饭局
      .state('tab.meal', {
        url: '/user/meal',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/meal/main.html',
            controller: 'userMealCtrl'
          }
        }
      })
      //优惠活动
      .state('tab.activities', {
        url: '/user/activities',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/activities/main.html',
            controller: 'userActivitiesCtrl'
          }
        }
      })
      //积分兑换
      .state('tab.integrals', {
        url: '/user/integrals',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/integrals/main.html',
            controller: 'userIntegralsCtrl'
          }
        }
      })
      //关于我们
      .state('tab.aboutUs', {
        url: '/user/aboutUs',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/aboutUs/main.html',
            controller: 'userAboutUsCtrl'
          }
        }
      })
      //意见反馈
      .state('tab.suggestions', {
        url: '/user/suggestions',
        views: {
          'tab-user': {
            templateUrl: 'cm/app/user/suggestions/main.html',
            controller: 'userSuggestionsCtrl'
          }
        }
      });
  });

