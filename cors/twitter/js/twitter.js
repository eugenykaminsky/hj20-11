'use strict';

function callback(data) {
  let wallpaper = document.querySelector("[data-wallpaper]"),
    username = document.querySelector("[data-username]"),
    description = document.querySelector("[data-description]"),
    pic = document.querySelector("[data-pic]"),
    followers = document.querySelector("[data-followers]"),
    following = document.querySelector("[data-following]"),
    tweets = document.querySelector("[data-tweets]");

  wallpaper.src = data.wallpaper;
  username.textContent = data.username;
  description.textContent = data.description;
  pic.src = data.pic;
  tweets.textContent = data.tweets;
  followers.textContent = data.followers;
  following.textContent = data.following;
}

let url = `https://neto-api.herokuapp.com/twitter/jsonp`;

let script = document.createElement("script");
script.setAttribute("src", url);

document.body.appendChild(script);

