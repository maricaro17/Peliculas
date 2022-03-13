import { movies } from "../movies.js";
import { showDetails } from "./modules/showDetails.js";

const click = (e) => {
  const movie = movies.find((element) => element.id === Number(e.target.id));
  showDetails(movie)
};

document.addEventListener("DOMContentLoaded", () => {
  const moviesRow = document.getElementById("movies-row");
  movies.forEach((item) => {
    const col = document.createElement("div");
    col.className = "custom-col mt-3 mb-3";

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "130px";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.id = item.id;
    img.src = item.image;
    img.alt = item.name;
    img.addEventListener("click", (e) => click(e));
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const title = document.createElement("h6");
    title.className = "card-title";
    title.innerHTML = item.name;
    cardBody.appendChild(title);

    card.appendChild(cardBody);
    col.appendChild(card);
    moviesRow.appendChild(col);
  });
});
