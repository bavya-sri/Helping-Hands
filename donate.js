function backButton(){

    document.getElementById("orphanageSelect").required = false;
    document.getElementById("donateUserName").required = false;
    document.getElementById("donateUserEmail").required = false;
    document.getElementById("donateAmount").required = false;
    document.getElementById("backBtnRef").setAttribute("href", "UserLogin.html");
    
}

function check()
{
    var c = document.getElementById("donateAnonCKB");
    if(c.checked)
    {
        document.getElementById("donateUserEmail").disabled = true;
        document.getElementById("donateUserEmail").placeholder = '';
        document.getElementById("donateUserName").placeholder='';
        document.getElementById("donateUserName").disabled = true;
    }
    else{
        document.getElementById("donateUserEmail").disabled = false;
        document.getElementById("donateUserEmail").placeholder = 'Enter your Email';
        document.getElementById("donateUserName").placeholder='Enter your Name';
        document.getElementById("donateUserName").disabled = false;
    }
}

function backButton1(){

    document.getElementById("appOrphanageSelect").required = false;
    document.getElementById("appUserName").required = false;
    document.getElementById("appUserEmail").required = false;
    document.getElementById("phoneNumber").required = false;
    document.getElementById("appDate").required = false;
    document.getElementById("backBtnRef").setAttribute("href", "UserLogin.html");
    
}
