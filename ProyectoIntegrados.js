window.onload = function(){

  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayPeliculas = informacion.results
      console.log(arrayPeliculas);

      for (var i = 0; i < arrayPeliculas.length; i++) {
        var id = arrayPeliculas[i].id
        var title = arrayPeliculas[i].title
        var poster = arrayPeliculas[i].poster_path

        document.querySelector("div").innerHTML += "<p><a href=detallePeliculas.html?id=" + id + ">" + title + "</a></p>"
        document.querySelector("div").innerHTML += "<img src=" + poster+ ">"
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })






























}
