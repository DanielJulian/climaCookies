function crearcookieuser() {
  //document.cookie = "username= " + $("#user").val() +" ; pw=chabon; expires=Thu, 18 Dec 2016 12:00:00 UTC; path=/";
    Cookies.set( "GeneralPeron", "LoggedIN" , { expires: 7 });
}

function crearcookie(nom,vale) {
  //document.cookie = "username= " + $("#user").val() +" ; pw=chabon; expires=Thu, 18 Dec 2016 12:00:00 UTC; path=/";
    console.log(vale);
    Cookies.set( nom, vale , { expires: 7 });
}

function borrarcookieuser(){
  Cookies.remove('GeneralPeron');
  Cookies.remove('Busquedas');
}

function checkuser(){
	if(Cookies.get("GeneralPeron")=="LoggedIN"){
		$("#info2").show();
		$("#info1").hide();
	}
	else{
		$("#info1").show();
		$("#info2").hide();
	}	
}

