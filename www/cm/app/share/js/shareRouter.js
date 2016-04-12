/**
 * Created by 丁岳雄 on 2016/3/31.
 * 说明：“发现”页面的子页面的路由配置
 */
angular.module('share.routers', [])
  .config(function($stateProvider) {
    $stateProvider
      //美食圈
      .state('group', {
        url: '/share/group',
        templateUrl: 'cm/app/share/group/main.html',
        controller: 'shareGroupCtrl'
      })
      //美食圈正文
      .state('groupDetail', {
        url: '/share/group/detail/:id',
        templateUrl: 'cm/app/share/group/detail/main.html',
        controller: 'shareGroupDetailCtrl'
      })
      //个人主页
      .state('personal', {
        params:{"uid":null},
        url: '/share/personal/:id',
        templateUrl: 'cm/app/share/personal/main.html',
        controller: 'sharePersonalCtrl'
      })
      //美食忆文
      .state('memory', {
        url: '/share/memory',
        templateUrl: 'cm/app/share/memory/main.html',
        controller: 'shareMemoryCtrl'
      })

      //个人主页的tabs
      .state('personalTabs', {
        url: '/share/personal/content',
        abstract: true,
        templateUrl: 'cm/app/share/personal/main.html'
      })
      .state('personalTabs.memory', {
        url: '/share/personalTabsMemory',
        views: {
          'personalTabs-memory': {
            templateUrl: 'cm/app/share/personal/tabPages/personalTabsMemory.html',
            controller: 'shareMemoryCtrl'
          }
        }
      })
      .state('personalTabs.group', {
        url: '/share/personalTabsGroup',
        views: {
          'personalTabs-group': {
            templateUrl: 'cm/app/share/personal/tabPages/personalTabsGroup.html',
            controller: 'shareGroupCtrl'
          }
        }
      })
  });
