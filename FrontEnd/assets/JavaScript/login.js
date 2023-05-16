// Connexion et gestion du bouton "Se connecter"--------------------------------------------------------------

const loginForm = document.querySelector(".loginForm")
loginForm.addEventListener ("submit", function(event) {
    event.preventDefault()
    //récupération des éléments du formulaire
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    //envoi de la requête en backend
    fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify ({
            email, 
            password
        })
    })
    //vérif de la réponse et retour JSON
    .then (function(response) {
        if(response.ok) {
            return response.json()
        }
    })
    //stockage du token et redirection
    .then (function(data) {
        const token = data.token
        localStorage.setItem("token", token)
        window.location.href = "index.html"
    })
    //gestion des erreurs d identification
    .catch (function(error) {
        console.error ("Erreur dans l'identifiant ou le mot de passe")
    })
})