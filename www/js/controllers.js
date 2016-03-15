var app = angular.module('starter.controllers', []);

function getControllerScope(controller){
    var appElement = document.querySelector('[ng-controller='+controller+']');
    var $scope = angular.element(appElement).scope();
    return $scope;
}
/**
 * 配置tab ctrl 点击tab时页面可以切换
 */
app.controller('tabCtrl',function($scope, $ionicTabsDelegate) {
    $scope.selectTabWithIndex = function(index) {
        $ionicTabsDelegate.select(index);
        var $scope = getControllerScope('tabSliderCtrl');
        $scope.model.activeIndex = index;

        getControllerScope('titleCtrl').deal(index);
    }
});
/**
 * 配置tabSlider ctrl 滑动页面时可以更改tab
 */
app.controller('tabSliderCtrl',function($scope,$ionicSlideBoxDelegate){
    //为了验证属性active-slide定义的模型，angularjs是mvc模式
    $scope.model = {
        activeIndex:0
    };
    //当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function($index){
        var $scope = getControllerScope('tabCtrl');
        $scope.selectTabWithIndex($index);

        getControllerScope('titleCtrl').deal($index);
    };
    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandlerOne = $ionicSlideBoxDelegate;

    $scope.onDragRight = function(){
        $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(true);
        if($scope.model.activeIndex==0){
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
        }
    };
    $scope.onDragLeft = function(){
        $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(true);
        if($scope.model.activeIndex==3){
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
        }
    };
});

app.controller('titleCtrl',function($scope){
    $scope.myVar1=true;
    $scope.myVar2=false;
    $scope.myVar3=false;
    $scope.myVar4=false;

    $scope.deal = function(index){
        if(index==0){
            $scope.myVar1=true;
            $scope.myVar2=false;
            $scope.myVar3=false;
            $scope.myVar4=false;
        }else if(index==1){
            $scope.myVar2=true;
            $scope.myVar1=false;
            $scope.myVar3=false;
            $scope.myVar4=false;
        }else if(index==2){
            $scope.myVar3=true;
            $scope.myVar1=false;
            $scope.myVar2=false;
            $scope.myVar4=false;
        }else if(index==3){
            $scope.myVar4=true;
            $scope.myVar1=false;
            $scope.myVar2=false;
            $scope.myVar3=false;
        }
    }
});