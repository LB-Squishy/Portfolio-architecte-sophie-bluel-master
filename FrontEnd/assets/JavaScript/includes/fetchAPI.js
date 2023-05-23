// Récupération des travaux et des catégories depuis l'API-----------------------------------------------------
const responseWorks = await fetch('http://localhost:5678/api/works/')
const galleryData = await responseWorks.json()
console.log(galleryData)

const responseCategories = await fetch('http://localhost:5678/api/categories/')
const categoriesData = await responseCategories.json()
console.log(categoriesData)

export {galleryData, categoriesData}