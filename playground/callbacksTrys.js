/**
 * Created by root on 28/06/17.
 */
const request = require('request');
const fs = request('fs');

request.get('https://www.google.com.mx/search?q=Rayuela&source=lnms&tbm=isch&sa=X&ved=0ahUKEwipsrCR-eDUAhUKRCYKHb54AjoQ_AUIBigB&biw=1680&bih=887#imgrc=R_eFdYvFWg8SSM:')
	.on('error', error => {
		console.log( errro );
	})
	.pipe(fs.createWriteStream('rayuela.png'));
