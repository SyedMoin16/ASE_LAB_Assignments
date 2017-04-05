/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http,$window){
    $scope.insertData = function(){
        console.log($scope.formData.lname);
        console.log($scope.formData.fname);
        console.log($scope.formData.email);
        console.log($scope.formData.password);
        console.log($scope.formData.cpassword);
        var dataParams = {
            'fname' : $scope.fname,
            'lname' : $scope.lname,
            'email' : $scope.email,
            'pw' : $scope.pw
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });

            $window.location.href="index.html";

    };
});

var my = angular.module('app',[]);

my.controller('sign',function($scope,$http,$window) {
    $scope.validate = function () {
        var x=$http.get('http://127.0.0.1:8081/sign',{params: {name:$scope.em}});
        x.success(function (data) {
            if(data!=null) {
                if ($scope.em === data.email & $scope.pass === data.password) {
                    $window.location.href = "main.html"
                }
                else {
                    alert("Invalid login or password");
                }
            }
            if(data==null)
            {
                alert("Invalid login or password");
            }
        });

    };
});

var profile = angular.module('pf1',[]);

profile.controller('ab1',["$scope","$http","$window", function($scope,$http,$window) {
    $http.get('http://127.0.0.1:8081/profile').success(function (data) {

        $scope.dis={
            "fname":data.fname,
            "lname":data.lname,
            "email":data.email
        };
        console.log(dis);
    });
    $scope.update=function () {
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.put('http://127.0.0.1:8081/update',$scope.fdata).success(function (res,status, headers, config) {
            $scope.out=res;
        })


        $window.location.href="main.html";
    }
    $scope.remove=function () {

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.get('http://127.0.0.1:8081/remove').success(function (res,status, headers, config) {
            $scope.out=res;
        })


        $window.location.href="main.html";
    }


}])