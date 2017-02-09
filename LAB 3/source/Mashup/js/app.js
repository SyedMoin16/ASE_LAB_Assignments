/**
 * Created by syedm on 06-02-2017.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {

        $scope.getVenues = function () {

            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (searchQuery != null && searchQuery != "") {
                //This is the API that gives the information from Google knowledge API.
                var handler = $http.get("https://kgsearch.googleapis.com/v1/entities:search?query="+searchQuery+"&key=AIzaSyAmhclBRoPtcSkHh7BLhYXx92PHqfRSoaw&limit=1&indent=True");
                handler.success(function (data) {

                    if (data != null) {

                            $scope.searchList = {
                                "name": data.itemListElement[0].result.name,
                                "id": data.itemListElement[0].result.id,
                                "description": data.itemListElement[0].result.description,
                                "full_descrption": data.itemListElement[0].result.detailedDescription.articleBody,
                                "url": data.itemListElement[0].result.detailedDescription.url,
                                "image": data.itemListElement[0].result.image.contentUrl

                            };document.getElementById('SearchList').style.display = 'block';

                    }

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
        $scope.getReviews = function (desc) {
            if (desc != null) {

                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8" +
                            "&outputMode=json&text="+desc);
                        callback.success(function (data) {
                            if(data!=null)
                            {
                                $scope.ReviewWithSentiment = {
                                    "sentiment":data.docSentiment.type,
                                    "score":data.docSentiment.score  };
                                document.getElementById('ReviewList').style.display = 'block';
                            }
                        })
                }
                handler.error(function (result) {
                    alert("There was some error processing your request. Please try after some time.")
                })
            }

        $scope.record = function (x) {
            responsiveVoice.speak(x);


        }



    });

