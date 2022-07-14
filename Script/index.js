const submitButton = document.getElementById("submit");
let sumbitClick = false;
sumbitButton.addEventListener("click", () => {
    if (!sumbitClick) {
        submitButton.classList.add("active");
        sumbitClick = true;
    } else {
        submitButton.classList.remove("active");
        sumbitClick = false;
    }
})