Coloris
({
  el: '.coloris',
  theme: 'polaroid',
  themeMode: 'light', // light, dark, auto
  swatches: [
    '#FAD4D4',
    '#FCECDD',
    '#FFF4CF',
    '#EFEAD8',
    '#DBDFFD',
    '#E9D5DA',
    
    
    '#EB4747',
    '#FF6701',
    '#FAC213',
    '#5F7161',
    '#646FD4',
    '#4D4C7D',
    ],
    format: 'hex',
});

function changeFont()
{
  const value = document.querySelector('input[type=radio][name=font]:checked').value;
  const all = document.getElementById('all')
  console.log(value);

  if (1 == value)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.classList.add('class', 'gms');
  }
  else if (2 == value)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.classList.add('class', 'nx2');
  }
  else if (3 == value)
  {
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
    all.classList.add('class', 'suit');
  }
  else if(4 == value){
    all.classList.remove('gms');
    all.classList.remove('nx2');
    all.classList.remove('suit');
  }
  else if(5 == value)
  {
    alert("기능 준비 중");
  }
}

function changeLine()
{
  const value = document.querySelector('input[type=radio][name=line]:checked').value;
  const spacer = document.querySelectorAll('.spacer');
  const all = document.querySelectorAll('.message');

  if(1 == value)
  {
    for(let i in spacer)
    {
      spacer[i].classList.add('hidden');
      all[i].classList.add('clean');
    }
  }
  else if(2 == value)
  {
    for(let i in spacer)
    {
      spacer[i].classList.remove('hidden');
      all[i].classList.remove('clean');
    }
  }
}

function changeRound()
{
  const value = document.querySelector('input[type=radio][name=avatar]:checked').value;
  const pic = document.querySelectorAll('.avatar');

  if(1 == value)
  {
    for(let i in pic)
    {
      pic[i].classList.add('rounded-full');
      pic[i].classList.add('overflow-hidden');
    }
  }
  else if(2 == value)
  {
    for(let i in pic)
    {
      pic[i].classList.remove('rounded-full');
      pic[i].classList.remove('overflow-hidden');
    }
  }
}

function changeItalic()
{
  const value = document.querySelector('input[type=radio][name=setItalic]:checked').value;
  const desc = document.querySelectorAll('.desc');

  if(1 == value)
  {
    for(let i in desc)
    {
      desc[i].classList.add('not-italic');
    }
  }
  else if(2 == value)
  {
    for(let i in desc)
    {
      desc[i].classList.remove('not-italic');
    }
  }
}

function changeBold()
{
  const value = document.querySelector('input[type=radio][name=setBold]:checked').value;
  const desc = document.querySelectorAll('.desc');

  if(1 == value)
  {
    for(let i in desc)
    {
      desc[i].classList.add('font-normal');
    }
  }
  else if(2 == value)
  {
    for(let i in desc)
    {
      desc[i].classList.remove('font-normal');
    }
  }
}

function changeMyColor()
{
  const value = document.getElementById('mColor').value;
  const by = document.querySelectorAll('.by');
  

  for(let i in by)
  {
    by[i].style.setProperty('color', value);
  }
}

function changeBgColor()
{
  const value = document.getElementById('bgColor').value;
  const you = document.querySelectorAll('.you');
  

  for(let i in you)
  {
    you[i].style.setProperty('background-color', value);
  }
}

function confirm()
{
  const font = document.querySelector('input[type=radio][name=font]:checked').value;
  const line = document.querySelector('input[type=radio][name=line]:checked').value;
  const avatar = document.querySelector('input[type=radio][name=avatar]:checked').value;
  const setItalic = document.querySelector('input[type=radio][name=setItalic]:checked').value;
  const setBold = document.querySelector('input[type=radio][name=setBold]:checked').value;
  const mColor = document.getElementById('mColor').value;
  const bgColor = document.getElementById('bgColor').value;

  let result;

  if(1 == font)
  {
    result = "/* 지마켓 산스 */" + '\n' + "@font-face { font-family: 'GmarketSansMedium'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff'); font-weight: normal; ont-style: normal;}" + '\n' + '\n' + "/*전체 폰트 설정*/" + '\n' +"* { font-family: 'GmarketSansMedium'; }" + '\n' + '\n';
  }
  else if(2 == font)
  {
    result = "/* 넥슨 Lv.2 고딕 */" + '\n' +"@font-face { font-family: 'NEXON Lv2 Gothic'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff'); font-weight: normal; font-style: normal; }" + '\n' + '\n' + "/*전체 폰트 설정*/" + '\n' +"* { font-family: 'NEXON Lv2 Gothic'; }" + '\n' + '\n';
  }
  else if(3 == font)
  {
    result = "/* 수트 */" + '\n' + "@font-face { font-family: 'SUIT-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2'); font-weight: normal; font-style: normal; }" + '\n' + '\n' + "/*전체 폰트 설정*/" + '\n' + "* { font-family: 'SUIT-Regular'; }" + '\n' + '\n';
  }

  if(1 == line)
  {
    result += "/* 선 지우기 */" + '\n' + ".textchatcontainer .desc .spacer { display: none; }" + '\n' + ".textchatcontainer .general .spacer { background-color: #00ff0000; }" + '\n' + ".textchatcontainer .general.you .spacer { background-color: #00ff0000; }" + '\n' + ".textchatcontainer .desc { padding-left: 15px; padding-top: 8px; padding-bottom: 8px; line-height: 1.1em; }" + '\n' + '\n';
  }

  if(1 == avatar)
  {
    result += "/* 프로필 둥글개 */" + '\n' + ".textchatcontainer .avatar { border-radius: 70% ; overflow: hidden;}" + '\n' + '\n';
  }

  if(1 == setItalic)
  {
    result += "/* 본문 기울기 빼기 */" + '\n' + ".textchatcontainer .desc { font-style: normal; }" + '\n' + '\n';
  }

  if(1 == setBold)
  {
    result += "/* 본문 굵기 보통 */" + '\n' + ".textchatcontainer .desc { font-weight: normal; }" + '\n' + '\n';
  }

  if('#333333' != mColor)
  {
    result += "/* 이름 글씨 색 */" + '\n' + ".by { color: " + mColor + "; }" + '\n' + '\n';
  }

  if('#d3e5f5' != bgColor)
  {
    result += "/* 채팅 배경색 */" + '\n' + ".textchatcontainer .general.you { background-color: " + bgColor + "; }" + '\n' + '\n';
  }

  const resBox = document.getElementById('result');
  resBox.innerText = result;
}
