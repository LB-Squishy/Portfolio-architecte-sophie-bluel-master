// Appel du Token si present ---------------------------------------------------------------------------------
const token = localStorage.getItem("token")

// Fonction de suppression de projet par requete DELETE-------------------------------------------------------
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
            allGalleriesActualize(idWork)
        }
    })
    .catch(function() {
        console.error ("Erreur dans la suppression de travaux")
    })
}

// Fonction d'actualisation du DOM
function allGalleriesActualize(idWork) {
    const allGalleries = document.querySelectorAll(".gallery figure, .gallery-modal figure")
    allGalleries.forEach(project => {
        if (project.classList.contains("Project-id:"+idWork)) {
            project.remove()
        }
    })
}