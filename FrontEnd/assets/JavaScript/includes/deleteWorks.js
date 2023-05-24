// Import des fonctions depuis les modules(includes)-----------------------------------------------------------
import { modaleGenerateGallery } from "./generateGallery.js"
import { generateGallery } from "./generateGallery.js"

// Import des données
import { galleryData } from "./fetchAPI.js"

// Appel du Token si present ---------------------------------------------------------------------------------
const token = localStorage.getItem("token")

// Fonction de suppression de projet par requete DELETE
export function deleteWorks(event) {
    const idWork = parseInt (this.classList[1])
    fetch(`http://localhost:5678/api/works/${idWork}`, {
        method: "DELETE",
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
    .then(function(response) {
        if(response.ok) {
            allGalleryActualize()
        }
    })
    .catch(function() {
        console.error ("Erreur dans la suppression de travaux")
    })
}

// Fonction de réactualisation de la galerie
function allGalleryActualize() {
    document.querySelector(".gallery").innerHTML = ""
    document.querySelector(".gallery-modal").innerHTML = ""
    generateGallery(galleryData)
    modaleGenerateGallery(galleryData)
}