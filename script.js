const email = document.getElementById("email");
const btn = document.getElementById("btn");


// modal section

let openModal = document.getElementById("open-modal");

let closeModal = document.getElementById("close-modal");

let overlayModal = document.getElementById("overlay-modal");

let modal = document.getElementById("modal");


openModal.addEventListener("click", function () {

    overlayModal.style.display = "block";

})


closeModal.addEventListener("click", function () {

    overlayModal.style.display = "none";

})

// pop up scripts

const text = document.querySelector(".content h4");

const popup = document.querySelector(".popup");

text.addEventListener("click", () => {
    popup.classList.add("active");
    copyToClipBoard();
});

popup.addEventListener("animationEnd", () => {
    popup.classList.remove("active");
});

function copyToClipBoard() {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.value = "jamesalderman1980@icloud.com";
    textarea.style.position = "absolute";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);


};

// end animation
