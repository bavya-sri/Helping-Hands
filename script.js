function check()
{
    var c = document.getElementById("donateAnonCKB");
    if(c.checked)
    {
        document.getElementById("userEmail").disabled = true;
        document.getElementById("userEmail").placeholder = '';
        document.getElementById("userName").placeholder='';
        document.getElementById("userName").disabled = true;
    }
    else{
        document.getElementById("userEmail").disabled = false;
        document.getElementById("userEmail").placeholder = 'Enter your Email';
        document.getElementById("userName").placeholder='Enter your Name';
        document.getElementById("userName").disabled = false;
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

