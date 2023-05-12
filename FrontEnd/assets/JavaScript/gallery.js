// Récupération des travaux depuis l'API-------------------------------------------------------

const response = await fetch('http://localhost:5678/api/works/')
const galleryData = await response.json()
console.log(galleryData)

// Création de la galerie----------------------------------------------------------------------

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

// Premier affichage de la page ---------------------------------------------------------------
generateGallery(galleryData)

// Gestion du bouton Tous ---------------------------------------------------------------------
const AllProjectButton = document.querySelector(".filtersAllProject")
AllProjectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    generateGallery(galleryData)
})

// Gestion du bouton Objets -------------------------------------------------------------------
const ObjectButton = document.querySelector(".filtersObject")
ObjectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const objectArray = galleryData.filter(project => project.category.id === 1)
    console.log(objectArray)
})
// Gestion du bouton Appartements -------------------------------------------------------------
const ApartmentButton = document.querySelector(".filtersApartment")
ApartmentButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const ApartmentArray = galleryData.filter(project => project.category.id === 2)
    console.log(ApartmentArray)
})

// Gestion du bouton Hôtel & Restaurant -------------------------------------------------------
const HotelsRestaurantButton = document.querySelector(".filtersHotelsRestaurant")
HotelsRestaurantButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const HotelsRestaurantArray = galleryData.filter(project => project.category.id === 3)
    console.log(HotelsRestaurantArray)
})