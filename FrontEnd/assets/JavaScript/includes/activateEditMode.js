// récupération des éléments
const toolBar = document.querySelector(".toolBar")
const body = document.querySelector("body")
const editBtn = document.querySelectorAll(".editBtn")
const loginButton = document.querySelector(".login")
const filters = document.querySelector(".filters")
const gallery = document.querySelector(".gallery")

// passage en mode edition en fonctions de la présence du token
export function activateEditMode (token) {
    if (token !== null){
        // Mode edition
        toolBar.classList.add("toolBar-activated")
        body.classList.add("toolBar-activated-bodyReplace")
        editBtn.forEach(button => {
            button.classList.add("editBtn-activated")
        })
        filters.classList.add("filters-adminMode")
        gallery.classList.add("gallery-adminMode")
        // Bouton de deconnexion
        loginButton.innerText = "Logout"
        logOutBtnActivated()
    } else {
        loginButton.innerText = "Login"
    }
}

// gestion du bouton de déconnexion
function logOutBtnActivated () {
    loginButton.addEventListener ("click", function(event){
        event.preventDefault()
        localStorage.removeItem("token")
        location.reload()
    })
}