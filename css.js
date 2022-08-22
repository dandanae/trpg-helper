function changeFont()
{
  const list = document.getElementsByName('font');
  const all=document.getElementById('all')
  let pos;

  const len = list.length;
  for (let i = 0; i < len; i++)
  {
    if(list[i].checked==true)
    {
      pos = i;
      break;
    }
  }

  if (0 == pos)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.setAttribute('class', 'gms');
    console.log(list.value);
  }
  else if (1 == pos)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.setAttribute('class', 'nx2');
    console.log(list.value);
  }
  else if (2 == pos)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.setAttribute('class', 'suit');
    console.log(list.value);
  }
  else if(3 == pos){
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    
  }
  else if(4 == pos)
  {
    alert("기능 준비 중");
  }
}

function changeLine()
{
  const line= document.getElementsByName('line');
  const spacer = document.getElementsByClassName('spacer');
  const all = document.getElementsByClassName('message');
  const len = line.length;
  let pos;
  for (let i = 0; i < len; i++)
  {
    if(line[i].checked == true)
    {
      pos = i;
      break;
    }
  }

  if(0 == pos)
  {
    for(let i = 0; i < 10; i++)
    {
      spacer[i].classList.add('hidden');
      all[i].classList.add('clean');
    }
  }
  else if(1 == pos)
  {
    for(let i = 0; i < 10; i++)
    {
      spacer[i].classList.remove('hidden');
      all[i].classList.remove('clean');
    }
  }
}

function changeRound()
{
  const avatar= document.getElementsByName('round');
  const pic = document.getElementsByClassName('avatar');
  const len = avatar.length;
  let pos;
  for (let i = 0; i < len; i++)
  {
    if(avatar[i].checked == true)
    {
      pos = i;
      break;
    }
  }

  if(0 == pos)
  {
    for(let i = 0; i < 10; i++)
    {
      pic[i].classList.add('round_pic');
    }
  }
  else if(1 == pos)
  {
    for(let i = 0; i < 10; i++)
    {
      pic[i].classList.remove('round_pic');
    }
  }
}
