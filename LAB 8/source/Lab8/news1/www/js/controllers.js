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

    $scope.doRefresh = function () {
      $scope.loadNews();
    };

  }])


.controller('loginCtrl', function($scope, $rootScope,$ionicPlatform, $state, $cordovaClipboard, $cordovaBatteryStatus) {
    
   
    //Battery Status Plugin
    $ionicPlatform.ready(function() {
        $rootScope.$on("$cordovaBatteryStatus:status", function(event, args) {
            if(args.isPlugged) {
                alert("Charging -> " + args.level + "%"+"IsPlugged->"+args.isPlugged);
            } else {
                alert("Battery -> " + args.level + "%"+"IsPlugged->"+args.isPlugged);
            }
        });
    });
    

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
   
    //Cardova Clipboard Plugin
    
    $scope.copyText = function(value){
        
          $cordovaClipboard
    .copy(value)
    .then(function () {
      // success
              alert('Copied Successfully');
    }, function () {
      // error
              
              alert('Copied failed');
    });

//  $cordovaClipboard
//    .paste()
//    .then(function (result) {
//      // success, use result
//      
//       alert('Pasted Successfully');
//    }, function () {
//      // error
//      alert('Paste failed');
//    });
//        
//        
    }
  
    
	
})



  .controller('registerCtrl', function ($scope, $cordovaDatePicker,$filter, $ionicPlatform) {
    
    
//     $scope.dob = {
//        date: ''
//        
//    };
    
    
    // DatePicker Plugin
    $ionicPlatform.ready(function(){
    $scope.showDatePicker = function(){
       var options = {
          date: new Date(),
          mode: 'date', // or 'time'
          minDate: new Date() - 10000,
          allowOldDates: true,
          allowFutureDates: false,
          doneButtonLabel: 'DONE',
          doneButtonColor: '#F2F3F4',
          cancelButtonLabel: 'CANCEL',
          cancelButtonColor: '#000000'
       };

       $cordovaDatePicker.show(options).then(function(date){
         var a=date;
        $scope.dob=$filter('date')(a, 'EEE, dd MMM yyyy');
           
        });
   };
 });
    
  });


