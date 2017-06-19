(function () {
    'use strict';


angular.module('sms').controller('studentCtrl',studentCtrl);

studentCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function studentCtrl(UserService,$location, $rootScope) {

var vm = this;
vm.createstudent=createstudent;
 vm.allClassesData=[];
function createstudent() {
	console.log(vm.student);
	var headers = {
	 'Content-Type':'application/json',
	'Access-Control-Allow-Origin':'*'
	};
UserService.AddStudent(vm.student).then(function (response) {
	console.log(response);
  if (response.status==202) {
      $location.path("/allstudents");
    }
    else if(response.status==400){
    alert('invalid credentials');
  $location.path('/addstudent');
    }      
                
               });
        }

     loadclassesdata();
    function loadclassesdata(){
      UserService.AllclassesData().then(function (response) {
      console.log(response);
      vm.allClassesData = response;
      });
    }
}
})(); 