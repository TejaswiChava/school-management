(function () {
    'use strict';

    angular.module('sms').controller('loginCtrl',loginCtrl);

    loginCtrl.$inject = ['$location', '$rootScope','AuthenticationService',/* 'FlashService',*/'UserService'];

function loginCtrl($location,$rootScope,AuthenticationService,UserService) {
    var vm = this;
       
    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();


    function login() {
      console.log(vm.user);
      AuthenticationService.Login(vm.user).then(function (response) {

        console.log(response);

        // $rootScope.id = response.id;
        // $rootScope.schoolName = response.schoolname;
        
         if (response.status==200) {
          AuthenticationService.SetCredentials(response.data);
            $location.path("/dashboard");

         }
         else if(response.status==400){
          alert('invalid credentials');
          $location.path('/login');
         }
      });

    };
}

})();
