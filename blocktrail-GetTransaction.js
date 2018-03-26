blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "tBTC", testnet: false});

//gets specific transaction
client.transaction('5846eab90279ab67d4cce990291af8fca2f53857f7c9c78a1cc01c4d5a991759', function(err, address) {
    if (err) {
        console.log(err);
        return;
    }
	else
		console.log(address);
});

		