app
  .controller('TravelCtrl', ['$http', '$scope', function($http, $scope){
    $scope.title = "Travel";
    $scope.travels = [];
    var getTravels = function () {
      $http.get('/api/v1/travels')
        .success(function(data){
          $scope.travels = data;
        })
        .error(function(data){
          console.log('error', data);
          return data;
        });
    };
    getTravels();
  }])