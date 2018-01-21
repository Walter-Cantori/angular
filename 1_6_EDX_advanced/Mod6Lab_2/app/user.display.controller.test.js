describe('UserDisplayController', function(){
    
    var $rootScope, $q,  $controller, vm, UserService, mockDeferred;

    beforeEach(function(){
        angular.mock.module('app');

        angular.mock.inject(function(_$rootScope_, _$controller_, _$q_, _UserService_){
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $q = _$q_;
            UserService = _UserService_;
            //var promise = new Promise
            //spyOn(UserService, 'getUsers').and.returnValue(promise);
            //spyOn(UserService, 'getUsers').and.callFake(function(){
            //    return Promise.resolve(['user 1', 'user 2']);
            //})
            vm = $controller('UserDisplayController', {userService: UserService});
        });
    });

    it('should have vm defined', function(){
        expect(vm).toBeDefined();
    });

    it('should have vm.executeSearch defined', function(){
        expect(vm.executeSearch).toBeDefined();
    });

    describe('vm.execute search should call UserService.getUsers and return a result', function(){
        it('should call UserService.getUsers and set vm.users', function(){

            var deferred = $q.defer();
            spyOn(UserService, 'getUsers').and.returnValue(deferred.promise)
         
            vm.executeSearch()            
            deferred.resolve(1234)
            $rootScope.$apply();
            expect(vm.users).toEqual(1234);       
 
        });
    });

    
});