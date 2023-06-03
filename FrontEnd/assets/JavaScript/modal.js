// Import des fonctions depuis les modules(includes)-----------------------------------------------------------
import { modaleGenerateGallery } from "./includes/generateGallery.js"
import { modalOpenClose } from "./includes/modalOpenClose.js"
import { modaleNavigate } from "./includes/modaleNavigate.js"
import { addImagePreview } from "./includes/modaleAddImage.js"
import { sendNewWork } from "./includes/modaleSendWork.js"
import { generateCategorieModale } from "./includes/generateCategorieModale.js"

// Import des données
import { galleryData, categoriesData } from "./includes/APIfetch.js"

// genere la fenetre modale-----------------------------------------------------------------------------------
modalOpenClose()

// genere les options modale-----------------------------------------------------------------------------------
generateCategorieModale(categoriesData)

// gestion de la navigation
modaleNavigate()

// genere la galerie de la modale-----------------------------------------------------------------------------
modaleGenerateGallery(galleryData)

// ajout de la fonction de previsualisation de l'image--------------------------------------------------------
addImagePreview()

// ajout de la fonctionnalité d'envoie de travaux-------------------------------------------------------------
sendNewWork()