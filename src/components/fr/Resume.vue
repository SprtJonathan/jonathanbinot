<template>
  <div>
    <header class="header--resume">
      <div class="title">
        <h1>JONATHAN BINOT</h1>
      </div>
      <section class="header--title">
        <article class="header--block">
          <img
            src="@/assets/images/PPCV.png"
            alt="Ma photo"
            class="header--block--img"
            height="92"
          />
          <div class="header--block--text">
            <h2 class="descriptif">
              Développeur web - Disponible immédiatement
            </h2>
            <p class="descriptif">
              Passionné d’informatique et du développement web et curieux des
              nouvelles technologies, je souhaite approfondir mes connaissances
              par la pratique en entreprise tout en suivant ma formation. Je
              m’adapte rapidement. Vous trouverez mes réalisations en suivant ce
              lien :
              <a
                class="link"
                href="https://github.com/SprtJonathan"
                target="blank"
                >Mon profil GitHub</a
              >
            </p>
          </div>
        </article>

        <div class="title-info">
          <p>
            14/02/1999 (<span id="age">{{ this.$store.state.age }}</span> ans)
          </p>
          <p>
            <a class="link" href="mailto:contact@jonathanbinot.com"
              >Me contacter par Mail <i class="fas fa-external-link-alt"></i
            ></a>
          </p>
          <p>
            <a
              class="link"
              target="_blank"
              href="https://linkedin.com/in/jonathan-binot-260267154"
              >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
            ></a>
          </p>
          <p>Permis B (depuis le 23/03/18)</p>
          <p>
            <a
              class="link"
              target="_blank"
              href="../../assets/documents/CV_Binot_Jonathan.pdf"
              >Version tronquée imprimable du CV<i
                class="fas fa-external-link-alt"
              ></i
            ></a>
          </p>
        </div>
      </section>
    </header>

    <div class="body">
      <b-button class="collapsible--button" v-b-toggle.collapse-school>
        <h2 class="active">Formation</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-school">
        <section id="Formation">
          <div class="frm-desc">
            <h3>2020 - 2021</h3>
            <p>
              OpenClassrooms : Développeur Web - Diplôme RNCP de Niveau III (Bac
              +2/3) :<br /><br />
              - Assemblage de pages web en HTML5 et CSS3<br />
              - Intégration de contenus multimédias dans le code<br />
              - Respect des normes W3C<br />
              - Gestion de base de données
            </p>
          </div>

          <div class="frm-desc">
            <h3>2017 - 2018</h3>
            <p>
              Première année de licence Maths-Informatique à l'Université Claude
              Bernard Lyon 1 et validation des UE "Introduction aux Réseaux et
              au Web", "Algorithmique Programmation Impérative, Initiation",
              "UNIX" et "Bases de l'architecture pour la programmation".
            </p>
          </div>

          <div class="frm-desc">
            <h3>2017</h3>
            <p>
              Baccalauréat général Scientifique SVT spécialité Physique-Chimie
              avec une moyenne de 11.44/20 au lycée Saint Marc de Lyon.
            </p>
          </div>

          <div class="frm-desc">
            <h3>2013</h3>
            <p>Brevet des collèges mention "Bien" au collège Chevreul Sala.</p>
          </div>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-pro>
        <h2 class="active">Expérience Professionnelle</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-pro">
        <section id="Exp-pro">
          <div class="exp-desc">
            <h3>
              Octobre 2018 à janvier 2019 en CDD, puis février 2019 à juillet
              2020 en CDI
            </h3>
            <div class="exp-content">
              <a href="https://latetedanslesnuages.com" target="_blank"
                ><img
                  src="@/assets/images/ltdn.png"
                  alt="logo la tete dans les nuages"
                  class="ltdn-logo"
                  height="92"
                  width="92"
              /></a>

              <p>
                <b
                  >Conseiller loisirs dans le centre de loisirs familial "La
                  Tête Dans Les Nuages" de Lyon Confluence (bowling, VR, Jeux
                  arcade) :</b
                >
                <br />
                <br />
                - Accueil, présentation du concept et de l'offre aux clients.
                <br />
                - Utilisation quotidienne de différentes machines, mini-bowling,
                jeux de réalité virtuelle, arcade et taureau mécanique. <br />
                - Responsable de la fermeture en cas d’absence de la manager.
                <br />
                - Vente, techniques commerciales <br />
                - Relationnel clients / conseillers / supérieurs. <br />
                - Maintenance basique des jeux : Recalibration VR, remise en
                marche des applications, nettoyage, déblocage des pistes de
                bowling, des jeux de palets, mais aussi des caisses.
              </p>
            </div>
          </div>

          <div class="exp-desc">
            <h3>Février 2016 - 1 semaine</h3>
            <div class="exp-content">
              <a href="https://www.epitech.eu/" target="_blank"
                ><img
                  src="@/assets/images/epitech-logo.jpg"
                  alt="logo epitech"
                  class="epitech-logo"
                  height="92"
                  width="92"
              /></a>
              <p>
                <b>Stage d'intégration à l'école Epitech Lyon :</b>
                Apprentissage de la programmation de base en C puis de la base
                de la création d’un jeu vidéo sur Unity. Ce stage m’a réellement
                conforté dans mon projet de travailler dans le domaine
                informatique.
              </p>
            </div>
          </div>
          <div class="exp-desc">
            <h3>Février 2015 - 1 semaine</h3>
            <div class="exp-content">
              <a href="https://www.pole-emploi.fr/accueil/" target="_blank"
                ><img
                  src="@/assets/images/pole-emploi-logo.png"
                  alt="logo pole emploi"
                  class="epitech-logo"
                  height="92"
                  width="92"
              /></a>
              <p>
                <b
                  >Stage d'intégration au Service Informatique Régional
                  Centre-Est (Service informatique de Pôle Emploi) :</b
                >
                Semaine d'intégration en entreprise au Service Informatique
                Régional Centre-Est d'Oullins avec découverte de différentes
                activités, du matériel et de leur fonction, mais aussi gestion
                et résolution d'incidents.
              </p>
            </div>
          </div>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-skills>
        <h2 class="active">Compétences</h2>
      </b-button>
      <b-collapse class="collapsible-skills" id="collapse-skills">
        <b-button class="collapsible--button" v-b-toggle.collapse-hard-skills>
          <h2 class="active">Hard Skills</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-hard-skills">
          <div class="informatique">
            <div class="collapsible--content">
              <p>Suite Microsoft Office (Word, Excel et Power Point)</p>
              <p>Magix Vegas Pro et Adobe Premiere Pro : niveau opérationnel</p>
              <p>Adobe Premiere Pro (notions solides)</p>
              <p>Adobe Photoshop : Photomontages et création de visuels</p>
              <p>Diffusion en direct : XSplit Broadcaster, OBS et dérivés</p>
              <p>
                HTML/CSS/SASS :
              </p>
              <ul>
                <li>
                  <p>
                    Création de site web (Mon portfolio et les projets de ma
                    formation chez OpenClassrooms)
                  </p>
                </li>
                <li><p>Création d’animations CSS</p></li>
                <li>
                  <p>UE validée en première année de Maths-Informatique</p>
                </li>
              </ul>
              <p>
                Javascript/VueJS : Création d’un site de e-commerce, d’un réseau
                social d’entreprise et d’API. Projets validés.
              </p>
              <p>C/C++ : UE validée en première année de Maths-Informatique.</p>
              <p>
                Unreal Engine 4 et codage en blueprints : notions élémentaires
              </p>
              <p>Source Engine 1 & 2 : Notions élémentaires en Level Design</p>
              <p>Montage complet et maintenance de base d'un PC</p>
              <p>Installation et configuration d'un OS</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-projects>
          <h2 class="active">Réalisations</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-projects">
          <div class="projects">
            <div class="collapsible--content">
              <h3 class="collapsible--text">
                <mark class="blue-undeline">Pro</mark>jets validés
              </h3>
              <p>Transformer une maquette en site web</p>
              <p>Dynamiser une page web avec des animations CSS</p>
              <p>Optimiser un site web existant</p>
              <p>Construisez un site e-commerce</p>
              <p>
                Construisez une API sécurisée pour une application d'avis
                gastronomiques
              </p>
              <p>
                Créez un réseau social d’entreprise
              </p>

              <h3 class="collapsible--text">
                <mark class="blue-undeline">Pro</mark>jets personnels
              </h3>
              <p>Site web personnel</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-soft-skills>
          <h2 class="active">Soft Skills</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-soft-skills">
          <div class="soft-skills">
            <div class="collapsible--content">
              <p>Adaptabilité</p>
              <p>Relation de confiance avec mes collaborateurs</p>
              <p>
                Résolution de différents types de problèmes (humains et
                matériels)
              </p>
              <p>Sens commercial</p>
              <p>Communication avec mes collègues et les clients.</p>
              <p>Autodidacte</p>
              <p>Immaginatif et créatif</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-linguistics>
          <h2 class="active">Linguistiques</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-linguistics">
          <div class="langues">
            <div class="collapsible--content">
              <p>Anglais : Compétence professionnelle</p>
              <p>Allemand : niveau B1 LV2</p>
              <p>Polonais : Langue maternelle (parlé et lu)</p>
            </div>
          </div>
        </b-collapse>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-hobby>
        <h2 class="active">Centres d'intérêt</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-hobby">
        <section id="interets">
          <div class="hobby-desc">
            <h3 class="collapsible--text">Musique</h3>
            <p>
              <b>2006 à 2014 (8 ans) - </b>Piano au Conservatoire à Rayonnement
              Régional de Lyon, pratiqué quotidiennement. <b>2014 - </b>Brevet
              de fin de deuxième cycle de piano.
            </p>
            <p>
              <b>2006 à 2013 (7 ans) - </b>Solfège au Conservatoire de Lyon.
              <b>2013 - </b>Brevet de fin de deuxième cycle de solfège.
            </p>
            <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
            <p>Je possède également <i>l'oreille absolue !</i></p>
          </div>
          <div class="hobby-desc">
            <h3 class="collapsible--text">Montage</h3>
            <p>
              Tournage et montage de différents courts métrages avec utilisation
              de fond vert
            </p>
            <p>
              Montage vidéo (sur Vegas et Premiere Pro) pour des projets
              personnels.
            </p>
            <p>
              Montage photo (sur Photoshop) pour des projets personnels.
              <br />
              <b-button v-b-modal.photoModal class="modal-button link">
                En savoir plus...
              </b-button>
            </p>
          </div>
          <div class="hobby-desc">
            <h3 class="collapsible--text">Jeu Vidéo</h3>
            <p>
              Apprentissage de différents logiciels de développement de jeux
              vidéo (Unreal Engine 4, Source 1 et 2) en autodidacte.
              <br />
              <b-button v-b-modal.gamedevModal class="modal-button link">
                En savoir plus...
              </b-button>
            </p>
            <p>
              Fort intérêt pour les nouvelles technologies et notamment la
              réalité virtuelle et ses utilisations.
            </p>
          </div>

          <!-- Photo Modal -->

          <!-- The Modal -->
          <b-modal
            id="photoModal"
            class="modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="Photo Modal"
            aria-hidden="true"
            hide-header
            hide-footer
          >
            <!-- Modal content -->

            <div class="modal-header">
              <h2>Montage Photo</h2>
            </div>
            <div class="modal-body">
              <span
                >J'aime beaucoup manipuler des logiciels de retouches tels que
                photoshop. Comme exemple concret, j'ai créé toutes les images de
                fond de ce site web. Il m'arrive également de faire quelques
                retouches "fantaisistes" (exemple mes photos de profil
                Facebook)</span
              >
              <br />
              <br />
              <img
                alt="Twitch StreamKit"
                src="@/assets/images/streamkit.png"
                height="112"
                width="200"
                class="pp-fb"
              />
              <img
                alt="Photo de profil facebook 2"
                src="@/assets/images/facebook-pp-2.png"
                height="112"
                width="112"
                class="pp-fb"
              />
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('photoModal')"
              >Fermer</b-button
            >
          </b-modal>

          <!-- Game Dev Modal -->
          <!-- The Modal -->
          <b-modal
            class="modal"
            id="gamedevModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="Game Dev Modal"
            aria-hidden="true"
            hide-header
            hide-footer
          >
            <!-- Modal content -->
            <div class="modal-header">
              <h2>Création Vidéoludique</h2>
            </div>
            <div class="modal-body">
              <span
                >Étant passionné par les jeux vidéo, j'ai toujours été fasciné
                par leur conception. J'ai donc appris, au fil des années, à
                utiliser quelques moteurs graphiques, notamment l'Unreal Engine
                4 mais surtout les moteurs de Valve : Source 1 et plus récemment
                avec l'arrivée d'Half-Life: Alyx en Réalité Virtuelle, Source
                2.</span
              >
              <br />
              <br />
              <a target="_blank" href="@/assets/images/Hammer_2_pic1.png"
                ><img
                  alt="Capture d'écran du logiciel Hammer de Source 2"
                  src="@/assets/images/Hammer_2_pic1.png"
                  height="260"
                  width="500"
                  class="gamedev-pic-left"
              /></a>
              <a target="_blank" href="@/assets/images/Hammer_2_pic2.png"
                ><img
                  alt="Capture d'écran du logiciel Hammer de Source 2 (2)"
                  src="@/assets/images/Hammer_2_pic2.png"
                  height="260"
                  width="500"
                  class="gamedev-pic-center"
              /></a>
              <a target="_blank" href="@/assets/images/Hammer_2_pic3.png"
                ><img
                  alt="Capture d'écran de ma map faite sur Source 2 dans Half-Life: Alyx"
                  src="@/assets/images/Hammer_2_pic3.png"
                  height="260"
                  width="260"
                  class="gamedev-pic-right"
              /></a>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('gamedevModal')"
              >Fermer</b-button
            >
          </b-modal>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-charity>
        <h2 class="active">Associatif</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-charity">
        <section id="associatif">
          <div class="amnesty">
            <h3>Amnesty International</h3>
            <p>
              2015-2016 (Première S) - Action de solidarité Amnesty
              International, signature de pétitions pour défendre un prisonnier
              d'opinion.
            </p>
          </div>
        </section>
      </b-collapse>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/modules/main";
</style>
