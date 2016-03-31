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
  });
