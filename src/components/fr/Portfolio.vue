<template>
  <div>
    <header class="header--resume">
      <div class="title">
        <h1>Bienvenue sur mon Portfolio</h1>
        <h2 class="portfolio--intro">
          Ici vous trouverez quelques exemples de mes réalisations
        </h2>
        <span class="parag1"
          >Ces dernières sont regroupées par domaines afin que vous puissiez
          consulter celles qui vous intéressent en premier. <br /><i
            >Si les images des galeries ne chargent pas, tentez d'actualiser la
            page.</i
          ></span
        >
      </div>
    </header>

    <div class="body">
      <b-button class="collapsible--button" v-b-toggle.collapse-photo>
        <h2 class="active">Montage photo</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-photo">
        <section id="photoshop">
          <div class="portfolio--photo-block">
            <div class="picture">
              <a href="@/assets/images/facebook-pp-2.png" target="_blank"
                ><img
                  alt="Photo de profil facebook 2"
                  src="@/assets/images/facebook-pp-2.png"
                  height="200px"
                  width="200px"
                  class="pp-fb"
                />
                <div class="img-layer">
                  <p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i>
                  </p>
                </div>
              </a>
            </div>
            <h3 class="portfolio--description-video">
              Photo de profil Facebook
            </h3>
            <p class="portfolio--description-video">
              Malgré le fait qu'elle ne me mette pas en valeur, j'ai apprécié
              faire cette photo de profil. Je préfère celà à une photo
              personnelle dans le cas de Facebook.
            </p>
          </div>

          <div class="portfolio--photo-block">
            <splide class="splide" :options="options">
              <splide-slide class="picture">
                <img class="pic-slides" src="@/assets/images/streamkit.png" />
              </splide-slide>

              <splide-slide class="picture">
                <img
                  class="pic-slides"
                  src="@/assets/images/SkyyOne Overlayv2.png"
                />
              </splide-slide>
            </splide>

            <h3 class="portfolio--description-video">StreamKit</h3>
            <p class="portfolio--description-video">
              Plutôt présent sur internet et plus précisemment sur Twitch, j'ai
              eu plusieurs occasions d'aider des petits streamers à
              personnaliser leur chaîne, notamment grâce à mon utilisation de
              Photoshop. Je leur ai réalisé divers visuels, sous forme de
              tuiles, mais également d'overlays pour leurs streams (image
              superposée au flux vidéo).
            </p>
          </div>

          <div class="portfolio--photo-block">
            <splide class="splide--photo" :options="options">
              <splide-slide class="picture">
                <img
                  alt="Logos"
                  src="@/assets/images/instin 280.png"
                  height="200px"
                  width="200px"
                  class="pp-slides"
                />
              </splide-slide>

              <splide-slide class="picture">
                <img
                  class="pp-slides"
                  src="@/assets/images/Charni2.png"
                  style="height:200px"
                  width="200px"
                />
              </splide-slide>

              <splide-slide class="picture">
                <img
                  class="pp-slides"
                  src="@/assets/images/DDP V6.png"
                  style="height:200px"
                />
              </splide-slide>

              <splide-slide class="picture">
                <img
                  class="pp-slides"
                  src="@/assets/images/Logo 2.png"
                  style="height:200px"
                />
              </splide-slide>

              <splide-slide class="picture">
                <img
                  class="pp-slides"
                  src="@/assets/images/Ryzer_Logo.png"
                  style="height:200px"
                />
              </splide-slide>
            </splide>

            <h3 class="portfolio--description-video">
              Photos de profils d'amis
            </h3>
            <p class="portfolio--description-video">
              Il m'est arrivé plusieurs fois de proposer à mes amis des photos
              de profils pour les réseaux sociaux vidéoludiques. Pour la
              plupart, je me suis amusé à réutiliser un style que j'avais en
              premier utilisé sur mon propre logo.
            </p>
          </div>

          <div class="portfolio--photo-block">
            <div class="picture">
              <a href="@/assets/images/ArcaLogo3.png" target="_blank"
                ><img
                  alt="Photo de profil facebook 2"
                  src="@/assets/images/ArcaLogo3.png"
                  height="200px"
                  width="200px"
                  class="pp-fb"
                />
                <div class="img-layer">
                  <p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i>
                  </p>
                </div>
              </a>
            </div>
            <h3 class="portfolio--description-video">Logo d'entreprise</h3>
            <p class="portfolio--description-video">
              En plus de faire des logos pour les photos de profils d'amis, j'ai
              également eu l'occasion de réaliser le logo de la société Arca
              Soudure.
            </p>
          </div>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-games>
        <h2 class="active">Jeu vidéo</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-games">
        <section class="videogames">
          <span class="description-gaming"
            >Pendant mon temps libre, en plus du jeu, j'apprécie beaucoup
            découvrir l'envers du décor. C'est pour cela que je passe du temps à
            apprendre à manipuler les outils de développements de quelques jeux.
            Récemment j'ai surtout approfondi ma connaissance de l'Unreal Engine
            4, appris en autodidacte, mais également du moteur Source ² de
            Valve.<br />
            Je n'ai pas réellement de projet abouti à montrer cependant je suis
            dans un processus d'apprentissage constant, vous pourrez voir
            quelques exemples</span
          >
          <br />

          <b-button class="collapsible--button" v-b-toggle.collapse-source>
            <h2 class="active">Source² Engine (Half-Life: Alyx - jeu VR)</h2>
          </b-button>
          <b-collapse class="collapsible" id="collapse-source">
            <div class="games">
              <div class="content">
                <p class="portfolio--description-video">
                  Le moteur Source², bien que tout récent, partage de nombreux
                  aspects de son prédécesseur, sur lequel j'ai passé beaucoup de
                  temps au cours de ces dernières années, à apprendre des
                  techniques de Level Design. J'ai pris un immense plaisir à y
                  retourner et à approfondir mes bases. C'est un outil que je
                  trouve très agréable à prendre en mains. <br />
                  L'exemple suivant est une carte pour le jeu Half-Life Alyx sur
                  laquelle je travail depuis un mois. Je continue mon processus
                  d'apprentissage du moteur au fur et à mesure que je progresse
                  sur la géométrie de la map. J'ai appris à utiliser quelques
                  uns des outils intégrés au moteur :
                  <br />- Tile Meshing : modèles 3D programmés pour former des
                  cheminements définis par l'utilisateur (par exemple, les
                  tuyaux aux murs, les conduits d'aérations etc.) <br />- Skybox
                  3D : utilisation d'une map externe afin de la "projeter" sur
                  la map en cours afin d'optimiser l'affichage des modèles 3D à
                  distance en les zoomant. <br />- Scripted Sequences (Des
                  entités permettant de scripter les animations de personnages
                  afin de leur faire réaliser une action définie) <br />-
                  L'éclairage dynamique
                </p>
                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/hla_quarantine_map_start.webm"
                      type="video/webm"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Cette vidéo montre le début de la map, les tuyaux visibles
                    ont étés placés grâce à l'outil de <i>tile meshing</i>
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/hla_quarantine_map_hc.webm"
                      type="video/webm"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Ici il est question de séquence scriptée. La créature (un
                    <i>headcrab</i>) qui arrive du pilier est "appelée" par une
                    entité qui la fait apparaître, et une autre entité (nommée
                    "scripted sequence") se charge de lui faire faire son
                    animation. Une fois l'animation terminée, l'intelligence
                    artificelle par défaut du <i>headcrab</i> reprend la main.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/hla_quarantine_map_fallingZmb.webm"
                      type="video/webm"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Un autre exemple de séquence scriptée. Ici le
                    <i>zombie</i> (nom donnée à ces presonnages non jouables
                    dans le jeu Half-Life) effectue une animation de base (il
                    pointe le projecteur du doigt). Une fois que le joueur passe
                    la zone de détection (trigger), l'animation du pointage
                    s'arrête et le <i>zombie</i> doit rejoindre la deuxième
                    séquence scriptée en marchant. Arrivé à celle-ci, un output
                    (une sortie activée lorsque le <i>zombie</i> arrive à
                    destination) le fait <i>ragdoll</i> (active la physique du
                    modèle 3D, ce qui cause sa chute). Une fois arrivé au sol,
                    un autre output met sa valeur de vie à 0.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/hla_quarantine_map_combine.webm"
                      type="video/webm"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Dernier exemple de séquence scriptée. Cette fois-ci lorsque
                    le joueur s'approche de la porte, un
                    <i>trigger</i> déclenche la marche des soldats ainsi que le
                    son de la radio qui se joue derrière la porte.
                  </p>
                </div>
                <div class="galerie">
                  <p class="description-gallerie">
                    Voici enfin une galerie montrant quelques photos de mon
                    travail sur le moteur Source².<br />
                    Les images en format carré proviennent de captures faite en
                    réalité virtuelle.
                  </p>
                  <iframe
                    src="https://albumizr.com/a/aoq9"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen
                    width="700"
                    height="400"
                  ></iframe>
                </div>

                <div class="galerie">
                  <p class="description-gallerie">
                    En bonus, j'ai recherché d'anciennes images provenant d'un
                    de mes projets sur le moteur Source premier du nom. J'étais
                    moins expérimenté qu'aujourd'hui, mais je pense qu'il peut
                    être intéressant de voir par où je suis passé.
                  </p>
                  <iframe
                    src="https://albumizr.com/a/T-Lf"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen
                    width="700"
                    height="400"
                  ></iframe>
                </div>
              </div>
            </div>
          </b-collapse>

          <b-button class="collapsible--button" v-b-toggle.collapse-unreal>
            <h2 class="active">Unreal Engine (4 et 5)</h2>
          </b-button>
          <b-collapse class="collapsible" id="collapse-unreal">
            <div class="games">
              <div class="content">
                <p class="portfolio--description-video">
                  L'Unreal Engine 4 doit être le moteur graphique sur lequel
                  j'ai passé le plus de temps à apprendre le développement en
                  général. Alors que je me concentrais davantage sur le level
                  design avec le moteur Source, l'UE4 m'a permis de commencer à
                  coder grâce au système de blueprints (programmation visuelle)
                  intégré au moteur. En suivant plusieurs cours en ligne, j'ai
                  appris à créer un petit jeu de plateforme (Knuckles Strike),
                  qui d'après les images, ressemble à une étrange blague.
                  <br />Plus récemment, je me suis mis à apprendre à utiliser
                  l'Unreal Engine 4 afin de créer des projets en réalité
                  virtuelle. Je n'en suis qu'à mes balbutiements dans le
                  domaine, mais je progresse de jours en jours, j'apprends vite.
                </p>
                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/KnucklesStrike.webm"
                      type="video/webm"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Cette vidéo montre le premier jeu que j'ai terminé : il
                    s'agit d'un cours sur la création d'un jeu de plateforme 3D
                    que j'ai suivi, la version que j'ai reproduit diffère
                    simplement par les modèles 3D et sons utilisés, j'ai demandé
                    à des amis de de faire des sons exagérés pour rendre le
                    résultat encore plus louphoque.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/LostCoastMap.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Pendant une période d'environ 2 mois, j'avais rejoint une
                    petite équipe de personne souhaitant développer un projet
                    basé sur la refonte de certains éléments du jeu Half-Life 2
                    sur Unreal Engine 4. J'ai travaillé sur quelques aspects du
                    projet, principalement le level design, et la map présentée
                    est un exemple de ce sur quoi j'ai travaillée.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/LostCoastCombine.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Pour m'amuser et découvrir d'autres facettes du
                    développement, j'ai tenté d'animer le modèle 3D des soldats
                    de Half-Life 2 à partir de l'animateur en ligne Mixamo.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/LostCoastZombie.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Cette vidéo montre un bug étant survenu lorsque j'ai porté
                    les animations du zombie de Half-Life² dans Unreal. Durant
                    mes expérimentations, il m'arrivait souvent de me retrouver
                    face à des problèmes du même type.
                  </p>
                </div>

                <div class="video-block">
                  <video
                    id="player"
                    playsinline
                    controls
                    width="640"
                    height="360"
                  >
                    <source
                      src="@/assets/videos/LostCoastZombie.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <p class="portfolio--description-video">
                    Cette vidéo montre un bug étant survenu lorsque j'ai porté
                    les animations du zombie de Half-Life² dans Unreal. Durant
                    mes expérimentations, il m'arrivait souvent de me retrouver
                    face à des problèmes du même type.
                  </p>
                </div>

                <div class="galerie">
                  <p class="description-gallerie">
                    Voici enfin une galerie de quelques photos prises sur Unreal
                    montrant quelques environnements sur lesquels j'ai
                    travaillé.
                  </p>
                  <iframe
                    src="https://albumizr.com/a/jV6B"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen
                    width="700"
                    height="400"
                  ></iframe>
                </div>
              </div>
            </div>
          </b-collapse>

          <b-button class="collapsible--button" v-b-toggle.collapse-blender>
            <h2 class="active">Blender</h2>
          </b-button>
          <b-collapse class="collapsible" id="collapse-blender">
            <div class="games">
              <div class="content">
                <p class="portfolio--description-video">
                  Il m'est arrivé par moments d'apprendre à utiliser Blender
                  pour créer des modèles 3D. Je n'ai jamais approfondi mes
                  connaissances dans ce domaine mais j'ai tout de même fait
                  quelques modèles simples (sans textures).
                </p>
                <div class="video-block">
                  <img
                    class="blndpics"
                    src="@/assets/images/blender/1.png"
                    height="360px"
                  />

                  <p class="portfolio--description-video">
                    Un distributeur automatique
                  </p>
                </div>

                <div class="video-block">
                  <img
                    class="blndpics"
                    src="@/assets/images/blender/2.png"
                    height="360px"
                  />

                  <p class="portfolio--description-video">
                    Une locomotive et des wagons (uniquement les modèles non
                    texturés)
                  </p>
                </div>
              </div>
            </div>
          </b-collapse>
        </section>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        rewind: true,
        type: "loop",
        focus: "center",
        autoplay: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/modules/main";
</style>
