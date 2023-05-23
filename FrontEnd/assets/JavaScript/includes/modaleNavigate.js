// récupération des éléments
const addNewModalBtn = document.querySelector(".addNewModalBtn")
const modalGallery = document.querySelector(".modalGallery")
const modalNewPicture = document.querySelector(".modalNewPicture")
const modalBack = document.querySelector(".modalBack")

// fonction de changement de boite modale
function nextModale () {
    modalGallery.classList.add("modalGallery-off")
    modalNewPicture.classList.add("modalNewPicture-on")
    modalBack.classList.add("modalBack-on")
}
function previousModale () {
    modalGallery.classList.remove("modalGallery-off")
    modalNewPicture.classList.remove("modalNewPicture-on")
    modalBack.classList.remove("modalBack-on")
}

export function modaleNavigate() {
    addNewModalBtn.addEventListener ("click", nextModale)
    modalBack.addEventListener ("click", previousModale)
}