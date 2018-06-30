var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
 
QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
})