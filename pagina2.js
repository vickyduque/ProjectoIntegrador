window.onload=function (){


  // Extraemos api de genero de peliculas
 fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
  .then(function(respuesta) {
        return respuesta.json()
      })
  .then(function(informacion) {
  console.log(informacion);

  var generos= informacion.genres
  console.log(generos);


  for (var i = 0; i < generos.length; i++) {
    var id = generos[i].id
    var nombre = generos[i].name

    document.querySelector("#generos").innerHTML += "<a class=uk-text-center href=pagina3.html?idDeGenero=" + id + "&nombreDeGenero="+nombre+">" + nombre + "</a><br>"
  }
})

  .catch(function(error) {
   console.log("Error: " + error);
      })

    }
  //var idgenero = new URLSearchParams (location.search).get ("id")
  //"<a class=uk-text-center href=pagina2.html?id=" + idgenero +"</a>"