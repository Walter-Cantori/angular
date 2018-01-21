describe('userDisplayDirective', function () {
    
        var $compile, $scope, element, users;
    
        beforeEach(function () {
    
            angular.mock.module('app');
            angular.mock.module('compiled-templates');
            angular.mock.inject(function (_$rootScope_, _$compile_) {
                $scope = _$rootScope_.$new();
                $compile = _$compile_;
            });
        });
    
        it('should compile an element', function(){
            users = [
                {name: 'Elvis', email: 'Presley@test.net'},
                {name: 'Johnny', email: 'Cash@test.net'},
                {name: 'Carl', email: 'Perkins@test.net'}
            ];
            $scope.users = users;
    
            element = $compile('<user-display-directive users="users"></user-display-directive>')($scope);
            $scope.$digest();
            expect(element).toBeDefined();
        });
    
        it('should have users on the scope', function(){
            expect(element.isolateScope().users).toBeDefined();
        });
    
        it('should have three users on the scope', function(){
            expect(element.isolateScope().users.length).toEqual(users.length);
        });
    
        it('the element should have the users in it\'s html', function(){
            expect(element.html()).toContain(users[0].name);
            expect(element.html()).toContain(users[1].name);
            expect(element.html()).toContain(users[2].name);
            expect(element.html()).toContain(users[0].email);
            expect(element.html()).toContain(users[1].email);
            expect(element.html()).toContain(users[2].email);
        });
    });