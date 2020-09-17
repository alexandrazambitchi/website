window.onload=function()
{
  alert("Hello");
  var poza=document.getElementById("imgsc");
  poza.onclick=function() {
    poza.src="genti.jpg";
  }
  var g=document.getElementById("geanta");
  g.onclick=function()
  {
    var i=document.createElement("img");
    i.src="birkin.jpg";
    i.style.width="500px";
    i.style.height="auto";
    document.body.appendChild(i);
    i.onclick=function()
    {
      i.remove();
    }
  }
  var g=document.getElementById("pantof");
  g.onclick=function()
  {
    var i=document.createElement("img");
    i.src="yeezy.jpg";
    i.style.width="500px";
    i.style.height="auto";
    document.body.appendChild(i);
    i.onclick=function()
    {
      i.remove();
    }
  }
  var g=document.getElementById("bijuterie");
  g.onclick=function()
  {
    var i=document.createElement("img");
    i.src="inel.jpg";
    i.style.width="500px";
    i.style.height="auto";
    document.body.appendChild(i);
    i.onclick=function()
    {
      i.remove();
    }
  }
  var m=document.querySelectorAll("tr:nth-of-type(2n)");
  for(j=0;j<m.length;j++)
    m[j].style.color="#000000";

  var mm=document.querySelectorAll("tr:nth-of-type(2n+1)");
  for(j=0;j<mm.length;j++)
      mm[j].style.color="#f0f7ee";

  var mybutton = document.getElementById("myBtn");
  window.onscroll = function()
  {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  mybutton.onclick=function()
  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  var titlu = document.getElementsByTagName("h3");
  for(var i=0;i<titlu.length;i++)
    titlu[i].style.color="#c08497";
  var item=document.getElementById("myElem");
  item.onclick=function()
  {
    item.parentNode.removeChild(item);
  }
  var colorat = document.getElementsByClassName('sursa')
  for(var i=0;i<colorat.length;i++)
    colorat[i].style.color="#c08497";

  var button = document.getElementById("btnm");
  button.onclick = function(){
    var elem=document.getElementsByClassName("artBtn")
    var cul=["#c08497", "#f0f7ee", "#000000", "#e6b3cc", "#b0d0d3"];
    cul.push("#654c4f")
    var rand=Math.floor(Math.random()*(cul.length))
    for(let i=0;i<elem.length;i++)
      elem[i].style.color=cul[rand];
  }

  var data=document.getElementById("Data")
  data.onclick=function startTime() {
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dataAzi').innerHTML = date + " " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  var obj=document.getElementById("ob");
  obj.onclick=function() {
      obj.className += " first";
      setTimeout(function(){obj.className += " second"}, 4000);
      document.getElementById("thirdp").classList.add("third");
  }
}
