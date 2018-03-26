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
					wallet.getNewAddress(function(err, address) {
								if(err == null)
									console.log('Address: ', address);
								else	
									console.log(err);
					});
					
				}
				else	
					console.log(err);
			});