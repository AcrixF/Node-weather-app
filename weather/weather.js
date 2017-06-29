/**
 * Created by root on 28/06/17.
 */
const request = require('request');

var apiKey = 'b150183a2035de1a3bd7b5d16b980ca6';

var getWeather = (lat, lng, callback ) => {
	request({
			url: `https://api.darksky.net/forecast/${ apiKey }/${ lat },${ lng }`,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				});
			} else {
				callback('Unable to fetch weather.');
			}
		}
	);
}

var changinTo = ( To, grados) => {
	var temp = To==="C" ? (grados - 32) *  (5/9): ( grados * (5/9)) + 32;
	return temp.toFixed( 2 );
}

module.exports.getWeather = getWeather;
module.exports.changinTo = changinTo ;