(function () {
    'use strict';

angular.module('sms', ['ngResource', 'ngMessages', 'ui.router','ngCookies']).config(config).run(run);

config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function config($stateProvider, $urlRouterProvider,$locationProvider) {


$locationProvider.html5Mode(true);
$urlRouterProvider.otherwise('/');

$stateProvider
.state('home',{
    url: '/',
    views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'header@home':{
          templateUrl:'layouts/header.html'
        },
        'nav@home': {
          templateUrl: 'layouts/nav.html'
        },
        'body@home': {
          templateUrl: 'views/partials/home.template.html'
        },
        'footer@home': {
          templateUrl: 'layouts/footer.html'
        }
    }
})
.state('home.about',{
    url: 'about',
    views: {
        'body@home': {
          templateUrl: 'views/partials/about.template.html'
        }
    }
})
.state('home.contact',{
    url: 'contact',
    views: {
        'body@home': {
          templateUrl: 'views/partials/contact.template.html'
        }
    }
})
.state('home.login',{
    url: 'login',
    views: {
        'body@home': {
          templateUrl: 'views/partials/login.template.html',
          controller:'loginCtrl',
          controllerAs:'vm'
      }
    }
})

.state('home.signup',{
    url: 'signup',
    views: {
        'body@home': {
          templateUrl: 'views/partials/register.template.html',
          controller:'signupCtrl',
          controllerAs:'vm'
        }
    }
})
.state('dashboard',{
    url: '/dashboard',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@dashboard': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@dashboard':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@dashboard': {
          templateUrl: 'views/partials/dashboard.template.html',
          controller:'DashboardController',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('allclasses',{
    url: '/allclasses',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
        
        'nav@allclasses': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@allclasses':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@allclasses': {
          templateUrl: 'views/partials/classes.template.html',
          controller:'allclassesCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('createclass',{
    url: '/createclass',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@createclass': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@createclass':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@createclass': {
          templateUrl: 'views/partials/createclass.template.html',
          controller:'classCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('vieweditclass',{
    url: '/vieweditclass',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@vieweditclass': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@vieweditclass':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@vieweditclass': {
          templateUrl: 'views/partials/viewclass.template.html',
          controller:'createclassCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('allschools',{
    url: '/allschools',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@allschools': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@allschools':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@allschools': {
          templateUrl: 'views/partials/schools.template.html',
          controller:'schoolCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('addstudent',{
    url: '/addstudent',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@addstudent': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@addstudent':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@addstudent': {
          templateUrl: 'views/partials/addstudent.template.html',
          controller:'studentCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('allstudents',{
    url: '/allstudents',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@allstudents': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@allstudents':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@allstudents': {
          templateUrl: 'views/partials/allstudents.template.html',
          controller:'allstudentsCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})

.state('addteacher',{
    url: '/addteacher',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@addteacher': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@addteacher':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@addteacher': {
          templateUrl: 'views/partials/addteacher.template.html',
          controller:'teacherCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('allteachers',{
    url: '/allteachers',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@allteachers': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@allteachers':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@allteachers': {
          templateUrl: 'views/partials/allteachers.template.html',
          controller:'allteachersCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('allsubjects',{
    url: '/allsubjects',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@allsubjects': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@allsubjects':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@allsubjects': {
          templateUrl: 'views/partials/allsubjects.template.html',
          controller:'allsubjectsCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
})
.state('addsubject',{
    url: '/addsubject',
    views: {
        '': {
          templateUrl: 'views/dashboard.html'
        },
       
        'nav@addsubject': {
          templateUrl: 'layouts/nav.html'
        },
        'sidebar@addsubject':{
          templateUrl:'layouts/sidebar.html'
        },
        'body@addsubject': {
          templateUrl: 'views/partials/addsubject.template.html',
          controller:'subjectCtrl',
          controllerAs:'vm'
        }
        /*'footer@dashboard': {
          templateUrl: 'layouts/footer.html'
        }*/
    }
});



}


 run.$inject = ['$rootScope', '$location', '$cookies', '$http'];

function run($rootScope, $location, $cookies, $http) {
       
        $rootScope.globals = $cookies.getObject('globals') || {};


        if ($rootScope.globals.currentSchool) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentSchool.authdata;
        }        

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var restrictedPage = $.inArray($location.path(), ['/login','/signup','/about','/contact','/dashboard','/allclasses','/createclass','/vieweditclass','/allschools','/addstudent','/allstudents','/addteacher','/allteachers','/allsubjects','/addsubject']) === -1;
           
           
            var loggedIn = $rootScope.globals.currentSchool;
            
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }


})();



    