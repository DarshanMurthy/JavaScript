let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	let isClean = true;
	if(isClean){
		resolve('Clean');
	} else{
		reject(new Error('not clean'));
	}
});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve)
}).catch(function(fromReject){
	console.log('the room is ' + fromReject);
})




let promiseToClean = new Promise(function(resolve,reject){});









