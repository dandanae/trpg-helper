
//변환 버튼 누르면 실행
window.onload = function()
{
	const olr = document.getElementById('one_line_result');
    
	document.getElementById('convert').onclick = () =>
  {
		if (olr.hasChildNodes()) { remove_result(); print_result(); }
		else  print_result();
	}
}

//복사 버튼 누르면 실행, 팝업
window.addEventListener('load', function(e)
{
    document.getElementById('copy_btn').onclick = (e) => { pop_up(e); result_all_copy(); }
});

//팝업
function pop_up(e)
{
    const pop = document.getElementById('pop_up');

    const move_left = e.screenX - 60;
    const move_top = e.screenY - 65;

    pop.style.left = move_left + 'px';
    pop.style.top = move_top + 'px';
    pop.style.position = 'absolute';
    pop.style.display = 'block';

    setTimeout(function() { pop.style.display='none'; }, 1200);
}

//결과 출력
function print_result()
{
    const text_box = document.getElementById('input_text');

    const q = document.getElementById('use_question').checked;
    const e = document.getElementById('use_exclamation').checked;
    const c = document.getElementById('use_comma').checked;

    let lines;

    if (true == q && false == e && false == c) { lines = text_box.value.split(/(?<=\?)|(?<=\.)/); }
    else if (false == q && true == e && false == c) { lines = text_box.value.split(/(?<=\!)|(?<=\.)/); }
    else if (false == q && false == e && true == c) { lines = text_box.value.split(/(?<=\,)|(?<=\.)/); }
    else if (true == q && true == e && false == c) { lines = text_box.value.split(/(?<=\?)|(?<=\!)|(?<=\.)/); }
    else if (true == q && false == e && true == c) { lines = text_box.value.split(/(?<=\?)|(?<=\,)|(?<=\.)/); }
    else if (false == q && true == e && true == c) { lines = text_box.value.split(/(?<=\!)|(?<=\,)|(?<=\.)/); }
    else if (true == q && true == e && true == c) { lines = text_box.value.split(/(?<=\?)|(?<=\,)|(?<=\!)|(?<=\.)/); }
    else { lines = text_box.value.split(/(?<=\.)/); }

    let result_str = "";

    //한번에 출력
    for (let i = 0; i < lines.length; i++) { result_str += '/desc ' + lines[i] + '<br/>'; }

    result_str += "";

    const resBox = document.getElementById('result');
    
    resBox.innerHTML = result_str;

    let result_str2 = "";

    const one_line = document.getElementById('one_line_result');

    for (let i = 0; i < lines.length; i++)
    {
      result_str2 = '/desc ' + lines[i];

      const new_div = document.createElement('div');
      new_div.innerHTML = result_str2;
      new_div.setAttribute('class', 'result_div m-2 text-left cursor-pointer text-sm text-slate-500 border border-indigo-200 bg-indigo-50 rounded-sm m-auto py-2 px-5 leading-normal tracking-tighter');

      one_line.appendChild(new_div);
    }

    const copy = document.querySelectorAll('.result_div');

    for( let i = 0; i < copy.length; i++){
      copy[i].addEventListener("click",function(e){ pop_up(e); window.navigator.clipboard.writeText(copy[i].innerText); });
    }
}

function remove_result() {
    const pare = document.getElementById("one_line_result");
    while (pare.hasChildNodes()) {
		pare.removeChild(pare.firstChild);
    }
}
function result_all_copy() {
	const result = document.getElementById("result");
	window.navigator.clipboard.writeText(result.innerText);
}
