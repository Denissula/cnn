let search = document.querySelectorAll(".triggerSearch");
let naving = document.querySelector(".nav-search");

for (let i = 0; i < search.length; i++) {
    search[i].addEventListener("click", function () {
        if(naving.classList.contains("activeNav")){
            naving.classList.remove("activeNav");
        }
        else
            naving.classList.add("activeNav");
    })
}
