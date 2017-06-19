(function (){
	 'use strict';
	 
angular.module('sms').controller('allsubjectsCtrl',allsubjectsCtrl);

allsubjectsCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function allsubjectsCtrl(UserService,$location, $rootScope) {

var vm = this;

vm.setSubject=setSubject;
vm.subjectDetail = {};
vm.allSubjectsdata={};
vm.editsubject=editsubject;



/* vm.allsubjects=[
{id:'1',name:'telugu'},
{id:'2',name:'hindi'},
{id:'3',name:'english'},
{id:'4',name:'maths'},
{id:'5',name:'science'},
{id:'6',name:'social'}];*/

	loadallsubjectdata();
	function loadallsubjectdata(){
	   UserService.AllsubjectsData().then(function (response) {
	   console.log(response);
	   vm.allSubjectsdata = response;

	    });
	  }
	 


		function setSubject(subject){
			alert("edit subject details");
			console.log(subject);
			vm.subjectDetail=subject;
		}
		function editsubject(){
			console.log(vm.subjectDetail);
			$('#editsubject').modal('hide');


      UserService.UpdateSubjectData(vm.subjectDetail).then(function (response) {
        console.log(response);
        /*if (response.status==200) {
            $location.path("/allsubjects");
         }
         else if(response.status==400){
          alert('invalid credentials');
         }*/

                    
                   });
		}




}
})();