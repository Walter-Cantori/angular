app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        function reset() {
            $scope.model = {};
        }

        function submit(model){
            registration.submit(model).$promise
                .then(function (response) {
                    alert('success');
                },
                function (response) {
                    alert('error');
                });
            reset()
        }

        reset();
    }
]);