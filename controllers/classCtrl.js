(function () {
    'use strict';


angular.module('sms').controller('classCtrl', classCtrl);

classCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function classCtrl(UserService,$location, $rootScope) {

var vm = this;
vm.createclass =createclass;
vm.allTeachersdata=[];
/*
vm.teachername=["ramesh","mamatha","lakshmi","rahul","pushpa","vikram"];*/

function createclass() {
	console.log(vm.newclass);
	UserService.Class(vm.newclass).then(function (response) {
		console.log(response);  
        if (response.status==202) {
        
            $location.path("/allclasses");

         }
         else if(response.status==400){
          alert('invalid credentials');
          $location.path('/createclass');
         }            
	});
}


 loadallteacherdata();
    function loadallteacherdata(){
         UserService.AllTeachersData().then(function (response) {
            console.log(response);
            vm.allTeachersdata = response;

    });

}
    }

})(); 