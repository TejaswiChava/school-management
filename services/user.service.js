(function () {
    'use strict';

angular.module('sms').factory('UserService', UserService);

UserService.$inject = ['$http'];

    function UserService($http) {

        var service = {};

        service.Create = Create;
        service.Class=Class;
        service.AddTeacher=AddTeacher;
        service.AddStudent=AddStudent;
        service.AddSubject=AddSubject;
        service.AllStudentsData=AllStudentsData;
        service.AllTeachersData=AllTeachersData;
        service.AllclassesData=AllclassesData;
        service.AllsubjectsData=AllsubjectsData;
        service.UpdateTeacherData=UpdateTeacherData;
        service.UpdateClassData=UpdateClassData;
        service.UpdateStudentData=UpdateStudentData;
        service.UpdateClassData=UpdateClassData;


        
        service.AllSchoolData=AllSchoolData;
        

        return service;

    

        function Create(user) {
            return $http.post('http://192.168.1.9:8080/register',user).then(handleSuccess, handleError('Error creating user'));
        }
        /*function Login(user){
            return $http.post('http://192.168.1.9:8080/login', user).then(handleSuccess, handleError);
            
        }*/
         function AllSchoolData(){
            return $http.get('http://192.168.1.9:8080/schools').then(handleSuccess, handleError);
            
        }
        function Class(newclass){
            return $http.post('http://192.168.1.12:8080/createclass',newclass).then(handleSuccess, handleError);
            
        }
        function AddStudent(student){
            return $http.post('http://192.168.1.12:8080/addstudent',student).then(handleSuccess, handleError);
            
        }
         function AddTeacher(teacher){
            return $http.post('http://192.168.1.12:8080/addteacher',teacher).then(handleSuccess, handleError);
            
        }
         function AllStudentsData(){
            return $http.get('http://192.168.1.12:8080/students').then(handleSuccess, handleError);
            
        }
         function AllTeachersData(){
            return $http.get('http://192.168.1.12:8080/teachers').then(handleSuccess, handleError);
            
        }
        function AllclassesData(){
            return $http.get('http://192.168.1.12:8080/classes').then(handleSuccess, handleError);


        }
          function AddSubject(subject){
            return $http.post('http://192.168.1.12:8080/addsubjects',subject).then(handleSuccess, handleError);


        }
        function AllsubjectsData(){
            return $http.get('http://192.168.1.12:8080/subjects').then(handleSuccess, handleError);


        }
          function UpdateTeacherData(teacherDetail){
            return $http.post('http://192.168.1.12:8080/updateteacher',teacherDetail).then(handleSuccess, handleError);


        }
        function UpdateClassData(classDetail){
            return $http.post('http://192.168.1.12:8080/updateclassteacher',classDetail).then(handleSuccess, handleError);


        }
        function UpdateStudentData(studentDetail){
            return $http.post('http://192.168.1.12:8080/updatestudent',studentDetail).then(handleSuccess, handleError);


        }
        function UpdateSubjectData(subjectDetail){
            return $http.post('http://192.168.1.12:8080/updatesubject',subjectDetail).then(handleSuccess, handleError);


        }









        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
                return res.data; /*{ success: false, message: error };*/
        }
    }

})();
