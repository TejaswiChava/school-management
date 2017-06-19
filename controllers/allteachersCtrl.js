(function () {
    'use strict';


angular.module('sms').controller('allteachersCtrl',allteachersCtrl);

allteachersCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function allteachersCtrl(UserService,$location, $rootScope) {

var vm = this;
vm.editteacher =editteacher;
vm.allTeachersdata={};
/*vm.teachers=[
            {id:'1',name:'ramesh',contactnumber:'9550555654'},
            {id:'2',name:'manasa',contactnumber:'9550249060'}

];
 */
     function editteacher() {
      console.log(vm.teacherDetail);
      $('#editteacher').modal('hide');
       var headers = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
            };
      UserService.UpdateTeacherData(vm.teacherDetail).then(function (response) {
       console.log(response);
/*
       if (response.status==200) {
            $location.path("/allteachers");
         }
         else if(response.status==400){
          alert('invalid credentials');
         }*/

      });
  }  

    loadallteacherdata();
    function loadallteacherdata(){
         UserService.AllTeachersData().then(function (response) {
            console.log(response);
            vm.allTeachersdata = response;

    });
  }
    vm.setTeacher = setTeacher;

     function setTeacher(teacher){
        alert('edit your details');
        console.log(teacher);
        vm.teacherDetail = teacher
  }
}

})(); 