const express = require("express");
const https = require("https")
const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=87a67fe279e7933c7b2d841ed4012140&unit=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            console.log(data);

            const weatherData = JSON.parse(data);
            console.log(weatherData);

            const temp = weatherData.main.temp;
            console.log("temperature = " + temp);

            const description = weatherData.weather[0].description
            console.log(description);
            res.write("<p>description of weather is </p>"+description);
            res.write("<h1>current temperature in london is " +temp+" degree conscious </h1>");
            res.send();
        });
    });
});


app.listen(3000, function () {
    console.log("server is running on port 3000");
});