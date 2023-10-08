const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
    username: "disha",
    password: "disha123"
});


const topic1 = 'drones/short_dist/altitude'
const topic2 = 'drones/short_dist/speed'
const topic3 = 'drones/short_dist/battery'
const topic4 = 'drones/short_dist/longi-latitude'

const topic5 = 'drones/long_dist/altitude'
const topic6 = 'drones/long_dist/speed'
const topic7 = 'drones/long_dist/battery'
const topic8 = 'drones/long_dist/longi-latitude'




client.on("connect", function () {
    setInterval(function () {
        var short_alt = Math.floor(Math.random() * 1001);
        console.log(short_alt);
        client.publish(topic1, ' ' + short_alt.toString() + "ft.")

        var short_speed = Math.floor(Math.random() * 301);
        console.log(short_speed);
        client.publish(topic2, ' ' + short_speed.toString() + "mph")

        var short_batt = Math.floor(Math.random() * 101);
        console.log(short_batt);
        client.publish(topic3, ' ' + short_batt.toString() + "%")

        var short_longi = Math.random() * 50;
        console.log(short_longi);
        client.publish(topic4, ' ' + short_longi.toString() + " °")

        console.log(" "); 

        var long_alt = Math.floor(Math.random() * 1001);
        console.log(long_alt);
        client.publish(topic5, ' ' + long_alt.toString() + "ft.")

        var long_speed = Math.floor(Math.random() * 301);
        console.log(long_speed);
        client.publish(topic6, ' ' + long_speed.toString() + "mph")

        var long_batt = Math.floor(Math.random() * 101);
        console.log(long_batt);
        client.publish(topic7, ' ' + long_batt.toString() + "%")

        var long_longi = Math.random() * 50;
        console.log(long_longi);
        client.publish(topic8, ' ' + long_longi.toString() + " °")

        console.log(" ");

    }, 5000);
})