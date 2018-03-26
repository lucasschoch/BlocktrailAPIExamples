blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{apiKey: "YOURAPIKEY", 
		apiSecret: "YOURAPISECRET", 
		network: "BTC", testnet: false});

client.createNewWallet("mywalletfortest01", "PASSWORD",
    function(err, wallet, backupInfo) {
		if(err == null){
			console.log(wallet);
			console.log(backupInfo);
		}
		else
		{
			console.log(err);
		}
		
	});
