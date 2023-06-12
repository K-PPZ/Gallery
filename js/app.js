let btn_all = document.getElementById("btn_all");
let btn_cat1 = document.getElementById("btn_cat1");
let btn_cat2 = document.getElementById("btn_cat2");
let btn_cat3 = document.getElementById("btn_cat3");

let cat_1 = document.getElementsByClassName("cat_1");
let cat_2 = document.getElementsByClassName("cat_2");
let cat_3 = document.getElementsByClassName("cat_3");

btn_cat1.addEventListener("click", () => {
    for (let i = 0; i < cat_1.length; i++) {
        cat_1[i].classList.remove("cat_hidden");
    }

    for (let i = 0; i < cat_2.length; i++) {
        cat_2[i].classList.add("cat_hidden");
    }

    for (let i = 0; i < cat_3.length; i++) {
        cat_3[i].classList.add("cat_hidden");
    }
});

btn_cat2.addEventListener("click", () => {
    for (let i = 0; i < cat_2.length; i++) {
        cat_2[i].classList.remove("cat_hidden");
    }

    for (let i = 0; i < cat_1.length; i++) {
        cat_1[i].classList.add("cat_hidden");
    }

    for (let i = 0; i < cat_3.length; i++) {
        cat_3[i].classList.add("cat_hidden");
    }
});

btn_cat3.addEventListener("click", () => {
    for (let i = 0; i < cat_3.length; i++) {
        cat_3[i].classList.remove("cat_hidden");
    }

    for (let i = 0; i < cat_2.length; i++) {
        cat_2[i].classList.add("cat_hidden");
    }

    for (let i = 0; i < cat_1.length; i++) {
        cat_1[i].classList.add("cat_hidden");
    }
});

btn_all.addEventListener("click", () => {
    for (let i = 0; i < cat_1.length; i++) {
        cat_1[i].classList.remove("cat_hidden");
    }

    for (let i = 0; i < cat_2.length; i++) {
        cat_2[i].classList.remove("cat_hidden");
    }

    for (let i = 0; i < cat_3.length; i++) {
        cat_3[i].classList.remove("cat_hidden");
    }
});