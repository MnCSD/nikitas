//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {

  
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

container.addEventListener("mouseleave", (e) => {

  card.style.transition = "all 0.3s";
  card.style.transform = `rotateY(0) rotateX(0)`;

});


