angular.module('starter.controllers', [])


  .service('newService', ['$http', function ($http) {
    var source = ['abc-news-au', 'arc-technica', 'associated-press', 'bbc-news', 'bbc-sport', 'blid', 'bloomberg', 'business-insider', 'cnbc', 'cnn', 'ign', 'mashable', 'hacker-news', 'mtv-news', 'reddit-r-all', 'the-hindu', 'the-next-web', 'wired-de', 'google-news', 'fortune', 'focus', 'financial-times', 'entertainment-weekly', 'espn', 'engadget', 'die-zeit'];
    function getNews(index, cb) {
      $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles',
        params: {
          source: source[index],
          apiKey: '6bdfe5da27f44077a59435fd8d432686'
        }
      }).then(function successCallback(response) {
        return cb(response);
      }, function errorCallback(response) {
        return cb(response);
      });
    }
    return {
      getNews: getNews
    };
  }])

  .controller('NewsCtrl', ['$scope', 'newService', function ($scope, newService) {
    var source = ['abc-news-au', 'arc-technica', 'associated-press', 'bbc-news', 'bbc-sport', 'blid', 'bloomberg', 'business-insider', 'cnbc', 'cnn', 'ign', 'mashable', 'hacker-news', 'mtv-news', 'reddit-r-all', 'the-hindu', 'the-next-web', 'wired-de', 'google-news', 'fortune', 'focus', 'financial-times', 'entertainment-weekly', 'espn', 'engadget', 'die-zeit'];
    $scope.currIndex = 0;

    $scope.articles = [];

    $scope.loadNews = function () {
      newService.getNews($scope.currIndex, function (response) {
        $scope.$broadcast('scroll.refreshComplete');
        if ($scope.currIndex === source.length) {
          $scope.currIndex = 0;
        } else {
          $scope.currIndex++;
        }
        $scope.articles = response.data.articles.concat($scope.articles);
        if ($scope.articles.length > 15) {
          $scope.articles.length = 15;
        } 
      });
    };

    $scope.loadNews();
      
      $scope.speakUp = function(query){
          var speakup = "Reading the headlines "+query;
        console.log(speakup);
        var msg = new SpeechSynthesisUtterance(speakup);
        window.speechSynthesis.speak(msg);  

      };

    $scope.doRefresh = function () {
      $scope.loadNews();
    };

  }])





.controller('loginCtrl', function($scope, $rootScope, $state) {

     $scope.userinformation = {
        userName: '',
        password: ''
    };
    
	ionic.Platform.ready(function(){

  	});

  	$scope.login = function() {
  		
  		if ($scope.userinformation.userName!=''
            &&  $scope.userinformation.password!=''){
        alert('value of username:'+$scope.userinformation.userName);
            $state.go('tab');
        }

  		else{
            
            alert('Enter the Inputs');
        }
  	}
    
    $scope.register = function() {
    
       $state.go('register');
        }
	
})




  .controller('AboutCtrl', function ($scope) {
    
  });


