window.onload=function()
{
  alert("Hello");
  var car=document.getElementById("mouse");

  var x=document.getElementById("move");
  var s=getComputedStyle(x, null);
  document.body.onmousemove = function(e1)
  {
    car.style.left=e1.pageX+"px";
    car.style.top=e1.pageY+"px";
  }
  x.style.left=s.left;
  document.body.onkeydown=function(e2)
  {
    var k=e2.key;
    if(k=="ArrowRight")
      x.style.left=parseInt(x.style.left)+10+"px";
    if(k=="ArrowLeft")
      x.style.left=parseInt(x.style.left)-10+"px";
  }

  var buton = document.getElementById("rnd");
  var box= document.getElementById("box");
  var str = "Incaltaminte, Bijuterii, Bijuterii";
  box.innerHTML=str;
  var txt=str.replace("Bijuterii", "Genti");
  buton.onclick = function(){
    box.innerHTML=txt;
  }

  var button = document.getElementById("button");
  var box2= document.getElementById("tagName");
  var c;
  button.onclick = function(){
    var color=document.getElementsByName("color");
    for (var i=0;i<color.length;i++)
    {
      if(color[i].checked == true)
        {
          c=color[i].value;
        }
    }
    const elem = document.querySelectorAll(box2.value);
    for(var i=0;i<elem.length;i++)
      elem[i].style.color=c;
  }

  var bd=document.getElementsByTagName("body");
  var d=document.getElementsByTagName("div");
  var p=document.getElementsByTagName("p");

  bd[0].addEventListener("click", function(){alert(this)}, true);
  d[0].addEventListener("click", function(){alert(this)});
  p[0].addEventListener("click", function(){alert(this)});

  var parInt=document.getElementById("rel");
  parInt.onclick=function()
  {
    var w = window.innerWidth;
    S=window.getComputedStyle(parInt, null);
    var myInt=setInterval(loop, 2000, 50);
    function loop(param1)
    {
      if(parseInt(S.left)+param1<parseInt(w)-parseInt(S.width))
        parInt.style.left=parseInt(S.left)+param1+"px";
      else
        clearInterval(myInt);
    }
  }

  var paragr=document.getElementsByTagName("p");
  for(let i=0;i<paragr.length;i++)
  {
    setTimeout(function(){alert(i)});
  }

  var a=document.getElementById("mk")
  a.onclick=function () {
    d=new Date()
    ojs={data: d, adresa: a.href}
    localStorage.setItem("dataAcc",JSON.stringify(ojs))
  }
  a.onmouseover=function () {
    var s= localStorage.getItem("dataAcc")
    if(s)
      a.innerHTML=JSON.parse(s).data
  }
  a.onmouseout=function () {
    a.innerHTML=a.name
  }

  document.getElementById("map").addEventListener("click", function(event){
  event.preventDefault()
});

  var d1=document.getElementById("div1");
  var d2=document.getElementById("div2");
  d2.onclick=function(){
    alert("Yeezy");
  }

  d1.onclick=function(event){
    alert("Adidas");
    if (document.getElementById("check").checked) {
      event.stopPropagation();
    }
  }

  var close=document.getElementsByClassName("closebtn");
  close[0].onclick=function() {
      this.parentElement.style.display = 'none';
  }

  var child=document.getElementById("fontChild");
  child.onclick=function() {
    var c = document.body.children;
    var i;
    for (i of c) {
      if(i.id == "gasit")
        i.style.fontSize="25px";
    }
  }

  /*var extra=document.getElementById("btnNode");
  extra.onclick=function(){
    var http=require('http')
    var server=http.createServer(
      (function(request,response){
        console.log("Am primit o cerere..");
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end('<html><body><h1>Pagina in constructie</h1></body></html>');}));
        server.listen(7000);
        console.log ('Serverul creat asteapta cereri la http://localhost:7000/');
  }*/
}
