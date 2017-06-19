(function () {
    'use strict';


angular.module('sms').controller('signupCtrl', signupCtrl);

signupCtrl.$inject = [ 'UserService','$location', '$rootScope'];

function signupCtrl(UserService,$location, $rootScope,$scope) {

var vm = this;
vm.signup = signup;
 
 function signup() {
console.log(vm.user);
var headers = {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            };
 UserService.Create(vm.user).then(function (response) {
    console.log(response);
                
               });
        }
    }

})(); 