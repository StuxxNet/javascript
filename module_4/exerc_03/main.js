axios.get('https://api.github.com/users/stuxxnet')
	.then(function(response){
		console.log(response);
	})
	.catch(function(error){
		console.warn(error);
	});