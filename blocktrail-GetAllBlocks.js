blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "tBTC", testnet: false});

//gets all blocks
client.allBlocks(0, function(err, address) {
    if (err) {
        console.log(err);
        return;
    }
	else
		console.log(address);
});

		