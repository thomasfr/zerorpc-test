var zerorpc = require('zerorpc');

var server = new zerorpc.Server({

	call1: function (argument1, argument2, reply) {
		"use strict";
		console.log(argument1, argument2);
		reply(null, "my answer is " + new Date());
	},

	call2: function (data, reply) {
		"use strict";
		console.log("call2 called", data);
		reply(null, data);
	}

});

server.bind("tcp://0.0.0.0:4242");
server.on('error', function (error) {
	"use strict";
	console.error("RPC Server crashed: ", error);
});
