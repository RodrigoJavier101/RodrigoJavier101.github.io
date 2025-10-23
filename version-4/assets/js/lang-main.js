const langs = document.querySelector(".langs"),
  link = document.querySelectorAll("#lang-a");
let lang = localStorage.getItem("lang") || "english";

let index = parseInt(localStorage.getItem("langIndex")) || 0;

if (lang === "english") {
  langs.querySelector(".active-lan").classList.remove("active-lan");
  link[0].classList.add("active-lan");
  changeLang("english");
} else {
  langs.querySelector(".active-lan").classList.remove("active-lan");
  link[index].classList.add("active-lan");
  changeLang(lang);
}

link.forEach((el, i) =>
  el.addEventListener("click", () => {
    langs.querySelector(".active-lan").classList.remove("active-lan");
    el.classList.add("active-lan");
    const attr = el.dataset.lang;
    lang = attr;
    index = i;
    if (lang !== "english") changeLang(lang);
    else changeLang("english");
    localStorage.setItem("lang", attr);
    localStorage.setItem("langIndex", i);
  })
);

async function changeLang(lang) {
  try {
    const route_page = "chunks";
    const res = await fetch(
      "./pages/" + route_page + "/lang-files/" + lang + ".json"
    );
    const data = await res.json();
    for (const key in data) {
      const elem = document.querySelector(`.lng-${key}`);
      elem.textContent = data[key];
    }
  } catch (error) {
    console.log(error);
  }
}
