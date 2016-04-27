/**
 * Created by 丁岳雄 on 2016/4/20.
 */
var cookCtrl = angular.module('cook.controllers', [])
  //食谱详情
  .controller('recipeDetailCtrl', function ($scope, $ionicHistory, $state) {

  })
  //添加食谱
  .controller('addRecipeCtrl', function ($scope, $ionicHistory, $state,$ionicPopup) {
    $scope.inputNum=2;
    $scope.showData = {
      showDelete: false,
      showReorder:false
    };
    $scope.recipeData = {
      "material":[
        {
          food:"",
          num:""
        },
        {
          food:"",
          num:""
        }
      ]
    };
    $scope.tempData = {};

    //添加标题
    $scope.addTitle=function() {
      $scope.tempData.title=$scope.recipeData.title;
      var addTitlePopup = $ionicPopup.show({
        templateUrl: './cm/app/cook/tpl/addRecipe/addTitle.html',
        title: '<div class="bar bar-header bar-assertive"><h1 class="title">添加食谱标题</h1></div>',
        scope: $scope,
        buttons: [
          {
            text: '取消',
            type: 'button-outline button-assertive',
          },
          {
            text: '<b>保存</b>',
            type: 'button-assertive',
            onTap: function (e) {
              if (!$scope.tempData.title) {
                e.preventDefault();
              } else {
                $scope.recipeData.title=$scope.tempData.title;
                $scope.title_divider_on="c-add-divider-on";
                $scope.title_text_hidden="hidden";
              }
            }
          },
        ]
      });
    }

    //添加简介
    $scope.addSummary=function() {
      $scope.tempData.summary=$scope.recipeData.summary;
      var addSummaryPopup = $ionicPopup.show({
        templateUrl: './cm/app/cook/tpl/addRecipe/addSummary.html',
        title: '<div class="bar bar-header bar-assertive"><h1 class="title">添加食谱简介</h1></div>',
        scope: $scope,
        buttons: [
          {
            text: '取消',
            type: 'button-outline button-assertive',
          },
          {
            text: '<b>保存</b>',
            type: 'button-assertive',
            onTap: function (e) {
              if (!$scope.tempData.summary) {
                e.preventDefault();
              } else {
                $scope.recipeData.summary=$scope.tempData.summary;
                $scope.summary_divider_on="c-add-divider-on";
                $scope.summary_text_hidden="hidden";
              }
            }
          },
        ]
      });
    }

    //添加用料
    $scope.addMaterial=function(item) {
      $scope.itemIndex=$scope.recipeData.material.indexOf(item);
      $scope.tempData.food= $scope.recipeData.material[$scope.itemIndex].food;
      $scope.tempData.num= $scope.recipeData.material[$scope.itemIndex].num;

      var addMaterialPopup = $ionicPopup.show({
        templateUrl: './cm/app/cook/tpl/addRecipe/addMaterial.html',
        title: '<div class="bar bar-header bar-assertive"><h1 class="title">添加用料</h1></div>',
        scope: $scope,
        buttons: [
          {
            text: '取消',
            type: 'button-outline button-assertive',
          },
          {
            text: '<b>保存</b>',
            type: 'button-assertive',
            onTap: function (e) {
              if (!$scope.tempData.food || !$scope.tempData.num) {
                e.preventDefault();
              } else {
                $scope.recipeData.material[$scope.itemIndex].food=$scope.tempData.food;
                $scope.recipeData.material[$scope.itemIndex].num=$scope.tempData.num;
                $scope.material_divider_on="c-add-divider-on";
              }
            }
          },
        ]
      });
    }

    //新增一行用料
    $scope.addOneMaterial=function() {
      $scope.recipeData.material.push({ food: "" ,num:""});
    }

    //交换用料位置（重新排序）
    $scope.reorderMaterialItem = function(item, fromIndex, toIndex) {
      $scope.recipeData.material.splice(fromIndex, 1);
      $scope.recipeData.material.splice(toIndex, 0, item);
    };
  })
