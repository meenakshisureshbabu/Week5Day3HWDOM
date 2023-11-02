let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  //randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

  const maintitle = document.querySelector("#main-title");
  maintitle.textContent = "DOM TORETTO";

  // Part 2

  const bodyelement = document.querySelector("body");
  bodyelement.style.backgroundColor = "lightblue";
  // Part 3

  //  const list = document.querySelector('#favorite-things');
  // console.log(list.removeChild(list.children[5]));

  const list = document.querySelector("li:last-Child");
  //console.log(list);
  list.parentElement.removeChild(list);

  // Part 4

  const spltitle = document.querySelectorAll(".special-title");
  spltitle.forEach((item) => {
    item.style.fontSize = "2rem";
  });

  // Part 5

  // const citylist = document.querySelector('#past-races');
  // console.log(citylist.removeChild(citylist.children[3]));

  const citylistitem = document.querySelector("#past-races li:nth-child(4)");
  citylistitem.parentElement.removeChild(citylistitem);

  // Part 6

  const citylist = document.querySelector("#past-races");
  const liitem = document.createElement("li");
  liitem.textContent = "Jersey City";
  citylist.appendChild(liitem);

  // Part 7

  const blogdiv = document.createElement("div");
  blogdiv.setAttribute("class", "blog-post purple");
  const newH2 = document.createElement("h2");
  newH2.textContent = "Jersey City";
  newH2.style.color = "white";
  const newP = document.createElement("p");
  newP.textContent = "I PASSED OVER 200 CARS IN MY CAREER";
  const maindiv = document.querySelector(".main");
  maindiv.appendChild(blogdiv);
  blogdiv.appendChild(newH2);
  blogdiv.appendChild(newP);

  // Part 8

  const queryTitle = document.querySelector("#quote-title");
  queryTitle.addEventListener("click", randomQuote());
  // Part 9

  const allblog = document.querySelectorAll(".blog-post");
  allblog.forEach((item) => {
    item.addEventListener("mouseout", function (e) {
      this.classList.toggle("red");
    });
    item.addEventListener("mouseenter", function (e) {
      this.classList.toggle("purple");
    });
  });
});
