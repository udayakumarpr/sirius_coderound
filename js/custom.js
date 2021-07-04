$(document).ready(function(){
    makeTimer();
    weatherfun();
    featuredes();
    // validate();
    // nameerror_message.style.display = "none";
    // phonerror_message.style.display = "none";
    // emailerror_message.style.display = "none";
    // alertDiv_message.style.display = "none";
});
  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("10 July 2021 18:00:00 GMT+05:30");
    endTime = Date.parse(endTime) / 1000;
  
    var now = new Date();
    now = Date.parse(now) / 1000;
  
    var timeLeft = endTime - now;
  
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
  
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
  
    $("#days").html("<span>" + days + "</span>" + "<span>d</span>");
    $("#hours").html("<span>" + hours + "</span>" + "<span>h</span>");
    $("#minutes").html("<span>" + minutes + "</span>" + "<span>m</span>");
    $("#seconds").html("<span>" + seconds + "</span>" + "<span>s</span>");
  
  }
  
  setInterval(function () {
    makeTimer();
  }, 1000);


//   form validation 
function validate(){
    debugger;
    var name = document.getElementById("name").value;    
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var nameerror_message = document.getElementById("nameerror");
    var phonerror_message = document.getElementById("phonerror");
    var emailerror_message = document.getElementById("emailerror");
    var alertDiv_message = document.getElementById('alertDiv');

    nameerror_message.style.display = "none";
    phonerror_message.style.display = "none";
    emailerror_message.style.display = "none";

    alertDiv_message.style.display = "none";

    if(name.length < 5){
    
      nameerror_message.style.display = "block";
      return false;
    }
   
    if(isNaN(phone) || phone.length == 0){
    
        phonerror_message.style.display = "block";    
      return false;
    }

    if(phone.length > 10 || phone.length < 10){
        phonerror_message.innerHTML="Invalid Contact No";
        phonerror_message.style.display = "block"; 
        return false;
    }

    if(email.length < 6){
    
         emailerror_message.style.display = "block";
      return false;
    }
    if(email.indexOf("@") == -1)
    {
        phonerror_message.innerHTML="Invalid Email";
        phonerror_message.style.display = "block"; 
        return false;
    }

    

    alertDiv_message.style.display = "block";
    document.getElementById("name").value = '';    
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';
    return false;
    
  }

  function weatherfun(){
    var text;
    var flickerAPI = "https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576";
    $.getJSON( flickerAPI, {
      format: "json"
    })
      .done(function( data ) {
    console.log(data);
        $.each( data.result, function( i, item ) {
      // console.log(item);
      // console.log(item.city);
      // console.log(item.temp_Celsius);
      document.getElementById("weatherDomList").innerHTML += 
              '<div class="WeaterBox"><div class="WCity">'+item.city+'</div><div><img src="images/icon-party-sunny.svg"></div><div class="Wtemp_Celsius">'+item.temp_Celsius+'<span>&#176;</span></div></div>';
      

        });
      });     

  }


  function featuredes(){
    var text;
    var flickerAPI1 = "https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c";
    $.getJSON( flickerAPI1, {
      format: "json"
    })
      .done(function( data ) {
    console.log(data);
        $.each( data.result, function( i, item ) {
      // console.log(item);
      // console.log(item.city);
      // console.log(item.imageUrl);
      document.getElementById("featureddes").innerHTML +=               
              '<li><div class="fdimg"><img src="'+item.imageUrl+'"></div><div class="fd_cityname">'+item.city+'</div></li>'

        });
      });     

  }