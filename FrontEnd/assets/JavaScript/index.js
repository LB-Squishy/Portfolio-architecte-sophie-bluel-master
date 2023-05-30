// Import des fonctions depuis les modules(includes)-----------------------------------------------------------
import { activateEditMode } from "./includes/activateEditMode.js"
import { generateFiltersBtn } from "./includes/generateFiltersBtn.js"
import { generateGallery } from "./includes/generateGallery.js"

// Import des données
import { galleryData, categoriesData } from "./includes/APIfetch.js"

// Création des boutons par catégorie en fonction du backend--------------------------------------------------
generateFiltersBtn(categoriesData)

// Initialisation de la page ---------------------------------------------------------------------------------
generateGallery(galleryData)

// Fonction de filtrage par catégorie à partir de la gallery et des boutons-----------------------------------
const allProjectButton = document.querySelector(".filtersAllProject")
const filtersButton = document.querySelectorAll(".filtersProject")
function generateFiltersType() {
    // Bouton Tous
    allProjectButton.addEventListener ("click", function(){
        document.querySelector(".gallery").innerHTML = ""
        generateGallery(galleryData)
    })
    // Bouton par catégorie
    filtersButton.forEach(button => {
        button.addEventListener ("click", function(){
            const categorieId = parseInt (this.classList[3])
            document.querySelector(".gallery").innerHTML = ""
            const filterArray = galleryData.filter(project => project.category.id === categorieId)
            generateGallery(filterArray)
        })
    })
}  
generateFiltersType()

// Appel du Token si present ---------------------------------------------------------------------------------
const token = localStorage.getItem("token")

// activation du mode edition si présence de token------------------------------------------------------------
activateEditMode(token)