// Fonction de création des boutons de filtrage---------------------------------------------------------------
const filters = document.querySelector(".filters")
export function generateFiltersBtn(arrayData) {
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