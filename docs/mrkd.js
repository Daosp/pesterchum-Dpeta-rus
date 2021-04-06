function readTextFile(file)
{
	let url = new URL('/pesterchum-Dpeta-altservers-rus/'.file, 'https://daosp.github.io');
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", url, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				alert(allText);
			}
		}
	}
	rawFile.send(allText);
}