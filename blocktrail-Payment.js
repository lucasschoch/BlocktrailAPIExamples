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
					value = blocktrail.toSatoshi(1.1);
					wallet.pay({'3JX6shyoVTQPHWNbxU7HRkg9EJ5X7DtC3p': value}, null, false, true, blocktrail.Wallet.FEE_STRATEGY_BASE_FEE,
						function(err, result) {
							if(err == null)
								console.log('result: ', result);
								else	
									console.log(err);
						});
					wallet.pay({'3JX6shyoVTQPHWNbxU7HRkg9EJ5X7DtC3p': value}, null, false, true, blocktrail.Wallet.FEE_STRATEGY_LOW_PRIORITY,
						function(err, result) {
							if(err == null)
								console.log('result: ', result);
							else	
								console.log(err);
						});
				}
				else	
					console.log(err);
});
	
	