var userCtrl = angular.module('user.controllers', [])
  //设置
  .controller('userSettingCtrl', function ($scope, $ionicHistory, $state) {
})
  //修改个人详细信息
  .controller('userDetailInfoCtrl', function ($scope,$rootScope, $ionicPopup,$ionicHistory, $state) {
    //用户数据
    $scope.uInfo=$rootScope.uData.userbean;

    //弹窗修改昵称
    $scope.showAlterNamePopup = function() {
      $scope.data = {};
      var myPopup = $ionicPopup.show({
        template: ' <label class="item item-input"><input type="text" ng-model="data.username" placeholder="请输入昵称..."></label>',
        title: '请输入新昵称',
        //subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          {
            text: '取消',
            type: 'button-light',
          },
          {
            text: '<b>保存</b>',
            type: 'button-assertive',
            onTap: function (e) {
              if (!$scope.data.username) {
                e.preventDefault();
              } else {
                $scope.uInfo.username=$scope.data.username;
              }
            }
          },
        ]
      });
    }
  })
  //添加朋友
  .controller('userAddFriendCtrl', function ($scope, $ionicHistory, $state) {
  })
  //我的食谱
  .controller('userRecipesCtrl', function ($scope, $ionicHistory, $state) {
  })
  //我的收藏
  .controller('userCollectionsCtrl', function ($scope, $ionicHistory, $state) {
  })
  //我的订单
  .controller('userOrdersCtrl', function ($scope, $ionicHistory, $state) {
  })
  //我的饭局
  .controller('userMealCtrl', function ($scope, $ionicHistory, $state) {
  })
  //优惠活动
  .controller('userActivitiesCtrl', function ($scope, $ionicHistory, $state) {
  })
//积分兑换
  .controller('userIntegralsCtrl', function ($scope, $ionicHistory, $state) {
  })
  //关于我们
  .controller('userAboutUsCtrl', function ($scope, $ionicHistory, $state) {
  })
  //意见反馈
  .controller('userSuggestionsCtrl', function ($scope, $ionicHistory, $state) {
  })
  //查看大图
  .controller('imgCtrl', function ($scope,$ionicPopover) {
      $ionicPopover.fromTemplateUrl('cm/app/commonTpl/showBigImgTpl.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
      });

      $scope.openPopover = function($event) {
        //console.log($event);
        $scope.popover.show();
      };
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      // 清除浮动框
      $scope.$on('$destroy', function() {
        $scope.popover.remove();
      });
      // 在隐藏浮动框后执行
      $scope.$on('popover.hidden', function() {
        // 执行代码
      });
      // 移除浮动框后执行
      $scope.$on('popover.removed', function() {
        // 执行代码
      });
  })

  //获取前一页的标题
  //.controller('GetPrevTitleCtrl', function($scope, $ionicNavBarDelegate){
  //  $scope.getPreviousTitle = function() {
  //    return $ionicNavBarDelegate.getPreviousTitle();
  //  };
  //})
