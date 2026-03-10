
console.log("node.js global objects");
console.log(__filename);
console.log(__dirname);


setInterval(function () {
    console.log("Nodejs programming");
  }, 1000);


setTimeout(function () {
  console.log("setTimeout obj");
}, 1000);


var si=setInterval(function () {
  console.log("Nodejs programming");
}, 1000);

 setTimeout(() => {
  clearInterval(si);
}, 4000);



