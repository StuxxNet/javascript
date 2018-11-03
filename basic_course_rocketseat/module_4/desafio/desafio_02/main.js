var btnBuscar = document.querySelector('#app #pesquisar');
var usernameText = document.querySelector('#app #user');
var listText = document.querySelector('#app #repolist');

btnBuscar.onclick = function() {
	url = 'https://api.github.com/users/'+usernameText.value+'/repos'
	serverCall(url);
}

function serverCall(url){
	sendRequest(url)
		.then(function(response) {
			printRepos(response);
		})
		.catch(function(error) {
			console.warn(error);
		});
}

function sendRequest(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET',url);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4){
				if (xhr.status == 200){
					resolve(JSON.parse(xhr.responseText));
				}
				else{
					reject('Request error');
				}
			}
		}
	});
}

function printRepos(repolist){
	for (repo of repolist){
		var itemList = document.createElement('li');
		var itemText = document.createTextNode(repo.name);
		itemList.appendChild(itemText);
		listText.appendChild(itemList);
	}
}