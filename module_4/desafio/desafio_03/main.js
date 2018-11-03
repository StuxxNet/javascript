var btnBuscar = document.querySelector('#app #pesquisar');
var userElement = document.querySelector('#app #user');
var listElement = document.querySelector('#app #repolist');

btnBuscar.onclick = function() {
	url = 'https://api.github.com/users/'+userElement.value+'/repos'
	serverCall(url);
}

function serverCall(url){
	var itemList = document.createElement('li');
	var itemText = document.createTextNode('Carregando!');
	itemList.appendChild(itemText);
	listElement.appendChild(itemList);
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
	listElement.innerHTML = '';
	for (repo of repolist){
		var itemList = document.createElement('li');
		var itemText = document.createTextNode(repo.name);
		itemList.appendChild(itemText);
		listElement.appendChild(itemList);
	}
}