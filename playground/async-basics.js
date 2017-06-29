/**
 * Created by root on 27/06/17.
 */
	console.log('Starting app');
	
		setTimeout( () => {
			console.log('Inside callback, 3 sec')
		}, 3000);
	
		setTimeout( () => {
			console.log('Inside of callback, 2 sec');
		}, 2000);
	
	console.log('Finishing app');
