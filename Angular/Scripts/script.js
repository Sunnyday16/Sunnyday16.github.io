var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
                $routeProvider
                .when("/", {
                        templateUrl: "Templates/login.html",
                        controller: "loginController"
                    })
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                .when("/courses" ,{
                    templateUrl:"Templates/courses.html",
                    controller :"coursesController"
                })
                .when("/students", {
                    templateUrl:"Templates/Students.html",
                    controller:"studentController"
                })
});
app.controller("homeController",function($scope){
    $scope.message="Welcome Sunny";
    $scope.sImage="Images/windsor_castle2.jpg"
});

app.controller("coursesController",function($scope) {
    $scope.courses=["Angular","Java","JavaScript","HTML","CSS"];
});

app.controller("studentController",function($scope) {
    $scope.students=["Sunny","Akshat","Gagan","Rohit","Sumit"];
});
app.controller("loginController",function($scope,$location) {
    $scope.submit= function() {
       if($scope.username =='admin' && $scope.password == 'admin') {
           $location.path("/home");
       } else {
           alert("Invalid username/Password");
       }
    }
});

