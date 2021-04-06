function readTextFile(file)
{
	let url = new URL('/pesterchum-Dpeta-altservers-rus/'.file, 'https://daosp.github.io');
	let xhr = new XMLHttpRequest();

	xhr.open('GET', URL);

	xhr.responseType = 'text';

	xhr.send();

	// тело ответа {"сообщение": "Привет, мир!"}
	xhr.onload = function() {
	  let responseObj = xhr.response;
	  alert(responseObj.message); // Привет, мир!
	};
	rawFile.send(responseObj.message);
}