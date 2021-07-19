<template>
  <div>
    <header class="header--resume">
      <div class="title">
        <h1>Welcome to my Portfolio</h1>
        <h2 class="portfolio--intro">
          Here you will find some examples of my creations
        </h2>
        <span class="parag1"
          >These are stored in categories so you will be able to look to the
          ones that interest you first. <br /><i
            >If the images of the gallery don't load, try to refresh the
            page.</i
          ></span
        >
      </div>
    </header>

    <div class="body">
      <b-button class="collapsible--button" v-b-toggle.collapse-photo>
        <h2 class="active">Photoraph editing</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-photo">
        <section id="photoshop">
          <div class="photo-block">
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
            <h3 class="description-video">Facebook profile picture</h3>
            <p class="description-video">
              Even though it doesn't make me look good, I enjoyed making this
              picture. I prefer something like this one rather than a personnal
              picture in the case of Facebook.
            </p>
          </div>

          <div class="photo-block">
            <div class="picture">
              <img
                class="pic-slides"
                src="@/assets/images/streamkit.png"
                style="height:200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/streamkit.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <div class="picture">
              <img
                class="pic-slides"
                src="@/assets/images/SkyyOne Overlayv2.png"
                style="height:200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/SkyyOne Overlayv2.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <h3 class="description-video">StreamKit</h3>
            <p class="description-video">
              As I'm rather often on the internet, and more precisely on Twitch,
              I had some occasions to help small streamers to customize their
              channel. Thanks to my work on photoshop, I created some visuals as
              little panels that go under their channel, but also some stream
              overlays.
            </p>
          </div>

          <div class="photo-block">
            <div class="picture">
              <img
                alt="Logos"
                src="@/assets/images/instin 280.png"
                height="200px"
                width="200px"
                class="pp-slides"
              />
              <div class="img-layer">
                <a href="@/assets/images/instin 280.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <div class="picture">
              <img
                class="pp-slides"
                src="@/assets/images/Charni2.png"
                style="height:200px"
                width="200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/Charni2.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <div class="picture">
              <img
                class="pp-slides"
                src="@/assets/images/DDP V6.png"
                style="height:200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/DDP V6.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <div class="picture">
              <img
                class="pp-slides"
                src="@/assets/images/Logo 2.png"
                style="height:200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/Logo 2.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <div class="picture">
              <img
                class="pp-slides"
                src="@/assets/images/Ryzer_Logo.png"
                style="height:200px"
              />
              <div class="img-layer">
                <a href="@/assets/images/Ryzer_Logo.png" target="_blank"
                  ><p class="img-ext-lnk">
                    <i class="fas fa-external-link-alt"></i></p
                ></a>
              </div>
            </div>

            <h3 class="description-video">Friends profile pictures</h3>
            <p class="description-video">
              Sometimes, I asked friends if they wanted to have new profile
              pictures for their social networks profile. For the most part, I
              used a style I have used on my personnal logo.
            </p>
          </div>

          <div class="photo-block">
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
            <h3 class="description-video">Company logo</h3>
            <p class="description-video">
              I also had the occasion to make the logo for Arca Soudure, a
              welding company.
            </p>
          </div>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-games>
        <h2 class="active">Video Games</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-games">
        <section class="videogames">
          <span class="description-gaming"
            >During my free time, I really enjoy discovering how games are made
            behind the scenes. That's why I spend time, apart from gaming, to
            manipulate and discover game dev tools of some of the games I play.
            I learned to use Unreal 4 by myself with Youtube tutorials, but also
            how to use the Source Engine (1 and 2) from Valve.<br />
            I don't really have a full project to show, however, I'm on a
            constant learning process. Here you can see some examples of my
            work.</span
          >
          <br />

          <b-button class="collapsible--button" v-b-toggle.collapse-source>
            <h2 class="active">Source² Engine (Half-Life: Alyx - jeu VR)</h2>
          </b-button>
          <b-collapse class="collapsible" id="collapse-source">
            <div class="games">
              <div class="content">
                <p class="description-video">
                  The Source² engine, although very new, shares many aspects of
                  its predecessor, on which I have spent a lot of time over the
                  past few years, learning Level Design techniques. I enjoyed
                  going back on it and deepening my basics. It is a tool that I
                  find very pleasant to use. <br />
                  The following example is a map for the game Half-Life Alyx
                  that I have been working on for a month. I continue my engine
                  learning process as I progress on the geometry of the map. I
                  learned to use some of the tools built into the engine:
                  <br />
                  - Tile Meshing: 3D models programmed to form user-defined
                  paths (e.g. pipes to walls, air ducts etc.) <br />
                  - 3D Skyboxes: use of an external map in order to "project" it
                  on the current map in order to optimize the render of the 3D
                  models by increasing their size. <br />
                  - Scripted Sequences (Entities allowing to script character
                  animations in order to make them perform a defined action)
                  <br />
                  - Dynamic lighting
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

                  <p class="description-video">
                    This video shows the beginning of one of the maps I made.
                    The pipes are placed with the <i>tile meshing</i> tool.
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

                  <p class="description-video">
                    This one shows scripted sequences. The creature (a
                    <i>headcrab</i>) that comes from behind the pillar is
                    "called" by and entity that makes it spawn on the map, and
                    another entity named "scripted sequence" makes it do the
                    animation I chose. Once this animation is done, the default
                    AI of the NPC takes the control back.
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

                  <p class="description-video">
                    Another example of a scripted sequence. Here, the
                    <i>zombie</i> (the name of these NPCs in the Half-Life
                    franchise) has an idle animation set (it is pointing the
                    light with its finger). Once the player touches a trigger I
                    placed in the map, the animation of the pointing stops and
                    the <i>zombie</i> has to walk to the second scripted
                    sequence. When he arrives at the second entity, an output of
                    this entity makes it go <i>ragdoll</i> (its body is free of
                    animation) and once he drops to the ground, another output
                    sets its health points to 0.
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

                  <p class="description-video">
                    The last example of a scripted sequence. This time, the when
                    the player approaches the door, a <i>trigger</i> triggers
                    the soldiers walk as well as the radio sound that plays
                    behind the door.
                  </p>
                </div>
                <div class="galerie">
                  <p class="description-gallerie">
                    Here is a gallery showing some screens of my work on Source²
                    engine.<br />
                    The pictures with a square ration comes from the VR view.
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
                    As a bonus, I managed to find some screenshots coming from
                    my older projects on Source 1. I was less experienced as
                    today but I think it might be interesting to see from where
                    I came from.
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
            <h2 class="active">Unreal Engine (4 and 5)</h2>
          </b-button>
          <b-collapse class="collapsible" id="collapse-unreal">
            <div class="games">
              <div class="content">
                <p class="description-video">
                  The Unreal Engine 4 might be the game engine on which I spend
                  most of my time learning game dev in general. While I was
                  concentrating on level design with the Source Engine, the UE4
                  allowed me to learn how to code and what was the logic behind
                  simple programs thanks to the blueprints visual coding system.
                  By following some online courses, I learnt how to create a
                  small 3D platform game (Knuckles Strike), that according to
                  the images, looks like a strange joke.
                  <br />More recently, I started to learn how to create VR
                  projects in UE4. I'm only starting to scratch the surface, but
                  I progress every day, and I learn fast.
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

                  <p class="description-video">
                    This video shows the first game I finished : It's based on a
                    course I followed about creating a 3D platform game. The
                    version I made differs from the example with the 3D models
                    and the sounds I used. I asked some friends to make
                    exagerated sounds to get an absurd result.
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

                  <p class="description-video">
                    For a small period of time (approximately 2 months), I
                    joined small team of people willing to develop a project
                    based on remaking some elements of Half-Life 2 on Unreal
                    Engine 4. I worked on some aspects of the project, mainly
                    the level design, and the map that is shown here is an
                    example of what I worked on.
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

                  <p class="description-video">
                    For fun and to discover other game dev disciplines, I tried
                    to animate the Half-Life² soldiers 3D model with the online
                    auto rigger and animator : Mixamo.
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

                  <p class="description-video">
                    This video shows a bug that happened when I imported the
                    animations of the zombie from Half-Life² in UE4. During my
                    experimentations, I often faced similar problems. This one
                    comes from the fact that Source games models animations are
                    not fixed in place, while Unreal system of actor is.
                  </p>
                </div>

                <div class="galerie">
                  <p class="description-gallerie">
                    Finally, this is another gallery showing this time, some
                    screens of some of the environnments I worked on.
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
                <p class="description-video">
                  Sometimes, I tried to use Blender to create 3D models. I never
                  deepened my knowledge in it but I still made some very simple
                  models (without textures).
                </p>
                <div class="video-block">
                  <img
                    class="blndpics"
                    src="@/assets/images/blender/1.png"
                    height="360px"
                  />

                  <p class="description-video">A vending machine</p>
                </div>

                <div class="video-block">
                  <img
                    class="blndpics"
                    src="@/assets/images/blender/2.png"
                    height="360px"
                  />

                  <p class="description-video">
                    A train engine and a passenger wagon (only the untextured
                    models)
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

<style lang="scss" scoped>
@import "@/modules/main";
</style>
