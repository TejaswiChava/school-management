(function () {
    'use strict';


angular.module('sms').controller('teacherCtrl',teacherCtrl);

teacherCtrl.$inject = ['UserService', '$location', '$rootScope'];

function teacherCtrl(UserService, $location, $rootScope) {
	var vm=this;
	vm.createteacher=createteacher;

function createteacher(){
	console.log(vm.teacher);
	var headers = {
	    'Content-Type':'application/json',
	     'Access-Control-Allow-Origin':'*'
	            };
UserService.AddTeacher(vm.teacher).then(function (response) {
	console.log(response);
	if (response.status==202) {
      $location.path("/allteachers");
    }
    else if(response.status==400){
    alert('invalid credentials');
  $location.path('/addteacher');
    }  
                
               });
        }
	}

})();

 