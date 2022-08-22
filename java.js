window.onload = function()
{
	const olr = document.getElementById('oneLineResult');
    
	document.getElementById('convert').onclick = () =>
  {
		if (olr.hasChildNodes()) { removeResult(); printResult(); }
		else 
    printResult();
	}
}

window.addEventListener('load', function(e)
{
  document.getElementById('copyBtn').onclick = (e) => { showPopup(e); copyAll(); }
});

function showPopup(e)
{
  const pop = document.getElementById('popUp');

  const move_left = e.pageX - 60;
  const move_top = e.pageY - 65;

  pop.style.left = move_left + 'px';
  pop.style.top = move_top + 'px';
  pop.style.position = 'absolute';
  pop.style.display = 'block';

  setTimeout(function() { pop.style.display='none'; }, 1200);
}

function printResult()
{
  const text_box = document.getElementById('inputText');

  const question = document.getElementById('useQuestion').checked;
  const exclamation = document.getElementById('useExclamation').checked;
  const comma = document.getElementById('useComma').checked;
  const enter = document.getElementById('useEnterTwice').checked;

  let lines;

  if (true == question && false == exclamation && false == comma) { lines = text_box.value.split(/(?<=\?)|(?<=\.)/); }
  else if (false == question && true == exclamation && false == comma) { lines = text_box.value.split(/(?<=\!)|(?<=\.)/); }
  else if (false == question && false == exclamation && true == comma) { lines = text_box.value.split(/(?<=\,)|(?<=\.)/); }
  else if (true == question && true == exclamation && false == comma) { lines = text_box.value.split(/(?<=\?)|(?<=\!)|(?<=\.)/); }
  else if (true == question && false == exclamation && true == comma) { lines = text_box.value.split(/(?<=\?)|(?<=\,)|(?<=\.)/); }
  else if (false == question && true == exclamation && true == comma) { lines = text_box.value.split(/(?<=\!)|(?<=\,)|(?<=\.)/); }
  else if (true == question && true == exclamation && true == comma) { lines = text_box.value.split(/(?<=\?)|(?<=\,)|(?<=\!)|(?<=\.)/); }
  else { lines = text_box.value.split(/(?<=\.)/); }

  let resultStr = "";
  if(true==enter) {for (let i = 0; i < lines.length; i++) { resultStr += '/desc ' + lines[i] + '\r' + '\r'; }}
  else { for (let i = 0; i < lines.length; i++) { resultStr += '/desc ' + lines[i] + '\r'; } }
  
  resultStr += "";

  const resBox = document.getElementById('result');
  
  resBox.innerHTML = resultStr;

  let resultStr2 = "";

  const one_line = document.getElementById('oneLineResult');

  for (let i = 0; i < lines.length; i++)
  {
    resultStr2 = '/desc ' + lines[i];

    const new_div = document.createElement('div');
    new_div.innerHTML = resultStr2;
    new_div.setAttribute('class', 'm-2 text-left cursor-pointer text-sm text-slate-500 border border-indigo-200 bg-indigo-50 rounded-sm m-auto py-2 px-5 leading-normal tracking-tighter');
    new_div.setAttribute('id', 'resultDiv');

    one_line.appendChild(new_div);
  }

  const copy = document.querySelectorAll('#resultDiv');

  for( let i = 0; i < copy.length; i++){
    copy[i].addEventListener("click",function(e){ showPopup(e); window.navigator.clipboard.writeText(copy[i].innerText); });
  }
}

function removeResult() {
  const pare = document.getElementById("oneLineResult");
  while (pare.hasChildNodes()) {
  pare.removeChild(pare.firstChild);
  }
}
function copyAll() {
	const result = document.getElementById("result");
	window.navigator.clipboard.writeText(result.value);
}
