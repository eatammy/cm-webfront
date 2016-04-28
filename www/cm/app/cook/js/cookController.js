/**
 * Created by 丁岳雄 on 2016/4/20.
 */
var cookCtrl = angular.module('cook.controllers', [])
  //食谱详情
  .controller('recipeDetailCtrl', function ($scope, $ionicHistory, $state) {

  })
  //添加食谱
  .controller('addRecipeCtrl', function ($scope, $ionicHistory, $state,$ionicPopup) {
    $scope.step_text_hidden=[];
    $scope.submitButton="button-unable";
    $scope.showData = {
      showMaterialDelete: false,
      showMaterialReorder:false,
      showStepDelete: false,
      showStepReorder:false
    };
    $scope.recipeData = {material:[{food:"", num:""}, {food:"", num:""}],steps:[{content:"", imgUrl:""}, {content:"", imgUrl:""}]};
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
                submitOk();
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
                submitOk();
              }
            }
          },
        ]
      });
    }

    //添加用料
    $scope.addMaterial=function(item) {
      $scope.materialIndex=$scope.recipeData.material.indexOf(item);
      $scope.tempData.food= $scope.recipeData.material[$scope.materialIndex].food;
      $scope.tempData.num= $scope.recipeData.material[$scope.materialIndex].num;

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
                $scope.recipeData.material[$scope.materialIndex].food=$scope.tempData.food;
                $scope.recipeData.material[$scope.materialIndex].num=$scope.tempData.num;
                $scope.material_divider_on="c-add-divider-on";
                submitOk();
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

    //添加步骤说明
    $scope.addStep=function(item) {
      $scope.stepIndex=$scope.recipeData.steps.indexOf(item);
      $scope.tempData.content= $scope.recipeData.steps[$scope.stepIndex].content;

      var addStepPopup = $ionicPopup.show({
        templateUrl: './cm/app/cook/tpl/addRecipe/addStep.html',
        title: '<div class="bar bar-header bar-assertive"><h1 class="title">添加步骤详情</h1></div>',
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
              if (!$scope.tempData.content) {
                e.preventDefault();
              } else {
                $scope.recipeData.steps[$scope.stepIndex].content=$scope.tempData.content;
                $scope.step_divider_on="c-add-divider-on";
                $scope.step_text_hidden[$scope.stepIndex]="hidden";
                submitOk();
              }
            }
          },
        ]
      });
    }

    //新增步骤
    $scope.addOneStep=function() {
      $scope.recipeData.steps.push({ content: "" ,imgUrl:""});
    }

    //交换步骤位置（重新排序）
    $scope.reorderStepItem = function(item, fromIndex, toIndex) {
      $scope.recipeData.steps.splice(fromIndex, 1);
      $scope.recipeData.steps.splice(toIndex, 0, item);
    };

    //添加小贴士
    $scope.addTips=function() {
      $scope.tempData.tips= $scope.recipeData.tips;

      var addTipsPopup = $ionicPopup.show({
        templateUrl: './cm/app/cook/tpl/addRecipe/addTips.html',
        title: '<div class="bar bar-header bar-assertive"><h1 class="title">注意事项说明</h1></div>',
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
              $scope.recipeData.tips=$scope.tempData.tips;
              if (!$scope.tempData.tips) {
                $scope.tips_divider_on="";
                $scope.stips_text_hidden="";
              } else {
                $scope.tips_divider_on="c-add-divider-on";
                $scope.stips_text_hidden="hidden";
              }
            }
          },
        ]
      });
    }

    //删除
    $scope.deleteItem=function(obj,index){
      if(obj.length!=1){
        obj.splice(index, 1);
        if(obj==$scope.recipeData.material && (!obj[index].food && !obj[index].num)){
          $scope.material_divider_on="";
          submitOk();
        }
        if(obj==$scope.recipeData.steps){
          $scope.step_text_hidden[index]="";
          if(!obj[index].content){
            $scope.step_divider_on="";
            submitOk();
          }
        }
      }
    }

    //submit按钮
    var submitOk=function() {
      if(!$scope.recipeData.title || !$scope.recipeData.summary || !$scope.recipeData.material[0].food || !$scope.recipeData.steps[0].content){
        $scope.submitButton = "button-unable";
      }else{
        $scope.submitButton = "button-assertive";
      }
    }
  })
