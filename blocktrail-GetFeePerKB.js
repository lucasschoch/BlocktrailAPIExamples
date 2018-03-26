blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "tBTC", testnet: false});

//gets specific transaction
result = client.feePerKB(function(err, result) {
    console.log(result);
});