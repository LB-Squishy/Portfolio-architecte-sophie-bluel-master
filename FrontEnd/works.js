// Récupération des travaux depuis l'API------------------------------------------------------------------

const response = await fetch('http://localhost:5678/api/works/')
const workImport = await response.json()

// Création d'une boucle pour insérer les travaux---------------------------------------------------

function generateWorks(workImport) {
    for (let i = 0; i < workImport.length; i++) {
        const work = workImport[i]
        // création des balises de la galerie
        const sectionGallery = document.querySelector(".gallery")
        const galleryElement = document.createElement("figure")
        sectionGallery.appendChild(galleryElement)
        // création des balises des projets de la galerie
        const imageUrl = document.createElement("img")
        imageUrl.src = work.imageUrl
        imageUrl.alt = work.title
        galleryElement.appendChild(imageUrl)
        const title = document.createElement("figcaption")
        title.innerText = work.title
        galleryElement.appendChild(title)
    }
}

generateWorks(workImport)