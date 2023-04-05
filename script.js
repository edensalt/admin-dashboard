const cardComplete = document.querySelectorAll("#card-complete");
const cardAdd = document.querySelectorAll("#card-add");
const cardShare = document.querySelectorAll("#card-share");

cardComplete.forEach((card) => {
    card.addEventListener("click", () => {
        const currentFill = card.getAttribute("fill");
        if (currentFill == "black") {
            card.setAttribute("fill", "green");
        } else {
            card.setAttribute("fill", "black");
        }
    })
});

cardAdd.forEach((card) => {
    card.addEventListener("click", () => {
        const currentFill = card.getAttribute("fill");
        if (currentFill == "black") {
            card.setAttribute("fill", "green");
        } else {
            card.setAttribute("fill", "black");
        }
    })
});

cardShare.forEach((card) => {
    card.addEventListener("click", () => {
        window.prompt("Want to share this project with a friend? Type their username below!")
    })
});
