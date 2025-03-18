// (function () {
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/chunks.html": "/pages/chunks/home.html",
  "/chunks": "/pages/chunks/home.html",
  "/maths": "/pages/maths/home.html",
  "/science": "/pages/science/home.html",
  "/computer-science": "/pages/computer-science/home.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;

  console.log(path, "EL CAMINO");

  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
// })();
