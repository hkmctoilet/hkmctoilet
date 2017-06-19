	var express = require("express"), 
	app = express(); // Heroku의 환경 변수 PORT가 존재하면 환경변수를 사용하고 , 없다면 5000포트를 사용하도록한다. 
	// 로컬에서 실행하기 위해 설정한다. 
	app.set("port" , (process.env.PORT || 5000)); 
	app.listen(app.get("port") , 
		function(){ 
			console.log("APP IS RUNNING ON ["+ app.get("port") +"]");
			}); 
			app.get("/" , function(req , res){
				res.send("Hello World!"); 
			}); 


	var myApp = angular.module("myApp",["ngRoute"]);
	myApp.config(function($routeProvider){
		$routeProvider
		.when("/13F", {
			templateUrl : "13F.html",
			controller : "13Fctrl"
		})
		.when("/14F", {
			templateUrl : "14F.html",
			controller : "14Fctrl"
		})
		.when("/15F", {
			templateUrl : "15F.html",
			controller : "15Fctrl"
		});
	});
	myApp.controller("13Fctrl", function($scope){
		$scope.msg = "13층 화장실 가용현황입니다." ;
	});
	myApp.controller("14Fctrl", function($scope){
		$scope.msg = "14층 화장실 가용현황입니다." ;
	});
	myApp.controller("15Fctrl", function($scope){
		$scope.msg = "15층 화장실 가용현황입니다." ;
	});