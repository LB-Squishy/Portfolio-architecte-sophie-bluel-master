// Fonction du bouton d'envoi de l'image--------------------------------------------------------------------------------
export function sendNewWork () {
    const sendFormBtn = document.querySelector(".addNewPictureBtn")
    sendFormBtn.addEventListener ("click", newWorkRequest)
}

// Génére le FormData et l'envoi
function newWorkRequest(event) {
    event.preventDefault()
    // genere le FormData
    const formData = new FormData()
    const selectedFile = document.getElementById("imageInput").files[0]
    const title = document.getElementById("addNewPictureTitle").value
    const category = document.getElementById("addNewPictureCategorie").value
    formData.append("image", selectedFile)
    formData.append("title", title)
    formData.append("category", category)
    // envoi le FormData avec un fetch
    fetchFormData(formData)
}

// Effectue la requête fetch
function fetchFormData(formData) {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:5678/api/works`, {
        method: "POST",
        headers: {
            Authorization : `Bearer ${token}`
        },
        body: formData
    })
    .then(function(response) {
        if(response.ok) {
            console.log ("Projet envoyé")
        }
    })
    .catch(function() {
        console.error ("Erreur lors de l'envoi du projet")
    })
}

// Fonction d'actualisation du DOM (injecter dans if response.ok)