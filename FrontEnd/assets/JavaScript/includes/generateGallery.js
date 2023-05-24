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

import { deleteWorks } from "./deleteWorks.js"

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
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        deleteBtn.classList.add(
            "deleteBtn",
            project.id
            )
        // rattache les balises
        galleryModal.appendChild(galleryModalElement)    
        galleryModalElement.appendChild(imageUrl)
        galleryModalElement.appendChild(title)
        galleryModalElement.appendChild(deleteBtn)
        //ecoute des boutons supprimer
        deleteBtn.addEventListener ("click", deleteWorks)
    })
}