import { createElementFromTemplate } from "../../components/helpers";
import Collapsible from "../../components/Collapsible/Collapsible";

export function Resume() {
  let birthDate = new Date("02/14/1999");
  let ageOperation = Date.now() - birthDate.getTime();
  let ageDate = new Date(ageOperation);
  let birthYear = ageDate.getUTCFullYear();
  const age = Math.abs(birthYear - 1970);

  const resume = document.createElement("main");
  resume.setAttribute("class", "resume");
  const resumeHeader = createElementFromTemplate(
    "section",
    { class: "resume--header", id: "resume-header" },
    "",
    resume
  );
  resumeHeader.innerHTML = `<div class="resume--title" id="resume-title">
  <h1 class="resume--h1" id="resume-h1">JONATHAN BINOT</h1>
  <h2 class="resume--description">
    Développeur web Frontend - Disponible immédiatement
  </h2>
  <div class="resume--description">
        Passionné d’informatique et du développement web et curieux des
        nouvelles technologies, je souhaite approfondir mes connaissances par la
        pratique en entreprise tout en suivant ma formation. Je m’adapte
        rapidement. Vous trouverez mes réalisations sur la page portfolio et sur
        mon github à cette adresse :
        <a href="http://github.com/SprtJonathan" target="_blank"
          >https://github.com/SprtJonathan/ 
          <i class="fas fa-external-link-alt"></i></a
        >
      </div>
<div class="resume--title--info" id="resume-aside">
  <p>14/02/1999 (23 ans)</p>
  <p>
    <a href="mailto:contact@jonathanbinot.com"
      >Me contacter par Mail <i class="fas fa-external-link-alt"></i
    ></a>
  </p>
  <p>
    <a
      target="_blank"
      href="https://linkedin.com/in/jonathan-binot-260267154"
      >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
    ></a>
  </p>
  <p>Permis B (depuis le 23/03/18)</p>
</div>`;

  resumeHeader.append(
    Collapsible(
      "formation",
      `Formation`,
      `<section id="Formation">    
<div class="frm-desc">
    <h3>2020</h3>
        <p>OpenClassrooms : Développeur Web - Diplôme RNCP de Niveau III (Bac +2/3) :<br><br>
- Assemblage de pages web en HTML5 et CSS3<br>
- Intégration de contenus multimédias dans le code<br>
- Respect des normes W3C<br>
- Gestion de base de données</p>
</div>

<div class="frm-desc">
    <h3>2017 - 2018</h3>
        <p>Première année de licence Maths-Informatique à l'Université Claude Bernard Lyon 1 et validation des UE "Introduction aux Réseaux et au Web", "Algorithmique Programmation Impérative, Initiation", "UNIX" et "Bases de l'architecture pour la programmation".</p>
</div>

<div class="frm-desc">
    <h3>2017</h3>
        <p>Baccalauréat général Scientifique SVT spécialité Physique-Chimie avec une moyenne de 11.44/20 au lycée Saint Marc de Lyon.</p>
</div>

<div class="frm-desc">
    <h3>2013</h3>
        <p>Brevet des collèges mention "Bien" au collège Chevreul Sala.</p>
</div>
</section>`
    )
  );

  resumeHeader.append(
    Collapsible(
      "pro-exp",
      `Expérience Professionnelle`,
      `<section id="Exp-pro">
      <div class="exp-desc">
          <h3>Octobre 2018 à janvier 2019 en CDD, puis février 2019 à juillet 2020 en CDI</h3>
          <div class="exp-content">
              <a href="https://latetedanslesnuages.com"><img src="https://latetedanslesnuages.com/wp-content/themes/ltdn/assets/images/logo-footer.svg" alt="logo la tete dans les nuages" class="ltdn-logo" height="92" width="92"></a>

              <p><b>Conseiller loisirs dans le centre de loisirs familial "La Tête Dans Les Nuages" de Lyon Confluence (bowling, VR, Jeux arcade) :</b> <br> <br> - Accueil, présentation du concept et de l'offre aux clients.     
                  <br> - Utilisation quotidienne de différentes machines, mini-bowling, jeux de réalité       virtuelle, arcade et taureau mécanique. 
                  <br> - Responsable de la fermeture en cas d’absence de la manager.
                  <br> - Vente, techniques commerciales
                  <br> - Relationnel clients / conseillers / supérieurs.
                  <br> - Maintenance basique des jeux : Recalibration VR, remise en marche des applications, nettoyage, déblocage des pistes de bowling, des jeux de palets, mais aussi des caisses.</p>
          </div>
      </div>
      
      <div class="exp-desc">
          <h3>Février 2016 - 1 semaine</h3>
          <div class="exp-content">
              <a href="https://www.epitech.eu/"><img src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png" alt="logo epitech" class="epitech-logo" width="92"></a>
              <p><b>Stage d'intégration à l'école Epitech Lyon :</b> Apprentissage de la programmation de base en C puis de la base de la création d’un jeu vidéo sur Unity. Ce stage m’a réellement conforté dans mon projet de travailler dans le domaine informatique.</p>
          </div>
      </div>
      <div class="exp-desc">
          <h3>Février 2015 - 1 semaine</h3>
          <div class="exp-content">
              <a href="https://www.pole-emploi.fr/accueil/"><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/1200px-Logo_P%C3%B4le_Emploi_2008.svg.png" alt="logo pole emploi" class="epitech-logo" width="92"></a>
              <p><b>Stage d'intégration au Service Informatique Régional Centre-Est (Service informatique de Pôle Emploi) :</b> Semaine d'intégration en entreprise au Service Informatique Régional Centre-Est d'Oullins avec découverte de différentes activités, du matériel et de leur fonction, mais aussi gestion et résolution d'incidents.</p>
          </div>
      </div>
</section>`
    )
  );

  return resume;
}
