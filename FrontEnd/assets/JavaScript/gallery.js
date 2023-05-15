// Récupération des travaux depuis l'API-------------------------------------------------------

const response = await fetch('http://localhost:5678/api/works/')
const galleryData = await response.json()
console.log(galleryData)

// Création de la galerie----------------------------------------------------------------------

function generateGallery(arrayData) {
    const sectionGallery = document.querySelector(".gallery")
    arrayData.forEach (project => {
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

// Initialisation de la page ---------------------------------------------------------------
generateGallery(galleryData)

// Gestion du bouton Tous ---------------------------------------------------------------------
const allProjectButton = document.querySelector(".filtersAllProject")
allProjectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    generateGallery(galleryData)
})

// Gestion du bouton Objets -------------------------------------------------------------------
const objectButton = document.querySelector(".filtersObject")
objectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const objectArray = galleryData.filter(project => project.category.id === 1)
    generateGallery(objectArray)
})
// Gestion du bouton Appartements -------------------------------------------------------------
const apartmentButton = document.querySelector(".filtersApartment")
apartmentButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const apartmentArray = galleryData.filter(project => project.category.id === 2)
    generateGallery(apartmentArray)
})

// Gestion du bouton Hôtel & Restaurant -------------------------------------------------------
const hotelsRestaurantButton = document.querySelector(".filtersHotelsRestaurant")
hotelsRestaurantButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const hotelsRestaurantArray = galleryData.filter(project => project.category.id === 3)
    generateGallery(hotelsRestaurantArray)
})