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

