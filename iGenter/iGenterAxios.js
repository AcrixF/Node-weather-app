/**
 * Created by root on 29/06/17.
 */
const axios = require('axios');

var urliGenter = 'http://grupohit.net/igenter/api';
var urlLoggin = '/cv1/login';

function  infoEmp ()  {
	this.compania,
	this.puesto,
	this.rfc,
	this.imss
}

function Evento ( evento_uid, evento_nom){
	this.evento_uid = evento_uid,
	this.evento_nom = evento_nom
}

function Dia (){
	this.dia;
	this.dia_nom;
	this.eventosxDia = new Array();
}

function  Tiempo( evento_uid, tiempo) {
	this.evento_uid= evento_uid;
	this.tiempo = tiempo;
}

axios.post(
	urliGenter + urlLoggin,
	{
		login_email:'kar_520@hotmail.com',
		login_password:'qa'
	}
).then( ( response ) => {
	if(response.data.msg !== 'ok'){
	 throw new Error( JSON.stringify( {code: response.status,  msg: response.data.msg  }, undefined, 2));
	}
	var tokenKey = response.data.key;
	var urlPerfil = '/cv1/horario';
	
	axios({
		method: 'get',
		baseURL : urliGenter + urlPerfil,
		headers: {
			'X-Authorization': tokenKey
		}
	}).then( (response ) => {
		
		//console.log(response.data);
		var horario = response.data.data.eventosTurno.eventos.map( eve =>  {
			return new Evento( eve.evento_nom, eve.evento_uid);
		} );
		var eventos = response.data.data.eventosTurno.horario.map( dia => {
			  d = new Dia();
			  d.dia = dia.dia;
			  d.dia_nom = dia.dia_nom;
			  d.eventosxDia = dia.eventosxDia.map( t => {
			  	 return time = new Tiempo( t.evento_uid, t.tiempo);
			  })
			return d;
		});
		
		
		horario.forEach ( dia => console.log( dia ));
		
		eventos.forEach( e => console.log( e ));
		
		/*
		 infoEmp.compania = response.data.info.compania;
		 infoEmp.puesto = response.data.info.puesto;
		 infoEmp.rfc = response.data.info.rfc;
		 infoEmp.imss = response.data.info.imss;
		 
		 console.log(JSON.stringify( infoEmp, undefined, 2 ));
		 */
		 
	}).catch( error => {
		console.log( error )
	});
	
}).catch( ( error ) => {
	console.log(  error );
});


