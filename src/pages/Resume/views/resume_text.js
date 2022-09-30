let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

const resumeHeaderText = {
  fr: {
    resumeHeaderName: `JONATHAN BINOT`,
    resumeDescription: `Développeur web Frontend - Disponible immédiatement`,
    resumeIntroText: `Passionné d’informatique et du développement web et curieux des nouvelles
    technologies, je souhaite approfondir mes connaissances par la pratique en
    entreprise tout en suivant ma formation. Je m’adapte rapidement. Vous
    trouverez mes réalisations sur la page portfolio et sur mon github à cette
    adresse :
    <a href="http://github.com/SprtJonathan" target="_blank"
      >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
    ></a>`,
    resumeIntroAge: `14/02/1999 (${age} ans)`,
    resumeIntroContact: `<a href="mailto:jonathanbinot@gmail.com"
    >Me contacter par Mail <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroLinkedin: `<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
    >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroDrivingLicense: `Permis B (depuis le 23/03/18)`,
  },
  en: {
    resumeHeaderName: `JONATHAN BINOT`,
    resumeDescription: `Frontend web developer - Available now`,
    resumeIntroText: `Passionate about computers, high tech and video games since I was a child, I wish to work in web development as it’s a 
    domain I really enjoy. I can easily and quickly adapt to change and resolve issues that could occur at work.
    You can check out my work on my portfolio and on my Github profile :
  <a href="http://github.com/SprtJonathan" target="_blank"
    >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroAge: `02/14/1999 (${age} years old)`,
    resumeIntroContact: `<a href="mailto:jonathanbinot@gmail.com"
  >Send me an email <i class="fas fa-external-link-alt"></i
></a>`,
    resumeIntroLinkedin: `<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
  >My LinkedIn profile <i class="fas fa-external-link-alt"></i
></a>`,
    resumeIntroDrivingLicense: `Driving license (since 03/23/18)`,
  },
};

const resumeContentText = {
  fr: {
    formationTitle: `Formation`,
    openclassroomsFrontend: `
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
    </p>`,
    openclassroomsWebdev: `
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
    </p>`,
    university: `
    <h3>2017 - 2018</h3>
    <p>
      <b
        >Première année de licence Maths-Informatique à l'Université Claude
        Bernard Lyon 1</b
      >
      et validation des UE "Introduction aux Réseaux et au Web", "Algorithmique
      Programmation Impérative, Initiation", "UNIX" et "Bases de l'architecture
      pour la programmation".
    </p>`,
    baccalaureate: `
    <h3>2017</h3>
    <p>
      <b>Baccalauréat général Scientifique SVT spécialité Physique-Chimie</b>
      avec une moyenne de 11.44/20 au lycée Saint Marc de Lyon.
    </p>`,
    patent: `
    <h3>2013</h3>
    <p><b>Brevet des collèges</b> mention "Bien" au collège Chevreul Sala.</p>`,
    /**/
    professionalExperienceTitle: `Expérience Professionnelle`,
    proExpLTDN: `
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
    </div>`,
    proExpEpitech: `
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
    </div>`,
    proExpPoleEmploi: `
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
    </div>`,
    /**/
    skillsTitle: `Compétences`,
    computerSkillsTitle: `Informatiques`,
    computerSkillsContent: `
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
    </div>`,
    softSkillsTitle: `Soft Skills`,
    softSkillsContent: `
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
    </div>`,
    languagesSkillsTitle: `Linguistiques`,
    languagesSkillsContent: `
    <div class="content">
        <p>Anglais : niveu courant</p>
        <p>Polonais : Langue maternelle/Niveau basique (plus parlé que lu)</p>
    </div>`,
    /**/
    notableProjectsTitle: `Projets notables`,
    notableProjectsContent: `
        <div class="openclassroooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Création d’un réseau social d’entreprise avec express et VueJS (fullstack)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Portfolio personnel</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application de création de formulaires et d’exploitation des données (sondages, tableaux)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposition d’une application JQuery vers React</a></li>
        </div>`,
    /**/
    hobbieesSectionTitle: `Centres d'intérêts`,
    hobbiesMusicTitle: `Musique`,
    hobbiesMusicContent: `
    <div class="hobby-desc">
    <p><b>2006 à 2014 (8 ans) - </b>Piano au Conservatoire à Rayonnement Régional de Lyon, pratiqué quotidiennement.
        <b>2014 - </b>Brevet de fin de deuxième cycle de piano.</p>
    <p><b>2006 à 2013 (7 ans) - </b>Solfège au Conservatoire de Lyon.
        <b>2013 - </b>Brevet de fin de deuxième cycle de solfège.</p>
    <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
    <p>Je possède également <i>l'oreille absolue !</i></p>
    </div>`,
    hobbiesEditingTitle: `Montage`,
    hobbiesEditingContent: `
        <h3>Montage</h3>
        <p>Tournage et montage de différents courts métrages avec utilisation de fond vert</p>
        <p>Montage vidéo (sur Vegas, Premiere Pro et Kdenlive) pour des projets personnels.</p>
        <p>Montage photo (sur Photoshop) pour des projets personnels.`,
    hobbiesEditingModalTitle: `Montage Photo`,
    hobbiesEditingModalContent: `J'aime beaucoup manipuler des logiciels de retouches tels que photoshop. Comme exemple concret, j'ai créé toutes les images de fond de ce site web. Il m'arrive également de faire quelques retouches "fantaisistes" (exemple mes photos de profil Facebook)`,
    hobbiesGamesTitle: `Jeu vidéo`,
    hobbiesGamesContent: `
    <h3>Jeu Vidéo</h3>
    <p>Apprentissage de différents logiciels de développement de jeux vidéo (Unreal Engine 4,  Source 1 et 2) en autodidacte.
    <p>Fort intérêt pour les nouvelles technologies et notamment la réalité virtuelle et ses utilisations.</p>`,
    hobbiesGamesModalTitle: `Création Vidéoludique`,
    hobbiesGamesModalContent: `Étant passionné par les jeux vidéo, j'ai toujours été fasciné par leur conception. J'ai donc appris, au fil des années, à utiliser quelques moteurs graphiques, notamment l'Unreal Engine 4 mais surtout les moteurs de Valve : Source 1 et plus récemment avec l'arrivée d'Half-Life: Alyx en Réalité Virtuelle, Source 2.`,
    knowMoreText: `En savoir plus...`,
    charitySectionTitle: `Associatif`,
    charitySectionContent: `
    <section id="associatif">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Première S) - Action de solidarité Amnesty International, signature de pétitions pour défendre un prisonnier d'opinion.</p>            
    </div>
    </section>`,
  },
  en: {
    formationTitle: `Formation`,
    openclassroomsFrontend: `
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
    </p>`,
    openclassroomsWebdev: `
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
    </p>`,
    university: `
    <h3>2017 - 2018</h3>
    <p>
      <b
        >Première année de licence Maths-Informatique à l'Université Claude
        Bernard Lyon 1</b
      >
      et validation des UE "Introduction aux Réseaux et au Web", "Algorithmique
      Programmation Impérative, Initiation", "UNIX" et "Bases de l'architecture
      pour la programmation".
    </p>`,
    baccalaureate: `
    <h3>2017</h3>
    <p>
      <b>Baccalauréat général Scientifique SVT spécialité Physique-Chimie</b>
      avec une moyenne de 11.44/20 au lycée Saint Marc de Lyon.
    </p>`,
    patent: `
    <h3>2013</h3>
    <p><b>Brevet des collèges</b> mention "Bien" au collège Chevreul Sala.</p>`,
    /**/
    professionalExperienceTitle: `Expérience Professionnelle`,
    proExpLTDN: `
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
    </div>`,
    proExpPoleEmploi: `
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
    </div>`,
    proExpEpitech: `
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
    </div>`,
    /**/
    skillsTitle: `Compétences`,
    computerSkillsTitle: `Informatiques`,
    computerSkillsContent: `
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
  </div>`,
    softSkillsTitle: `Soft Skills`,
    softSkillsContent: `
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
    </div>`,
    languagesSkillsTitle: `Linguistiques`,
    languagesSkillsContent: `
    <div class="content">
        <p>Anglais : niveu courant</p>
        <p>Polonais : Langue maternelle/Niveau basique (plus parlé que lu)</p>
    </div>`,
    /**/
    notableProjectsTitle: `Projets notables`,
    notableProjectsContent: `
    <section id="projects">
        <div class="openclassroooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Création d’un réseau social d’entreprise avec express et VueJS (fullstack)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Portfolio personnel</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application de création de formulaires et d’exploitation des données (sondages, tableaux)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposition d’une application JQuery vers React</a></li>
        </div>
    </section>`,
    /**/
    hobbieesSectionTitle: `Centres d'intérêts`,
    hobbiesMusicTitle: `Musique`,
    hobbiesMusicContent: `
    <div class="hobby-desc">
    <p><b>2006 à 2014 (8 ans) - </b>Piano au Conservatoire à Rayonnement Régional de Lyon, pratiqué quotidiennement.
        <b>2014 - </b>Brevet de fin de deuxième cycle de piano.</p>
    <p><b>2006 à 2013 (7 ans) - </b>Solfège au Conservatoire de Lyon.
        <b>2013 - </b>Brevet de fin de deuxième cycle de solfège.</p>
    <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
    <p>Je possède également <i>l'oreille absolue !</i></p>
    </div>`,
    hobbiesEditingTitle: `Montage`,
    hobbiesEditingContent: `
        <h3>Montage</h3>
        <p>Tournage et montage de différents courts métrages avec utilisation de fond vert</p>
        <p>Montage vidéo (sur Vegas, Premiere Pro et Kdenlive) pour des projets personnels.</p>
        <p>Montage photo (sur Photoshop) pour des projets personnels.`,
    hobbiesEditingModalTitle: `Montage Photo`,
    hobbiesEditingModalContent: `J'aime beaucoup manipuler des logiciels de retouches tels que photoshop. Comme exemple concret, j'ai créé toutes les images de fond de ce site web. Il m'arrive également de faire quelques retouches "fantaisistes" (exemple mes photos de profil Facebook)`,
    hobbiesGamesTitle: `Jeu vidéo`,
    hobbiesGamesContent: `
    <h3>Jeu Vidéo</h3>
    <p>Apprentissage de différents logiciels de développement de jeux vidéo (Unreal Engine 4,  Source 1 et 2) en autodidacte.
    <p>Fort intérêt pour les nouvelles technologies et notamment la réalité virtuelle et ses utilisations.</p>`,
    hobbiesGamesModalTitle: `Création Vidéoludique`,
    hobbiesGamesModalContent: `Étant passionné par les jeux vidéo, j'ai toujours été fasciné par leur conception. J'ai donc appris, au fil des années, à utiliser quelques moteurs graphiques, notamment l'Unreal Engine 4 mais surtout les moteurs de Valve : Source 1 et plus récemment avec l'arrivée d'Half-Life: Alyx en Réalité Virtuelle, Source 2.`,
    knowMoreText: `En savoir plus...`,
    charitySectionTitle: `Associatif`,
    charitySectionContent: `
    <section id="associatif">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Première S) - Action de solidarité Amnesty International, signature de pétitions pour défendre un prisonnier d'opinion.</p>            
    </div>
    </section>`,
  },
};

export { resumeHeaderText, resumeContentText };
