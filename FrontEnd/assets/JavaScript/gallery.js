// Récupération des travaux depuis l'API-------------------------------------------------------
const response = await fetch('http://localhost:5678/api/works/')
const galleryData = await response.json()
console.log(galleryData)

// Appel du Token si présent
const token = localStorage.getItem("token")
console.log(token)

// Fonction de création de galerie----------------------------------------------------------------------------
const gallery = document.querySelector(".gallery")
function generateGallery(arrayData) {
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

// Initialisation de la page ---------------------------------------------------------------------------------
generateGallery(galleryData)

// Gestion des boutons de filtrage ---------------------------------------------------------------------------
    // Bouton Tous
const allProjectButton = document.querySelector(".filtersAllProject")
allProjectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    generateGallery(galleryData)
})
    // Bouton Objets
const objectButton = document.querySelector(".filtersObject")
objectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const objectArray = galleryData.filter(project => project.category.id === 1)
    generateGallery(objectArray)
})
    // Bouton Appartements
const apartmentButton = document.querySelector(".filtersApartment")
apartmentButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const apartmentArray = galleryData.filter(project => project.category.id === 2)
    generateGallery(apartmentArray)
})
    // Bouton Hôtel & Restaurant
const hotelsRestaurantButton = document.querySelector(".filtersHotelsRestaurant")
hotelsRestaurantButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const hotelsRestaurantArray = galleryData.filter(project => project.category.id === 3)
    generateGallery(hotelsRestaurantArray)
})

// Gestion mode admin ou mode public------------------------------------------------------------
    // récupération des éléments
const editTool = document.querySelector(".editTool")
const filters = document.querySelector(".filters")
const body = document.querySelector("body")
const loginButton = document.querySelector(".login")
    // passage en mode admin ou public en fonctions de la présence du token
function LogInOut () {
    if (token !== null){
        // Mode admin
        editTool.style.display = "flex"
        filters.style.display = "none"
        body.style.paddingTop = "59px"
        gallery.style.marginTop = "92px"
        loginButton.innerText = "Logout"
        // Bouton de deconnection
        loginButton.addEventListener ("click", function(event){
            event.preventDefault()
            localStorage.removeItem("token")
            location.reload()
        })
    }
}
LogInOut()

