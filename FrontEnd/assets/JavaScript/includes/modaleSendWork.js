// Import des fonctions depuis les modules(includes)----------------------------------------------------------
import { generateGallery } from "./generateGallery.js"
import { modaleGenerateGallery } from "./generateGallery.js"

// Fonction du bouton d'envoi de l'image----------------------------------------------------------------------
export async function sendNewWork () {
    const sendFormBtn = document.querySelector(".addNewPictureBtn")
    const form = document.querySelector(".addNewPictureForm")
    sendFormBtn.addEventListener ("click", async function(event) {
        event.preventDefault()
        if (form.reportValidity()) {
            await requestAndActualize()
            form.reset()
        }   
    })
}

// Séquence la requête d'envoi puis la requête d'actualisation------------------------------------------------
async function requestAndActualize () {
    await newWorkRequest()
    await galerieAddActualisation ()
}

// Génére le FormData et l'envoi------------------------------------------------------------------------------
async function newWorkRequest () {
    // genere le FormData
    const formData = new FormData()
    const selectedFile = document.getElementById("imageInput").files[0]
    const title = document.getElementById("addNewPictureTitle").value
    const category = document.getElementById("addNewPictureCategorie").value
    formData.append("image", selectedFile)
    formData.append("title", title)
    formData.append("category", category)
    // envoi le FormData avec un fetch
    await fetchFormData(formData)
}

// Effectue la requête fetch
async function fetchFormData(formData) {
    const token = localStorage.getItem("token")
    await fetch(`http://localhost:5678/api/works`, {
        method: "POST",
        headers: {
            Authorization : `Bearer ${token}`
        },
        body: formData
    })
    .then(async function(response) {
        if(response.ok) {
            console.log ("Projet envoyé")
            resetPreview()
        }
    })
    .catch(function() {
        console.error ("Erreur lors de l'envoi du projet")
    })
}

// Fonction d'actualisation de la galerie---------------------------------------------------------------------
async function galerieAddActualisation () {
    // Récupération des travaux depuis l'API
    const responseWorks = await fetch('http://localhost:5678/api/works/')
    const galleryData = await responseWorks.json()
    // Vide les anciennes galeries
    document.querySelector(".gallery").innerHTML = ""
    document.querySelector(".gallery-modal").innerHTML = ""
    // Génère les nouvelles galleries
    generateGallery(galleryData)
    modaleGenerateGallery(galleryData)
}

// Fonction d'actualisation du DOM après envoi----------------------------------------------------------------
function resetPreview () {
    const addImageVisualization = document.querySelector(".addImageVisualization")
    const imagePreview = document.querySelector(".imagePreview")
    addImageVisualization.classList.remove("addImageVisualization-off")
    imagePreview.classList.remove("imagePreview-on")
    imagePreview.src = "#"
}