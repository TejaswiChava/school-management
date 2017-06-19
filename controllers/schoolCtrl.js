(function () {
    'use strict';


angular.module('sms').controller('schoolCtrl', schoolCtrl);

schoolCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function schoolCtrl(UserService,$location, $rootScope,$scope) {

var vm=this;
vm.allScholldata={};


loadData();
function loadData(){
	loadAllSchoolData();

}
function loadAllSchoolData(){
UserService.AllSchoolData().then(function (response) {
console.log(response);
vm.allScholldata = response;

	})

}

















};

})();