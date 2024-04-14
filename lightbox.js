//durée de l'apparition et de la disparition de la grande image en millisecondes
const duree = 800;

//création de la balise <div id="grande">
const divgrande = document.createElement("div");
divgrande.id = "grande";
document.body.appendChild(divgrande);

//application de la durée de la transition
divgrande.style.transitionDuration = duree + "ms";

//si clic sur une vignette
function clic_vignettes() {
    //on lit le nom de la vignette sur laquelle on clique
    let source_vignette = this.getAttributeNode("src").value;

    //on récupère le nom de la grande image
    let nom_grande = source_vignette.substr(16);

    //on insère la grande image dans la balise <div>
    divgrande.innerHTML = '<img src="lightbox/images/' + nom_grande + '">';

    divgrande.style.opacity = 1;
    divgrande.style.zIndex = 1;
    divgrande.style.cursor = "pointer";

    divgrande.addEventListener("click", clic_grande);
}

//si clic sur la grande image
function clic_grande() {
    divgrande.removeEventListener("click", clic_grande);
    divgrande.style.opacity = 0;
    setTimeout(masque_grande, duree);
}

function masque_grande()
{
    divgrande.style.zIndex = -1;
    divgrande.style.cursor = "initial"
}

//on lance l'écoute des clics sur les vignettes
const vignettes = document.querySelectorAll("img[src*=vignette]");

vignettes.forEach(function (element) {
    element.addEventListener("click", clic_vignettes);
});
