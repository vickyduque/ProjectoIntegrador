window.onload= function (){

  fetch(" https://api.themoviedb.org/3/movie/550?api_key=d6ff71a6bd2a94eaac5b986a9112d505")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var detallesPeliculas = informacion
      console.log(detallesPeliculas);


        var id = detallesPeliculas.id
        var titulo = detallesPeliculas.original_title
        var genero = detallesPeliculas.genres
        var idioma = detallesPeliculas.original_language
        var sinopsis = detallesPeliculas.overview
        var estreno = detallesPeliculas.release_date
        var poster = detallesPeliculas.poster_path
        var trailer = detallesPeliculas.video
      
        document.querySelector(".detalle").innerHTML= "<p>"+ titulo + "</p>" + "<p>"+ genero + "</p>" + "<p>"+ idioma + "</p>" +  "<p>"+ sinopsis + "</p>" + "<p>"+ estreno + "</p>" + "<p>"+ poster + "</p>" +"<p>"+ trailer + "</p>"



    })
    .catch(function(error) {
      console.log("Error: " + error);
    })






}
