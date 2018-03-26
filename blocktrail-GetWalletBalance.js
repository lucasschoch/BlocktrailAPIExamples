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
					wallet.getBalance(				
							function(err, confirmedBalance, unconfirmedBalance) {
								if(err == null)
								{	console.log('Balance: ', blocktrail.toBTC(confirmedBalance));
									console.log('Unconfirmed Balance: ', blocktrail.toBTC(unconfirmedBalance));
								}
								else	
									console.log(err);
							}
						
					);
					
				}
				else	
					console.log(err);
			});
		