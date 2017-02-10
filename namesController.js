/**
 * Created by Administrator on 2016/9/30.
 */
angular.module('myApp',[]).controller('namesStrl',function ($scope) {
    $scope.names=[
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});
