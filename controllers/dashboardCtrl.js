(function () {
    'use strict';

    angular.module('sms').controller('DashboardController', DashboardController);

    DashboardController.$inject = ['UserService', '$rootScope','$scope','FlashService'];
    function DashboardController(UserService, $rootScope,$scope,FlashService) {
        var vm = this;

        vm.merchantPromotion = merchantPromotion;
        console.log("sdfferferfe")
        console.log($rootScope.globals);

        initController();

        function initController() {
            loadAllPromotions();
        }

        function loadCurrentUser() {

                /*console.log($rootScope.globals.currentUser.id);*/

           /* UserService.GetMerchantInfo()
                .then(function (res) {
                    vm.merchant = res;
                    console.log(vm.merchant );
                });*/ 
               
        }

         function loadAllPromotions() {
                UserService.GetPromotions()
                .then(function (promotions) {
                    vm.allPromotions = promotions.data;
                    console.log(vm.allPromotions);
                });
        }


        function merchantPromotion(){

            vm.dataLoading = true;
            console.log(vm.promotion);
            console.log($rootScope.globals.currentUser.id);
            var headers = {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            };

            vm.addPromotion = {
                "merchatid":$rootScope.globals.currentUser.id,
                "product_id":vm.promotion.product_id,
                "description":vm.promotion.description,
                 "product_image":vm.promotion.product_image,
                 "originalPrice":vm.promotion.originalPrice,
                 "discount":vm.promotion.discount,
                 "location":vm.promotion.location,
                 "catid":vm.promotion.catid,
                 "brandId":vm.promotion.brandId
            };


            console.log('after add merchant promotion');
            console.log(vm.addPromotion);

            UserService.CreatePromotion(vm.addPromotion).then(function (response) {
                if (response.success) {
                    /*FlashService.Success('Promotion Posted successful', true);*/
                    loadAllPromotions();
                    vm.resetPromotionForm();
                    $location.path('/dashboard');

                } else {
                    FlashService.Error(response.message);
                    console.log('errorrrr')
                    vm.dataLoading = false;
                }
            });

        }


        }

})();

