function card(){
    document.getElementById("team").classList.toggle("team-light");
    for(var i=1;i<4;i++)
      {
           document.getElementById("about-card"+i).classList.toggle("about-card-light");
           document.getElementById("title"+i).classList.toggle("title-light");
      }
}