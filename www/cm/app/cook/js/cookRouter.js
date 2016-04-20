/**
 * Created by 丁岳雄 on 2016/4/20.
 * 说明：cook模块的路由配置
 */
angular.module('cook.routers', [])
  .config(function($stateProvider) {
    $stateProvider
      //设置
      .state('recipeDetail', {
       // params:{"userData":null,"userData":null},
        url: '/cook/recipeDetail',
        templateUrl: 'cm/app/cook/recipeDetail/main.html',
        controller: 'recipeDetailCtrl'
      })
  });
