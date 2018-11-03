function checaIdade(idade){
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			return idade >= 18 ? resolve() : reject();
			}, 2000);
	});
}

checaIdade(18)
	.then(function(){
		console.log('Maior de 18 anos');
	})
	.catch(function(){
		console.log('Menor de 18 anos');
	});