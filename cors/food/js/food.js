'use strict';

function recipe(data) {
  let pic = document.querySelector("[data-pic]"),
    ingredients = document.querySelector("[data-ingredients]"),
    title = document.querySelector("[data-title]");

  pic.style.backgroundImage = `url(${data.pic})`;
  title.textContent = data.title;
  data.ingredients.forEach(function(item, index) {
    index !== data.ingredients.length - 1
      ? (ingredients.textContent += `${item}, `)
      : (ingredients.textContent += `${item}.`);
  });

  loadData(`https://neto-api.herokuapp.com/food/42/rating`).then(rating);
}

function rating(data) {
  let rating = document.querySelector("[data-rating]"),
    votes = document.querySelector("[data-votes]"),
    star = document.querySelector("[data-star]");

  rating.textContent = data.rating.toFixed(2);
  star.style.width = `${data.rating * 100 / 10}%`;
  votes.textContent = `(${data.votes} оценок)`;

  loadData(`https://neto-api.herokuapp.com/food/42/consumers`).then(consumers);
}

function consumers(data) {
  let consumers = document.querySelector("[data-consumers]");

  data.consumers.forEach(function(item) {
    console.log(item);
    consumers.innerHTML += `<img src="${item.pic}" title="${item.name}">`;
  });
  consumers.innerHTML += `<span>(+${data.total})</span>`;
}

function loadData(url) {
  const functionName = "callback";

  return new Promise((done, fail) => {
    window[functionName] = done;
    let script = document.createElement("script");
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
}

loadData(`https://neto-api.herokuapp.com/food/42`).then(recipe);
