(function(){
'use strict';
angular.module('LunchChecker',[])
.controller('LunchCheckerController',LunchCheckerController);
LunchCheckerController.$inject=['$scope'];

function LunchCheckerController($scope){
$scope.checkDishes=function(){
	var num =countDishes($scope.dishes);
	$scope.message=createmessage(num);
};
function countDishes(dishes) {
	var count=0;
	if(dishes){
		var arr=dishes.split(',');
		for(var i in arr){
			if(arr[i].trim().length!=0){
				count++;
			}
		}
	}
	return count;
}
function createmessage(num) {
	if(num==0)
		return "Please enter data first";
	else if(num<4)
		return 'Enjoy!';
	else
		return 'Too much!';
}

}

})();
