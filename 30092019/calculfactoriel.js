function factorielle(n){
	//Compléter cette fonction
	return (n);
}

function calcul() {
	var numElem = document.querySelector("input[type='number']");
  var result = factorielle(numElem.value);
	showResult(result);
}

function showResult(result)
{
  var resultElem = document.getElementById("result");
  resultElem.textContent = result.toString();
}
