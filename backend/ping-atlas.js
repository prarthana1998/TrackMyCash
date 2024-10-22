const dns = require('dns');
const net = require('net');

const hostname = 'cluster0.lfm6v.mongodb.net';

dns.lookup(hostname, (err, address) => {
  if (err) {
    console.error('DNS lookup failed:', err);
    return;
  }

  console.log(`Resolved ${hostname} to ${address}`);

  const socket = new net.Socket();
  socket.setTimeout(5000);  // 5 second timeout

  socket.connect(27017, address, () => {
    console.log('Connected to server!');
    socket.destroy();
  });

  socket.on('error', (err) => {
    console.error('Connection error:', err);
  });

  socket.on('timeout', () => {
    console.error('Connection timed out');
    socket.destroy();
  });
});