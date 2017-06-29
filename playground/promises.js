/**
 * Created by root on 28/06/17.
 */
var asyncAdd = (a, b ) => {
	return new Promise( (resolve, reject ) => {
		if (typeof a  === 'number' && typeof b === 'number'){
			resolve(a + b);
		}else{
			reject('No types match');
		}
	} , 1500);
};

asyncAdd( 9, 9). then(
	(result) => {console.log( result ); return asyncAdd( result, 12);}
).then(
	(result) => { console.log( result );}
).catch((superError) => {
	console.log('Super Error: ' + superError );
})

/*
var somePromise = new Promise((resolve, reject) => {
	
	setTimeout( () => {
		//resolve("It works!");
		reject('Unable to fulfill promise')
	}, 2500)
	
});
somePromise.then( message => {
	console.log('Success: ' + message);
}, errorMessage => {
	console.log('Error: ' + errorMessage);
})
*/