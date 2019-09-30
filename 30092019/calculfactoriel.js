function factorielle(n){
  var r=1;
  for(i=1;i<=n;i++) {
    r=r*i;
  }
	return (r);
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
