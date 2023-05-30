// Fonction de controle de l image et d'aperçu-----------------------------------------------------------------
export function addImagePreview () {
    const previewImageBtn = document.getElementById("imageInput")
    previewImageBtn.addEventListener ("change", imagePreview)
}

// gère le controle et l'aperçu de l image
function imagePreview (event) {
    let selectedFile = event.target.files[0]
    // controle les conditions
    if (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png") {
        if (selectedFile.size <= 4 * 1024 * 1024) {
            // gère l'apercu de previsualisation
            let imagePreview = document.querySelector(".imagePreview")
            let imageURL = URL.createObjectURL(selectedFile)
            imagePreview.src = imageURL
            previewActivated()
        } else {
            alert("Fichier trop Lourd. Merci de ne pas dépasser: 4 Mo.") 
        }
    } else {
        alert("Le fichier doit être de type .jpg ou .png") 
    }
}

// gère le changement d'affichage pour l'aperçu de l'image
function previewActivated () {
    const addImageVisualization = document.querySelector(".addImageVisualization")
    const imagePreview = document.querySelector(".imagePreview")
    addImageVisualization.classList.add("addImageVisualization-off")
    imagePreview.classList.add("imagePreview-on")
}