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
      //美食忆文
      .state('memory', {
        url: '/share/memory',
        templateUrl: 'cm/app/share/memory/main.html',
        controller: 'shareMemoryCtrl'
      })
  });
