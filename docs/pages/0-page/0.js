let hotContainer = document.querySelector(".freddo-atomi");
let coolContainer = document.querySelector(".caldo-atomi");

let randomHot = Math.random() * 10 - 2;
let randomCool = Math.random() * 4 - 2;

let section = document.querySelectorAll(".temperature-superleghe>section");

section.forEach((item) => {
    item.onmouseover = () => {
        setInterval(() => {
            randomHot = Math.random() * 10 - 5;
            randomCool = Math.random() * 4 - 2;

            section[0].querySelectorAll("span").forEach((item, index, array) => {
                randomCool = Math.random() * 4 - 2;
                item.style.setProperty("--cool", randomCool + "px");
            });

            section[1].querySelectorAll("span").forEach((item, index, array) => {
                randomHot = Math.random() * 30 - 15;
                item.style.setProperty("--hot", randomHot + "px");
            });

        }, 5);
    }
});