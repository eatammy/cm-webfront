app.controller('imgSliderCtrl',function($scope,$ionicSlideBoxDelegate){
    //为了验证属性active-slide定义的模型，angularjs是mvc模式
    $scope.model = {
        activeIndex:0
    };
    //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
    $scope.pageClick = function(index){
      //alert(index);
      //$scope.model.activeIndex = 2;   //点击小圆点后若执行此句2会成为焦点
    };

    //当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function($index){

    };

    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandlerTwo = $ionicSlideBoxDelegate;

    $scope.onTouch = function(){
        onImgSlider = true;
        $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(false);
    }
    $scope.onRelease = function(){
        onImgSlider = false;
        $ionicSlideBoxDelegate.$getByHandle('delegateHandlerOne').enableSlide(true);
    }
});