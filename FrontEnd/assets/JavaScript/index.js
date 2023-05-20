// Récupération des travaux et des catégories depuis l'API-----------------------------------------------------
const responseWorks = await fetch('http://localhost:5678/api/works/')
const galleryData = await responseWorks.json()
console.log(galleryData)

const responseCategories = await fetch('http://localhost:5678/api/categories/')
const categoriesData = await responseCategories.json()
console.log(categoriesData)

// Appel du Token si présent----------------------------------------------------------------------------------
const token = localStorage.getItem("token")
console.log(token)

// Fonction de création des boutons de filtrage---------------------------------------------------------------
const filters = document.querySelector(".filters")
function generateFiltersBtn(arrayData) {
    // Bouton Tous
    const buttonAllProject = document.createElement("button")
    buttonAllProject.innerText = "Tous"
    buttonAllProject.classList.add("filtersButton", "filtersAllProject")
    filters.appendChild(buttonAllProject)
    // Bouton par catégorie
    arrayData.forEach(categorie => {
        const buttonFilter = document.createElement("button")
        buttonFilter.innerText = categorie.name
        buttonFilter.classList.add(
            "filtersButton", 
            "filtersProject",
            "filters"+categorie.name.replace(/\s/g, "").replace(/&/g, ""),
            categorie.id
            )
        filters.appendChild(buttonFilter)
    })
}
generateFiltersBtn(categoriesData)

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

// Fonction de filtrage par catégorie--------- ---------------------------------------------------------------
const allProjectButton = document.querySelector(".filtersAllProject")
const filtersButton = document.querySelectorAll(".filtersProject")
function generateFilters() {
    // Bouton Tous
    allProjectButton.addEventListener ("click", function(){
        document.querySelector(".gallery").innerHTML = ""
        generateGallery(galleryData)
    })
    // Bouton par catégorie
    filtersButton.forEach(button => {
        button.addEventListener ("click", function(){
            const categorieId = parseInt (this.classList[3])
            document.querySelector(".gallery").innerHTML = ""
            const filterArray = galleryData.filter(project => project.category.id === categorieId)
            generateGallery(filterArray)
        })
    })
}  
generateFilters()

// Gestion mode admin ou mode public--------------------------------------------------------------------------
    // récupération des éléments
const toolBar = document.querySelector(".toolBar")
const body = document.querySelector("body")
const loginButton = document.querySelector(".login")
const editBtn = document.querySelectorAll(".editBtn")
    // passage en mode admin en fonctions de la présence du token et gestion deconnexion
function LogInOut () {
    if (token !== null){
        // Mode admin
        toolBar.classList.add("toolBar-activated")
        body.classList.add("toolBar-activated-bodyReplace")
        editBtn.forEach(button => {
            button.classList.add("editBtn-activated")
        })
        filters.classList.add("filters-adminMode")
        gallery.classList.add("gallery-adminMode")
        // Bouton de deconnexion
        loginButton.innerText = "Logout"
        loginButton.addEventListener ("click", function(event){
            event.preventDefault()
            localStorage.removeItem("token")
            location.reload()
        })
    }
}
LogInOut()

