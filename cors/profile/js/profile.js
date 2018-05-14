'use strict';

function profile(data) {
  let content = document.querySelector(".content"),
    description = document.querySelector("[data-description]"),
    position = document.querySelector("[data-position]"),
    pic = document.querySelector("[data-pic]"),
    name = document.querySelector("[data-name]");

  name.textContent = data.name;
  description.textContent = data.description;
  position.textContent = data.position;
  pic.src = data.pic;

  loadData(
    `https://neto-api.herokuapp.com/profile/${data.id}/technologies`
  ).then(technologies);
  content.style.display = "initial";
}

function technologies(data) {
  let contentTechnologies = document.querySelector("[data-technologies]");

  data.forEach(function(item) {
    let str = `<span class="devicons devicons-${item}"></span>`;
    contentTechnologies.innerHTML += str;
  });
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

loadData(`https://neto-api.herokuapp.com/profile/me`).then(profile);

