/**
 * Created by root on 27/06/17.
 */

var getUser = ( id, callback ) => {
	var user = {
		id: id,
		name:'Neoa',
	};
	
	setTimeout(() => { callback( user )}, 2000);
};

getUser( 12, function (userObject) {
	 console.log( userObject  );
})