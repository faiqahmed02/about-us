// menu
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// popup
// $(window).load(function(){
//         setTimeout(function() {
//                 $('#myModal').modal('show');
//         }, 5000);
//             });


// sidenavbar   
  function openNav() {
    // alert(document.getElementById("mySidenav").style.width);
    if(document.getElementById("mySidenav").style.width == "350px"){
      document.getElementById("mySidenav").style.width = "0";
    }
    else{
      document.getElementById("mySidenav").style.width = "350px";
    }
    
  }

  function closeNav() {
       document.getElementById("mySidenav").style.width = "0";
  }



  let addAnimation = false;
// On the last element in the page, add a listener to remove
// ---> animation-class when animation ends
if (element.classList[1] == "FLASH") {
  g = element;
  element.addEventListener("animationend", e => {
    element.classList.remove(animatedClassName);
  });
  addAnimation = true;
}
      


$(document).ready(function() {
//toggle the component with class accordion_body
$(".accordion_head").click(function() {
  if ($('.accordion_body').is(':visible')) {
    $(".accordion_body").slideUp(300);
    $(".plusminus").text('+');
  }
  if ($(this).next(".accordion_body").is(':visible')) {
    $(this).next(".accordion_body").slideUp(300);
    $(this).children(".plusminus").text('+');
  } else {
    $(this).next(".accordion_body").slideDown(300);
    $(this).children(".plusminus").text('-');
  }
});
});

/* owl review*/







// counter
$('.counter').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 5000,
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});


// captcha
function checkform0(theform){
var why = "";
if(theform.CaptchaInput0.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput0.value != ""){
if(ValidCaptcha(theform.CaptchaInput2.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}
var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';
var code = a + b + c + d + e;
document.getElementById("txtCaptcha0").value = code;
document.getElementById("CaptchaDiv0").innerHTML = code;
// Validate input against the generated number
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha0').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput0').value);
if (str1 == str2){
return true;
}else{
return false;
}
}
function removeSpaces(string){
return string.split(' ').join('');
}




// validation
  function Validate_email(event) {
      var regex = new RegExp("^[a-z0-9.@_-]");
      var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
          event.preventDefault();
          return false;
      }
  }
  function Validate_name(event) {
      var regex = new RegExp("^[a-zA-Z]");
      var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
          event.preventDefault();
          return false;
      }
  }
  function Validate_number(event) {
      var regex = new RegExp("^[0-9]");
      var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
          event.preventDefault();
          return false;
      }
  }
  function Validate_message(event) {
      var regex = new RegExp("^[a-zA-Z0-9 ]");
      var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
          event.preventDefault();
          return false;
      }
  }

  function order_brief(packages,amount){
  $(".pop_pkg").val(packages);
  $(".pop_price").val(amount);
}
