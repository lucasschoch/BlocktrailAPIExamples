blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "tBTC", testnet: false});
		
client.address('2MwPPi9EqVoQ8NucxZip31UzfeDvcWL2KET', function(err, address) {
    if (err) {
        console.log(err);
        return;
    }
	else
		console.log(address);
});
		