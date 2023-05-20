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