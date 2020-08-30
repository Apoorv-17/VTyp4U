var c=0;
function navg(){
    if(c==0)
    {
      document.getElementById('lg').src  = 'https://lh3.googleusercontent.com/0f27k6eG9bTve9x_RVJVs1gW86p6YrtYtvNitWem3C79mE0q2L13RnFzuuScxGe97qInbTYKmHbW0t-7f3MMl2sQjsZ05eA3ru5FU3vREsWj5Tt_7kZluQk3-yrrCIjTAwLzvg4GYA';
      c=1;
    }
    else{
     document.getElementById('lg').src  = 'https://lh3.googleusercontent.com/1gDPitodvW9cXzwpFvQBH1r3nd3QP80NU-XEtMQdCRNejbKZT_T_JOsX5MgeOX5moJfwHNtvBkgMCHgcCH1hhslaQv6kKavyFDVZBTpc_aWJEIxPODWI1DhRx975M_TaKDJ4VtHuhQ';
     c=0;
    }
    document.getElementById("header").classList.toggle("header-light");
    for(var i=1;i<5;i++)
      {
           document.getElementById("dropbtn"+i).classList.toggle("dropbtn-light");
      }
}