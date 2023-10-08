const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
  username: "disha",
  password: "disha123"
});


const topic9 = 'drones/#'
const topic10 = 'drones/short_dist/speed'
const topic11 = 'drones/+/battery'
const topic12 = 'drones/long_dist/longi-latitude'


client.on('connect', () => {
  console.log('Connected to MQTT broker');

  client.subscribe('drones/#', (err) => {
    if (!err) {
      console.log('Subscribed to all drone messages');
    } else {
      console.error('Data Subscription error:', err);
    }
  });

  client.subscribe('drones/short_dist/speed', (err) => {
    if (!err) {
      console.log('Subscribed to Short distance drone speeds');
    } else {
      console.error('Short distance Subscription error:', err);
    }
  });

  client.subscribe('drones/+/battery', (err) => {
    if (!err) {
      console.log('Subscribed to battery levels of all drones');
    } else {
      console.error('battery level Subscription error:', err);
    }
  });

  client.subscribe('drones/long_dist/longi-latitude', (err) => {
    if (!err) {
      console.log('Subscribed to latitude and longitude values of Long distance drones');
    } else {
      console.error('Lat/Long Subscription error:', err);
    }
  });

  client.on('message', (topic, message) => {
    console.log(`Received message on topic '${topic}': ${message.toString()}`);
    console.log("");
  });

});