// récupération des éléments
const editBtns = document.querySelectorAll(".editBtn")
const modal = document.querySelector(".modal")
const closeArrow = document.querySelector(".modalClose")
const faClose = document.querySelector(".fa-close")

// GESTION D'OUVERTURE ET FERMETURE DE LA MODALE--------------------------------------------------------------
// Bouton editer avec ouverture de la modale
export function openModal () {
    editBtns.forEach(Btn => {
        Btn.addEventListener ("click", function(){
            modal.classList.add("modalActivated")
            modal.addEventListener ("click", closeModal)
            closeArrow.addEventListener ("click", closeModal)
        })
    }) 
}
// Fonction de cloture de la modale
function closeModal (event) {
    if (event.target === modal || event.target === closeArrow || event.target === faClose){
        modal.classList.add("modalClosingAnimation")
        window.setTimeout (function(){
            modal.classList.remove("modalActivated", "modalClosingAnimation")
        },1000)      
        modal.removeEventListener ("click", closeModal)
        closeArrow.removeEventListener ("click", closeModal)
    }
}