/**
 * Created by syedm on 3/17/2017.
 */
var express = require('express');
var app = express();
var request = require('request');
app.get('/getdata/:searchQuery', function (req, res) {
    var result = {
        'search_details': [],
    };

    request('https://kgsearch.googleapis.com/v1/entities:search?query=' + req.params.searchQuery +
        '&key=AIzaSyAmhclBRoPtcSkHh7BLhYXx92PHqfRSoaw&limit=1&indent=True', function (error, response, body) {
        if (error) {
            return console.log('Error:', error);
        }

        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        var detailed_description = body.itemListElement[0].result;
        var desc = body.itemListElement[0].result.detailedDescription.articleBody;

        request('http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment' +
            '?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8' +
            '&outputMode=json&text=' + desc, function (error, response, body1) {
            if (error) {
                return console.log('Error:', error);
            }

            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode);
            }
            body1 = JSON.parse(body1);
            var senti_type = body1.docSentiment.type;
            var senti_score = body1.docSentiment.score;

            result.search_details.push({
                "google_api": detailed_description,
                "sentiment_type": senti_type,
                "sentiment_score": senti_score
            });

            res.contentType('application/json');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.write(JSON.stringify(result));
            res.end();
        });


        /*result.food_details.push(food_values);

         res.contentType('application/json');
         res.header("Access-Control-Allow-Origin", "*");
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
         res.write(JSON.stringify(food_values));
         res.end();*/

    });
    console.log(result);
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Application listening at http://%s:%s", host, port)
});