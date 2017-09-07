angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      listings.entries["code"] = codeEntry;
    };
    $scope.deleteListing = function($index) {
      $scope.listings.splice($index, 1);
    };
    $scope.showDetails = function($index) {
      var item =document.getElementsByClassName('details-{{$index}}');
      item[0].parentNode.
      $scope.show = !show;
    };
  }
]);