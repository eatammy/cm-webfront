var app = angular.module('starter.controllers', []);

function getControllerScope(controller) {
    var appElement = document.querySelector('[ng-controller=' + controller + ']');
    var $scope = angular.element(appElement).scope();
    return $scope;
}
/**
 * 配置tab ctrl 点击tab时页面可以切换
 */
app.controller('tabCtrl', function ($scope, $ionicTabsDelegate) {
    $scope.selectTabWithIndex = function (index) {
        $ionicTabsDelegate.select(index);
        var $scope = getControllerScope('tabSliderCtrl');
        $scope.model.activeIndex = index;

        getControllerScope('titleCtrl').deal(index);
    }
});

var onImgSlider = false;//是否拖动图片滑动框，如果手指onTouch广告框，该变量为true，那么不允许外面大的滑动框向左拖拽

/**
 * 配置tabSlider ctrl 滑动页面时可以更改tab
 */
app.controller('tabSliderCtrl', function ($scope, $ionicSlideBoxDelegate,$ionicScrollDelegate) {

    var positions = new Array(0,0,0,0);

    //为了验证属性active-slide定义的模型，angularjs是mvc模式
    $scope.model = {
        activeIndex: 0
    };
    //当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function ($index) {
        var $scope = getControllerScope('tabCtrl');
        $scope.selectTabWithIndex($index);

        getControllerScope('titleCtrl').deal($index);

        $ionicScrollDelegate.resize();
        $ionicScrollDelegate.scrollTo(0,positions[$index],false);
    };
    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandlerOne = $ionicSlideBoxDelegate;

    $scope.onDragRight = function () {
        $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(true);

        if ($scope.model.activeIndex == 0) {
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
        }

        positions[$scope.model.activeIndex] = $ionicScrollDelegate.getScrollPosition().top;
    };
    $scope.onDragLeft = function () {
        if (onImgSlider) {
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
        }else{
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(true);
        }
        if ($scope.model.activeIndex == 3) {
            $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
        }

        positions[$scope.model.activeIndex] = $ionicScrollDelegate.getScrollPosition().top;
    };

});

app.controller('titleCtrl', function ($scope) {

    $scope.myVar = new Array(true,false,false,false);

    $scope.deal = function (index) {
        for(var i = 0;i<$scope.myVar.length;i++){
            $scope.myVar[i] = (i==index)?true:false;
        }
    }
    $scope.dealReturn = function (index) {
        return $scope.myVar[index];
    }
});