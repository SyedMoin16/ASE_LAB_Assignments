/**
 * Created by syedm on 3/17/2017.
 */
var nodeMashupApp = angular.module('NodeMashupApp', []);

nodeMashupApp.controller('lab9', function($scope,$http) {
    $scope.quantity = 1;
    $scope.searchData= function () {
        var searchQuery=document.getElementById("txt_searchFilter").value;
        $http.get('http://localhost:8081/getdata/'+searchQuery).success(function(data) {
            console.log(data);


            $scope.senti_type = data.search_details[0].sentiment_type;
            $scope.senti_score = data.search_details[0].sentiment_score;
            $scope.searchDetails = data.search_details[0].google_api;

            console.log($scope.senti);

            document.getElementById('search_body').style.display = 'block';
        });
    }
});