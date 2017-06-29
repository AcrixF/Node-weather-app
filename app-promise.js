/**
 * Created by root on 27/06/17.
 */
 const yargs = require('yargs');
const axios = require('axios');

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
 
 var encodeAddress = encodeURIComponent( argv.address);
 var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${  encodeAddress  }`;
 
 axios.get(
 	geoCodeUrl
 ). then(
 	( response ) => {
 		if(response.data.status === 'ZERO_RESULTS'){
 			throw new Error('Unable to find the address...');
	    }
	    var apiKey = 'b150183a2035de1a3bd7b5d16b980ca6';
	    var lat = response.data.results[0].geometry.location.lat;
	    var lng = response.data.results[0].geometry.location.lng;
	    var weatherUrl = `https://api.darksky.net/forecast/${ apiKey }/${ lat },${ lng }`;
	    return axios.get( weatherUrl );
    }
 ).then( ( response) => {
 	    var temperature = response.data.currently.temperature;
 	    var apparentTemperature = response.data.currently.apparentTemperature;
	    console.log(`It is currently ${ temperature} but  it feels like ${ apparentTemperature }`);
	 })
	 .catch( error => {
 	if(error.code === 'ENOTFOUND'){
 		console.log('Unable to connect to API Server.');
    }else{
 		console.log( error.message );
    }
 });






