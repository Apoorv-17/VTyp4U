var c=0;
function navg(){
    if(c==0)
    {
      document.getElementById('lg').src  = 'logolight.png';
      c=1;
    }
    else{
     document.getElementById('lg').src  = 'logobeta.png';
     c=0;
    }
    document.getElementById("header").classList.toggle("header-light");
    for(var i=1;i<5;i++)
      {
           document.getElementById("dropbtn"+i).classList.toggle("dropbtn-light");
      }
}