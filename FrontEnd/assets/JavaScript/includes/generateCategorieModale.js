// Fonction de création des boutons de filtrage---------------------------------------------------------------
export function generateCategorieModale(arrayData) {
    const CategorieForm = document.getElementById("addNewPictureCategorie")
    // Option par catégorie
    arrayData.forEach(categorie => {
        const option = document.createElement("option")
        option.value = categorie.id
        option.innerText = categorie.name
        CategorieForm.appendChild(option)
    })
}