var c=0;
function navg(){
    if(c==0)
    {
      document.getElementById('lg').src  = 'https://drive.google.com/file/d/1zi4colO0oyxJABzH9TxV15Fy5lobrHOQ/view?usp=sharing';
      c=1;
    }
    else{
     document.getElementById('lg').src  = 'https://drive.google.com/file/d/1kxBOUnJjjQ280oc9j4tlF4r1iMdJBsjc/view?usp=sharing';
     c=0;
    }
    document.getElementById("header").classList.toggle("header-light");
    for(var i=1;i<5;i++)
      {
           document.getElementById("dropbtn"+i).classList.toggle("dropbtn-light");
      }
}