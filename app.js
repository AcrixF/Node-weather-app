/**
 * Created by root on 27/06/17.
 */
 const request = require('request');
 const yargs = require('yargs');
 const geocode = require( './geocode/geocode');
const weather = require('./weather/weather');

 const argv = yargs
	 .options({
		a:{
				demand:true,
				alias : 'address',
				describe: 'Address to fetch weather for...',
				string: true
			}
	 })
	 .help()
	 .alias('help','h')
	 .argv;


geocode.geocodeAddress( argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}else {
		console.log('Direccion: ' + results.address);
		weather.getWeather(results.latitude, results.longitud, (errorMessage, result) => {
			if( errorMessage) {
				console.log(errorMessage);
			}else{
				console.log(`It is currently ${ weather.changinTo( "C", result.temperature) }°. but it feels like ${ weather.changinTo("C",result.apparentTemperature) }°`)
			}
		});
	}
});





