var zerorpc = require("zerorpc");

var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

client.on("error", function (error) {
	"use strict";
	console.error("RPC Client error: ", error);
});

client.invoke("call1", "foo", "bar", function (error, response, more) {
	"use strict";
	console.log("Reply from call1 ", arguments);
});

client.invoke("call2", {"foo": "bar", "one": 1}, function (error, response, more) {
	"use strict";
	console.log("Reply from call2 ", arguments);
});
