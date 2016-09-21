/**
 * Created by Promar on 19.09.2016.
 */
angular.module('exampleApp', ['jcs-autoValidate']);

angular.module('exampleApp')
    .run([
        'bootstrap3ElementModifier',
        function (bootstrap3ElementModifier) {
            bootstrap3ElementModifier.enableValidationStateIcons(true);
        }]);

angular.module('exampleApp').controller('exampleCtrl', function($scope){
    $scope.submit = function(){
        alert('submitted!')
    };
});