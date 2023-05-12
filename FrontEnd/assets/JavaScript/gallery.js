// Récupération des travaux depuis l'API------------------------------------------------------------------

const response = await fetch('http://localhost:5678/api/works/')
const galleryData = await response.json()

// Création d'une boucle pour insérer les travaux---------------------------------------------------

function generateGallery(galleryData) {
    const sectionGallery = document.querySelector(".gallery")
    galleryData.forEach (project => {
        // créé les balises
        const galleryElement = document.createElement("figure")
        const imageUrl = document.createElement("img")
        imageUrl.src = project.imageUrl
        imageUrl.alt = project.title
        const title = document.createElement("figcaption")
        title.innerText = project.title
        // rattache les balises
        sectionGallery.appendChild(galleryElement)        
        galleryElement.appendChild(imageUrl)
        galleryElement.appendChild(title)
    })
}

generateGallery(galleryData)