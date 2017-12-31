const WebsocketClient = require('./lib/clients/websocket.js');
const fs = require('fs');

const fileName = new Date();

const websocket = new WebsocketClient(['BTC-USD', 'ETH-USD']);
websocket.on('message', data => { 
const eachLine = `${data.type},${data.order_id},${data.order_type},${data.size},${data.remaining_size},${data.price},${data.side},${data.reason},${data.client_oid},${data.product_id},${data.sequence},${data.time},\n`
 fs.appendFile(`./gdax_data_stream/${fileName}.txt`, eachLine,'ascii', (err) => {  
    if (err) {throw err;}
  });
});





