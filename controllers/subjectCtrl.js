(function () {
    'use strict';
angular.module('sms').controller('subjectCtrl',subjectCtrl);
subjectCtrl.$inject = [ 'UserService','$location', '$rootScope'];
function subjectCtrl(UserService,$location, $rootScope) {
	var vm= this;
	vm.addsubject=addsubject;
function addsubject(){
	console.log(vm.subject);
	UserService.AddSubject(vm.subject).then(function (response) {
	console.log(response);
	if (response.status==202) {
      $location.path("/allsubjects");
    }
    else if(response.status==400){
    alert('invalid credentials');
  $location.path('/addsubject');
    }  
                
    });
	}
}
})();
