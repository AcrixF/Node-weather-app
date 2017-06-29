/**
 * Created by root on 27/06/17.
 */

const request = require('request');

var geocodeAddress = ( address , callback) =>  {
	var addressURI = encodeURIComponent( address );
	
	
	request({
			url:`https://maps.googleapis.com/maps/api/geocode/json?address=${  addressURI  }`,
			json:true
		},
		(error, response, body) => {
			if ( error ){
				callback('Unable to connect to Google Servers.');
			}else if( body.status === 'ZERO_RESULTS'){
				callback('Unable to find that address.');
			}else if (body.status === 'OK') {
				var location = body.results[0].geometry.location;
				callback(undefined, {
					address :body.results[0].formatted_address,
					latitude: location.lat,
					longitud:location.lng
				});
			}
		}
	);
	
}

module.exports.geocodeAddress = geocodeAddress;
