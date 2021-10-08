 function sayHello()
    {
      var user=document.getElementById("username").value;
      if(user == "")
      {
        //alert('enter your name');
        document.getElementById("ans").innerHTML='Enter your Name';
      }
      else
      {
        //alert('hello '+user);
        document.getElementById("ans").innerHTML='Hello '+user;
      }

      document.getElementById("username").value="";

    }

    //document.getElementById("clickbtn").onclick=sayHello;

 document.addEventListener('DOMContentLoaded',()=>{
      document.getElementById("clickbtn").onclick=sayHello;

 })

