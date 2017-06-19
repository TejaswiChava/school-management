(function () {
    'use strict';


angular.module('sms').controller('allstudentsCtrl',allstudentsCtrl);

allstudentsCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function allstudentsCtrl(UserService,$location, $rootScope,$scope) {

var vm = this;
vm.editstudent =editstudent;
vm.allStudentData={};
vm.studentDetail = {};

/* vm.students=[
{id:'1',name:'tejaswi chava',parentname:'srinivasarao chava',contactnumber:'8186869897',dateofjoining:'22/1/2222'},
{id:'2',name:'mahesh',parentname:'ramu',contactnumber:'8186869898',dateofjoining:'22/1/2224'}];*/

    function editstudent() {
      console.log(vm.studentDetail);
      $('#editstudent').modal('hide');
      
      var headers = {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                };
      UserService.UpdateStudentData(vm.studentDetail).then(function (response) {            
      console.log(response);
      /* if (response.status==200) {
            $location.path("/allstudents");
         }
         else if(response.status==400){
         
         }*/
           });
    }

    loadData();
    function loadData(){
        loadAllStudentData();

    }
    function loadAllStudentData(){
        UserService.AllStudentsData().then(function (response) {
        console.log(response);
        vm.allStudentData = response;

        })

    }
    vm.setStudent = setStudent;

     function setStudent(student){
        alert('edit your details');
        console.log(student);
        vm.studentDetail = student
        }

}


})(); 