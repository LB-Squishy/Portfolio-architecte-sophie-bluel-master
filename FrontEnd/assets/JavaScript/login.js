// Récupération des éléments du formulaire de connection----------------------------------------------------

const loginForm = document.querySelector(".loginForm")
loginForm.addEventListener ("submit", function(event) {
    event.preventDefault()
    const emailUser = document.querySelector("#email").value
    const passwordUser = document.querySelector("#password").value
    console.log(emailUser, passwordUser)
})