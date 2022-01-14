let hobbieCard = document.querySelectorAll(".my-card");

hobbieCard.forEach((card) => {
  let cardAfter = card.querySelector(".my-card__title");
  card.addEventListener("mouseover", () => {
    card.classList.add("active");
    card.childNodes[1].childNodes[3].classList.add("visibility");
    card.childNodes[1].classList.add("my-card-hover");
    card.childNodes[1].childNodes[1].classList.add("my-card__title-active");
    console.log(card.childNodes[1].childNodes[1]);
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("active");
    card.childNodes[1].childNodes[3].classList.remove("visibility");
    card.childNodes[1].classList.remove("my-card-hover");
    card.childNodes[1].childNodes[1].classList.remove("my-card__title-active");
  });
});
