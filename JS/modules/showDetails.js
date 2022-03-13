export const showDetails = (movie) => {
  console.log("data recibida");
  const movies = document.getElementById("movies");
  const carousel = document.getElementById("carousel");

  movies.innerHTML = "";
  carousel.setAttribute("style", "height: 0px");
  carousel.innerHTML = "";

  movies.innerHTML = `
    <div class="details">
        <div>
            <img  class="poster-description" src="${movie.image}" alt="${movie.name}">
        </div>
        <div>
            <h5>${movie.name}</h5>
            <p>${movie.description}</p>
            <a href="index.html">Volver</a>
        </div>
    </div>   
  `;
};
