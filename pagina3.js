window.onload =function(){

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=d6ff71a6bd2a94eaac5b986a9112d505&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=18")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var generosId= informacion.genre_id
      console.log(generosId);

      for (var i = 0; i < generosId.length; i++) {
        var id = generosId[i].genre_id

        document.querySelector("div.genero").innerHTML += "<a href= https://api.themoviedb.org/3/discover/movie?api_key=d6ff71a6bd2a94eaac5b986a9112d505&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + genre_id + "> </a>"

    }
    })
     .catch(function(error) {
       console.log("Error: " + error);
     })



}
