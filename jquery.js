function callAPI() {

  var apiURL = "http://api.openweathermap.org/data/2.5/weather";//Definimos una variable con la URL
  var placeID = $("#id").val();
  console.log(placeID);
    $.get({ //a la funcion get de jquery, la llenamos con un objeto json. este funcion hace el llamado a la api automaticamente.
      url: apiURL,
      data: {
          id: placeID,
          appId: "38442bf3df9d7fdb004b10ceba923c38"
      },
      dataType : "json",
    }).done(function( json ) { //Definimos una funcion done, osea, que ocurre si el query sale bien
       console.log(json);
       $("#result").val("Nombre: " + json["name"] + "\n" + "Temperatura: " + Math.round(json["main"]["temp"] - 273) + "ºC \n" + "Humedad: " + json["main"]["humidity"] + "% \n" + "Velocidad del Viento: " + json["wind"]["speed"] + "km/h \n");
       console.log("aca" + Cookies.get("Busquedas"));
       if(Cookies.get("Busquedas")!="undefined"){// En la primer vuelta no deberia entrar pero entra!!!
          Cookies.set( "Busquedas", "Nombre: " + json["name"] + "\n" + Cookies.get("Busquedas"), { expires: 7 });
       }else{
           Cookies.set( "Busquedas", "Nombre: " + json["name"] + "\n", { expires: 7 });
       }
       
       $("#searches").val(Cookies.get("Busquedas"))

    })
    .fail(function( xhr, status, errorThrown ) { //Que ocurre si falla el query
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
    .always(function( xhr, status ) { //Algo que ocurre siempre
      console.log("request completa");
    });


}

