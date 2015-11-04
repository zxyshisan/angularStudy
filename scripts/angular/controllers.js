/**
 * Created by Administrator on 2015/10/30 0030.
 */
'use strict';
app.controller('LoginCtrl',function(){

});
app.controller('RegCtrl',function(){

});
app.controller('appCtrl',function($scope){
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
app.controller('personCtrl',function($scope){
    $scope.firstName = "zhang";
    $scope.lastName = "xinyu";
    $scope.fullName = function(){
        return $scope.firstName+" "+$scope.lastName;
    }
});
app.controller('httpCtrl',function($scope,$http){
    $http.get("./json/user.json")
        .success(function(response){
            $scope.names=response;
            console.log(response);
        });
});
app.controller('hideCtrl', function($scope) {
    $scope.firstName = "John",
        $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});