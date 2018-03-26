blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK(
	{
	    apiKey: "YOURAPIKEY",
	    apiSecret: "YOURAPISECRET",
		network: "BTC", testnet: false});

			
client.initWallet('mywalletfortest01', 'mywalletfortest01',
			function(err, wallet) {
				if(err == null)
				{					
					//Get incoming and outgoing transactions
					wallet.transactions(function(err, result) {
								if(err == null)
									console.log('result: ', result);
								else	
									console.log(err);
					});					
				}
				else	
					console.log(err);
			});