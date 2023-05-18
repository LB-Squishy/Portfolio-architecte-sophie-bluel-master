// Mettre une classe correspondant à l id de la categorie en valeur num sur chaque boutons
// Et créer une fonction qui filtre en fonction de l id recuperé sur la classe du bouton
// pour regrouper la gestion des boutons générer en une seule fonction
// Finir la mise page une fois Log (vérifier les marge et créer le bouton edition qui genere la modale)

// Récupération des travaux et des catégories depuis l'API----------------------------------------------------------------------
const responseWorks = await fetch('http://localhost:5678/api/works/')
const galleryData = await responseWorks.json()
console.log(galleryData)
const responseCategories = await fetch('http://localhost:5678/api/categories/')
const categoriesData = await responseCategories.json()
console.log(categoriesData)

// Appel du Token si présent
const token = localStorage.getItem("token")
console.log(token)

// Fonction de création des boutons de filtrage---------------------------------------------------------------
const filters = document.querySelector(".filters")
function generateFilters(arrayData) {
    const buttonAllProject = document.createElement("button")
    buttonAllProject.innerText = "Tous"
    buttonAllProject.classList.add("filtersButton", "filtersAllProject")
    filters.appendChild(buttonAllProject)
    arrayData.forEach(categorie => {
        const buttonFilter = document.createElement("button")
        buttonFilter.innerText = categorie.name
        buttonFilter.classList.add("filtersButton", "filters"+categorie.name.replace(/\s/g, "").replace(/&/g, ""))
        filters.appendChild(buttonFilter)
    })
}
generateFilters(categoriesData)

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
const objectButton = document.querySelector(".filtersObjets")
objectButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const objectArray = galleryData.filter(project => project.category.id === 1)
    generateGallery(objectArray)
})
    // Bouton Appartements
const apartmentButton = document.querySelector(".filtersAppartements")
apartmentButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const apartmentArray = galleryData.filter(project => project.category.id === 2)
    generateGallery(apartmentArray)
})
    // Bouton Hôtel & Restaurant
const hotelsRestaurantButton = document.querySelector(".filtersHotelsrestaurants")
hotelsRestaurantButton.addEventListener ("click", function(){
    document.querySelector(".gallery").innerHTML = ""
    const hotelsRestaurantArray = galleryData.filter(project => project.category.id === 3)
    generateGallery(hotelsRestaurantArray)
})

// Gestion mode admin ou mode public------------------------------------------------------------
    // récupération des éléments
const editTool = document.querySelector(".editTool")
const body = document.querySelector("body")
const loginButton = document.querySelector(".login")
    // passage en mode admin ou public en fonctions de la présence du token
function LogInOut () {
    if (token !== null){
        // Mode admin
        editTool.classList.add("editTool-admin")
        filters.classList.add("filters-admin")
        body.classList.add("body-admin")
        gallery.classList.add("gallery-admin")
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

