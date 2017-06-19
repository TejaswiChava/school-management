(function () {
    'use strict';


angular.module('sms').controller('allclassesCtrl',allclassesCtrl);

allclassesCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function allclassesCtrl(UserService,$location, $rootScope) {

  var vm = this;
  vm.editclass=editclass;
  vm.allClassesData=[];
 
  /*
  vm.class=[{classname:'1',teachername:'a',academicyear:'2012'}];*/

    console.log(vm.class);

     function editclass() {
      console.log(vm.classDetail);
      $('#editclass').modal('hide');

    UserService.UpdateClassData(vm.classDetail).then(function (response) {
        console.log(response);
        /*if (response.status==200) {
         $location.path("/allclasses");
         }
         else if(response.status==400){
          alert('invalid credentials');
         }*/
                    
                   });
  }
    loadclassesdata();
    function loadclassesdata(){
      UserService.AllclassesData().then(function (response) {
      console.log(response);
      vm.allClassesData = response;
      });
  }
  loadallteacherdata();
    function loadallteacherdata(){
         UserService.AllTeachersData().then(function (response) {
            console.log(response);
            vm.allTeachersdata = response;

    });
}

vm.setClass=setClass;
  function setClass(classes){
        console.log(classes);
        vm.classDetail=classes
  }


}    

})(); 