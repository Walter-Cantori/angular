angular.module('app').controller('LabController', [
    function () {
        var vm = this;

        vm.show = function(author){
            alert(JSON.stringify(author.name))
        }

        vm.authors = [
            {
                name: 'foo bar',
                nationality: 'brazil',
                dates: '1985-3000'
            },
            {
                name: 'baz quax',
                nationality: 'japan',
                dates: '1985-2000'
            },
            {
                name: 'embigo',
                nationality: 'taiwan',
                dates: '1987-2017'
            }
        ]

    }
]);