// Import des fonctions depuis les modules(includes)-----------------------------------------------------------
import { activateEditMode } from "./includes/activateEditMode.js"
import { generateFiltersBtn } from "./includes/generateFiltersBtn.js"
import { generateGallery } from "./includes/generateGallery.js"

// Récupération des travaux et des catégories depuis l'API-----------------------------------------------------
const responseWorks = await fetch('http://localhost:5678/api/works/')
const galleryData = await responseWorks.json()
console.log(galleryData)

const responseCategories = await fetch('http://localhost:5678/api/categories/')
const categoriesData = await responseCategories.json()
console.log(categoriesData)

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