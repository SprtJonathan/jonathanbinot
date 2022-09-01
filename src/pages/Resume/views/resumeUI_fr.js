import { createElementFromTemplate } from "../../../components/helpers";
import Collapsible from "../../../components/Collapsible/Collapsible";
import Modal from "../../../components/Modal/Modal";

let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

const resumeHeaderFR = createElementFromTemplate(
  "section",
  { class: "resume--header", id: "resume-header" },
  "",
  ""
);
const resumeContentFR = createElementFromTemplate(
  "div",
  { class: "resume--content", id: "resume-content" },
  "",
  ""
);
resumeHeaderFR.innerHTML = `
<div class="resume--title" id="resume-title">
  <h1 class="resume--h1" id="resume-h1">JONATHAN BINOT</h1>
  <h2 class="resume--description">
    Développeur web Frontend - Disponible immédiatement
  </h2>
  <div class="resume--description">
    Passionné d’informatique et du développement web et curieux des nouvelles
    technologies, je souhaite approfondir mes connaissances par la pratique en
    entreprise tout en suivant ma formation. Je m’adapte rapidement. Vous
    trouverez mes réalisations sur la page portfolio et sur mon github à cette
    adresse :
    <a href="http://github.com/SprtJonathan" target="_blank"
      >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
    ></a>
  </div>
  <div class="resume--title--info" id="resume-aside">
    <p>14/02/1999 (${age} ans)</p>
    <p>
      <a href="mailto:jonathanbinot@gmail.com"
        >Me contacter par Mail <i class="fas fa-external-link-alt"></i
      ></a>
    </p>
    <p>
      <a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
        >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
      ></a>
    </p>
    <p>Permis B (depuis le 23/03/18)</p>
  </div>
</div>
`;

resumeContentFR.append(
  Collapsible(
    "formation",
    "",
    `Formation`,
    `
    <section id="Formation">
  <div class="formation--description">
    <h3>2022</h3>
    <p>
      <b
        >OpenClassrooms : Développeur Frontend - Diplôme RNCP de Niveau VI (Bac
        +3/4) : </b
      ><br /><br />
      <li>Analyser les besoins</li>
      <li>Implémenter des mockups avec du code de qualité</li>
      <li>Optimiser le temps de chargement des pages</li>
      <li>Utilisation de frameworks, notamment React</li>
    </p>
  </div>
  <div class="formation--description">
    <h3>2020</h3>
    <p>
      <b
        >OpenClassrooms : Développeur Web - Diplôme RNCP de Niveau III (Bac
        +2/3) :</b
      ><br /><br />
      <li>Assemblage de pages web en HTML5 et CSS3</li>
      <li>Intégration de contenus multimédias dans le code</li>
      <li>Respect des normes W3C</li>
      <li>Gestion de base de données</li>
    </p>
  </div>

  <div class="formation--description">
    <h3>2017 - 2018</h3>
    <p>
      <b
        >Première année de licence Maths-Informatique à l'Université Claude
        Bernard Lyon 1</b
      >
      et validation des UE "Introduction aux Réseaux et au Web", "Algorithmique
      Programmation Impérative, Initiation", "UNIX" et "Bases de l'architecture
      pour la programmation".
    </p>
  </div>

  <div class="formation--description">
    <h3>2017</h3>
    <p>
      <b>Baccalauréat général Scientifique SVT spécialité Physique-Chimie</b>
      avec une moyenne de 11.44/20 au lycée Saint Marc de Lyon.
    </p>
  </div>

  <div class="formation--description">
    <h3>2013</h3>
    <p><b>Brevet des collèges</b> mention "Bien" au collège Chevreul Sala.</p>
  </div>
</section>
`
  )
);

resumeContentFR.append(
  Collapsible(
    "pro-exp",
    "",
    `Expérience Professionnelle`,
    `
    <section id="Exp-pro">
  <div class="profesionnal--description">
    <h3>
      Octobre 2018 à janvier 2019 en CDD, puis février 2019 à juillet 2020 en
      CDI
    </h3>
    <div class="exp-content">
      <a href="https://latetedanslesnuages.com"
        ><img
          src="https://latetedanslesnuages.com/wp-content/themes/ltdn/assets/images/logo-footer.svg"
          alt="logo la tete dans les nuages"
          class="ltdn-logo"
          height="92"
          width="92"
      /></a>

      <p>
        <b
          >Conseiller loisirs dans le centre de loisirs familial "La Tête Dans
          Les Nuages" de Lyon Confluence (bowling, VR, Jeux arcade) :</b
        >
        <br />
        <br />
      </p>
      <li>Accueil, présentation du concept et de l'offre aux clients.</li>
      <li>Responsable de la fermeture en cas d’absence de la manager.</li>
      <li>Vente, techniques commerciales.</li>
      <li>Relationnel clients / conseillers / supérieurs.</li>
      <li>Maintenance basique des jeux mais aussi des caisses.</li>
    </div>
  </div>

  <div class="profesionnal--description">
    <h3>Février 2016 - 1 semaine</h3>
    <div class="exp-content">
      <a href="https://www.epitech.eu/"
        ><img
          src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png"
          alt="logo epitech"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b>Stage d'intégration à l'école Epitech Lyon :</b> Apprentissage de la
        programmation de base en C puis de la base de la création d’un jeu vidéo
        sur Unity. Ce stage m’a réellement conforté dans mon projet de
        travailler dans le domaine informatique.
      </p>
    </div>
  </div>
  <div class="profesionnal--description">
    <h3>Février 2015 - 1 semaine</h3>
    <div class="exp-content">
      <a href="https://www.pole-emploi.fr/accueil/"
        ><img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/1200px-Logo_P%C3%B4le_Emploi_2008.svg.png"
          alt="logo pole emploi"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b
          >Stage d'intégration au Service Informatique Régional Centre-Est
          (Service informatique de Pôle Emploi) :</b
        >
        Semaine d'intégration en entreprise au Service Informatique Régional
        Centre-Est d'Oullins avec découverte de différentes activités, du
        matériel et de leur fonction, mais aussi gestion et résolution
        d'incidents.
      </p>
    </div>
  </div>
</section>
`
  )
);

const test = Collapsible(
  "computers",
  "",
  `Informatiques`,
  `
  `
);

resumeContentFR.append(
  Collapsible(
    "skills",
    "",
    `Compétences`,
    `<section class="skills">` +
      Collapsible(
        "computers",
        "",
        `Informatiques`,
        `
        <div class="informatique">
          <div class="content">
            <p>HTML/CSS/SASS : Création de site web (Mon portfolio et les projets de ma formation chez OpenClassrooms)</p>
            <p>Création d’animations CSS</p>
            <p>Javascript : Frontend niveau avancé, backend niveau débutant.</p>
            <p>React/Vue/ViteJS : Création de sites communiquant avec des API</p>
            <p>Vegas Pro, Adobe Premiere Pro et Kdenlive : niveau opérationnel</p>
            <p>Adobe Photoshop : Photomontages et création de visuels</p>
            <p>Diffusion en direct : XSplit Broadcaster, OBS et dérivés</p>
            <p>
              Unreal Engine 4 & 5 et codage en blueprints : notions élémentaires
            </p>
            <p>Source Engine 1 & 2 : Notions élémentaires en Level Design</p>
            <p>Montage complet et maintenance de base d'un PC</p>
            <p>Installation et configuration d'un OS</p>
          </div>
        </div>`
      ).innerHTML +
      Collapsible(
        "soft-skills",
        "",
        `Soft Skills`,
        `
        <div class="soft-skills">
          <div class="content">
              <p>Adaptabilité</p>
              <p>Relation de confiance avec mes collaborateurs</p>
              <p>Résolution de différents types de problèmes (humains et matériels)</p>
              <p>Sens commercial</p>
              <p>Communication avec mes collègues et les clients.</p>
              <p>Autodidacte</p>
              <p>Immaginatif et créatif</p>
          </div>          
        </div>`
      ).innerHTML +
      Collapsible(
        "languages",
        "",
        `Langues`,
        `
          <div class="languages">
          <span class="collapsible">Linguistiques</span>
          <div class="content">
              <p>Anglais : niveu courant</p>
              <p>Polonais : Langue maternelle/Niveau basique (plus parlé que lu)</p>
          </div>
      </div>`
      ).innerHTML +
      `          
  </section>`
  )
);

resumeContentFR.append(
  Collapsible(
    "notable-projects",
    "",
    `Projets notables`,
    `
    <section id="projects">
        <div class="openclassroooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Création d’un réseau social d’entreprise avec express et VueJS (fullstack)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Portfolio personnel</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application de création de formulaires et d’exploitation des données (sondages, tableaux)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposition d’une application JQuery vers React</a></li>
        </div>
    </section>`
  )
);

resumeContentFR.append(
  Collapsible(
    "hobbies",
    "",
    `Centres d'intérêts`,
    `<section class="hobbies">` +
      Collapsible(
        "music",
        "",
        `Musique`,
        `
          <div class="hobby-desc">
              <p><b>2006 à 2014 (8 ans) - </b>Piano au Conservatoire à Rayonnement Régional de Lyon, pratiqué quotidiennement.
                  <b>2014 - </b>Brevet de fin de deuxième cycle de piano.</p>
              <p><b>2006 à 2013 (7 ans) - </b>Solfège au Conservatoire de Lyon.
                  <b>2013 - </b>Brevet de fin de deuxième cycle de solfège.</p>
              <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
              <p>Je possède également <i>l'oreille absolue !</i></p>
      </div>`
      ).innerHTML +
      Collapsible(
        "editing",
        "",
        `Montage`,
        `
        <div class="hobby-desc">
            <h3>Montage</h3>
            <p>Tournage et montage de différents courts métrages avec utilisation de fond vert</p>
            <p>Montage vidéo (sur Vegas, Premiere Pro et Kdenlive) pour des projets personnels.</p>
            <p>Montage photo (sur Photoshop) pour des projets personnels.
            <br><a class="modal-button" href="#photoModal">En savoir plus...</a></p>
        </div>
        ${
          Modal(
            "contact-modal",
            "Contact me",
            `
        <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Montage Photo</h2>
                </div>
                <div class="modal-body">
                    <span>J'aime beaucoup manipuler des logiciels de retouches tels que photoshop. Comme exemple concret, j'ai créé toutes les images de fond de ce site web. Il m'arrive également de faire quelques retouches "fantaisistes" (exemple mes photos de profil Facebook)</span>
                    <br>
                    <br>
                    <img alt="Twitch StreamKit" src="../src/img/streamkit.png" height=112 width=200 class="pp-fb">
                    <img alt="Photo de profil facebook 2" src="../src/img/facebook-pp-2.png" height=112 width=112 class="pp-fb">
                </div>
                <div class="modal-footer">
                    <br>
                </div>
            </div>
        `
          ).innerHTML
        }
        `
      ).innerHTML +
      Collapsible(
        "video-games",
        "",
        `Jeux Vidéo`,
        `
          <div class="hobby-desc">
            <h3>Jeu Vidéo</h3>
            <p>Apprentissage de différents logiciels de développement de jeux vidéo (Unreal Engine 4,  Source 1 et 2) en autodidacte.
                <br><a class="modal-button" href="#gamedevModal">En savoir plus...</a></p>
            <p>Fort intérêt pour les nouvelles technologies et notamment la réalité virtuelle et ses utilisations.</p>
        </div>`
      ).innerHTML +
      `          
  </section>`
  )
);
resumeContentFR.append(
  Collapsible(
    "charity",
    "",
    `Associatif`,
    `<section id="associatif">
      <div class="amnesty">
          <h3>Amnesty International</h3>
          <p>2015-2016 (Première S) - Action de solidarité Amnesty International, signature de pétitions pour défendre un prisonnier d'opinion.</p>            
      </div>
  </section>`
  )
);

export { resumeHeaderFR, resumeContentFR };
