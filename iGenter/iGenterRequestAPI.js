/**
 * Created by root on 28/06/17.
 */
const request = require('request');

const urliGenter = 'http://grupohit.net/igenter/api';

var loginData = {
 	login_email:'luis@gmail.com',
 	login_password:'123456'
};
var options = {
	method:'post',
	body: loginData,
	json: true,
	url: urliGenter + '/cv1/login',
	
};

request( options, (error,  response, body) => {
	if (error) {
		console.log(error);
	} else if (response.statusCode === 200){
		var keySession = body.key;
		
		/*
			console.log( keySession )
			
			var options = {
				method:'get',
				json: true,
				url: urliGenter + '/cv1/logout',
				headers: {
					'X-Authorization':keySession
				}
			};
			
			request( options, (error,  response, body) => {
				if (error){
					console.log(error);
				}else if (response.statusCode === 200){
					console.log( JSON.stringify( body , undefined, 2));
				}
			} )
			*/
		
	}
	
})