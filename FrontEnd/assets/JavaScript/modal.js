// Import des fonctions depuis les modules(includes)-----------------------------------------------------------
import { modaleGenerateGallery } from "./includes/generateGallery.js"
import { modalOpenClose } from "./includes/modalOpenClose.js"
import { modaleNavigate } from "./includes/modaleNavigate.js"
import { addImagePreview } from "./includes/addImage.js"

// Import des données
import { galleryData } from "./includes/fetchAPI.js"

// genere la fenetre modale-----------------------------------------------------------------------------------
modalOpenClose()

// gestion de la navigation
modaleNavigate()

// genere la galerie de la modale-----------------------------------------------------------------------------
modaleGenerateGallery(galleryData)

// ajout de la fonction de previsualisation de l'image--------------------------------------------------------
addImagePreview()