function onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("dislay","block");
    $("apic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
}
function signOut()
{
    var auth2= gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        alert("you have been successfully signed out");

        $(".gsignin2").css("display","block");
        $(".data").css("display","none");
    });
    
}
