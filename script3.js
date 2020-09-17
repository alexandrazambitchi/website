window.onload=function()
{
  alert("Hello");
  alert("Pagina cu bijuterii");
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
}
