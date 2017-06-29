/**
 * Created by root on 28/06/17.
 */
const request = require('request');

var geocodeAddress = ( address ) => {
		return new Promise( (resolve, reject ) => {
			var addressURI = encodeURIComponent( address );
			request({
					url:`https://maps.googleapis.com/maps/api/geocode/json?address=${  addressURI  }`,
					json:true
				},
				(error, response, body) => {
					if ( error ){
						reject('Unable to connect to Google Servers.');
					}else if( body.status === 'ZERO_RESULTS'){
						reject('Unable to find that address.');
					}else if (body.status === 'OK') {
						var location = body.results[0].geometry.location;
						resolve( {
							address :body.results[0].formatted_address,
							latitude: location.lat,
							longitud:location.lng
						});
					}
				}
			);
		});
}
geocodeAddress('19146').then(
	( location ) => { console.log(JSON.stringify( location, undefined, 2 ))},
	( errorMessage) => { console.log( errorMessage ); }
);
