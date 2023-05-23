// Fonction de création de galerie----------------------------------------------------------------------------
const gallery = document.querySelector(".gallery")
export function generateGallery(arrayData) {
    arrayData.forEach (project => {
        // créé les balises
        const galleryElement = document.createElement("figure")
        const imageUrl = document.createElement("img")
        imageUrl.src = project.imageUrl
        imageUrl.alt = project.title
        const title = document.createElement("figcaption")
        title.innerText = project.title
        // rattache les balises
        gallery.appendChild(galleryElement)    
        galleryElement.appendChild(imageUrl)
        galleryElement.appendChild(title)
    })
}

// Fonction de création de galerie modale----------------------------------------------------------------------
const galleryModal = document.querySelector(".gallery-modal")
export function modaleGenerateGallery(arrayData) {
    arrayData.forEach (project => {
        // créé les balises
        const galleryModalElement = document.createElement("figure")
        const imageUrl = document.createElement("img")
        imageUrl.src = project.imageUrl
        imageUrl.alt = project.title
        const title = document.createElement("figcaption")
        title.innerText = "éditer"
        // rattache les balises
        galleryModal.appendChild(galleryModalElement)    
        galleryModalElement.appendChild(imageUrl)
        galleryModalElement.appendChild(title)
    })
}