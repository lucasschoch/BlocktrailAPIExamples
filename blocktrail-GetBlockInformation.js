blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "tBTC", testnet: false});

//gets the index 0 block 
client.block(0, function(err, address) {
    if (err) {
        console.log(err);
        return;
    }
	else
		console.log(address);
});

//Get block by hash
client.block('000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943', function(err, address) {
    if (err) {
        console.log(err);
        return;
    }
	else
		console.log(address);
});
		