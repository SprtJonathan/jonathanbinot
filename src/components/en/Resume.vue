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
              Web developer - Available now
            </h2>
            <p class="descriptif">
              Passionate about computers and high tech since I was a child, I
              wish to work in web development while I follow lessons with
              OpenClassrooms. I can easily and quickly adapt to change and
              resolve issues that could occur while at work. You can access to
              some of my work by following this link :
              <a
                class="link"
                href="https://github.com/SprtJonathan"
                target="blank"
                >My GitHub profile</a
              >
            </p>
          </div>
        </article>

        <div class="title-info">
          <p>
            02/14/1999 (<span id="age">{{ this.$store.state.age }}</span> years
            old)
          </p>
          <p>
            <a class="link" href="mailto:contact@jonathanbinot.com"
              >Mail contact <i class="fas fa-external-link-alt"></i
            ></a>
          </p>
          <p>
            <a
              class="link"
              target="_blank"
              href="https://linkedin.com/in/jonathan-binot-260267154"
              >My LinkedIn profile <i class="fas fa-external-link-alt"></i
            ></a>
          </p>
          <p>Driving License (since 03/23/18)</p>
        </div>
      </section>
    </header>

    <div class="body">
      <b-button class="collapsible--button" v-b-toggle.collapse-school>
        <h2 class="active">School</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-school">
        <section id="Formation">
          <div class="frm-desc">
            <h3>2020 - 2021</h3>
            <p>
              OpenClassrooms : Web developer - RNCP level III diploma
              (second-year university level / degree level) :<br /><br />
              - Creation of web pages in HTML5 and CSS3<br />
              - Media content integration to web pages<br />
              - W3C standards<br />
              - Database managment
            </p>
          </div>

          <div class="frm-desc">
            <h3>2017 - 2018</h3>
            <p>
              First year of university of Mathematics and IT in the Université
              Claude Bernard Lyon 1 and validation of "Introduction to networks
              and web development", "Algorithm, imperative programming 101",
              "UNIX" et "Programming architecture 101" units.
            </p>
          </div>

          <div class="frm-desc">
            <h3>2017</h3>
            <p>
              Baccalaureate in science (Earth and life science with a specialty
              in Physics and Chemistry) with an average grade of 11.44/20 in
              lycée Saint Marc of Lyon.
            </p>
          </div>

          <div class="frm-desc">
            <h3>2013</h3>
            <p>Middle school patent with honors in collège Chevreul Sala.</p>
          </div>
        </section>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-pro>
        <h2 class="active">Professionnal Experience</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-pro">
        <section id="Exp-pro">
          <div class="exp-desc">
            <h3>
              October 2018 to january 2019 with a limited time contract, then
              february 2019 à july 2020 with an unlimited time contract
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
                  >Entertainment advisor in the family game center "La Tête Dans
                  Les Nuages" in Confluence mall in Lyon (bowling, VR, Arcade
                  games):
                </b>
                <br />
                <br />
                - Welcoming, presentation of the concept and the offer to the
                customers . <br />
                - Daily use of different machines, mini bowling, virtual reality
                games, arcade and mechanical bull. <br />
                - Responsible for closing the shop if there wasn't any manager.
                <br />
                - Sales, sales techniques <br />
                - Customer / advisor / superiors relationship. <br />
                - Basic game maintenance: VR recalibration, restarting
                applications, cleaning, unblocking bowling alleys, Air Hockey
                games, but also Embed checkouts.
              </p>
            </div>
          </div>

          <div class="exp-desc">
            <h3>February 2016 - 1 week</h3>
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
                <b>Internship in Epitech School in Lyon :</b> Learning of basic
                programming in C and of game development with Unity. This
                internship really reinforced my plan to work in the computer
                development.
              </p>
            </div>
          </div>
          <div class="exp-desc">
            <h3>February 2015 - 1 week</h3>
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
                <b>Internship in Pôle Emploi IT division :</b> Integration week
                in Pôle Emploi IT Service of Oullins where I discovered
                different activities such as tickets support and remote repair,
                the equipments and their function, but also the managment in
                this sector.
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
              <p>Microsoft Office (Word, Excel and Power Point)</p>
              <p>Magix Vegas Pro and Adobe Premiere Pro : operational level</p>
              <p>Adobe Photoshop : Image editing and visuals creation</p>
              <p>
                Live Streaming : XSplit Broadcaster, OBS and other softwares
              </p>
              <p>
                HTML/CSS/SASS :
              </p>
              <ul>
                <li>
                  <p>
                    Creation of websites (My portfolio and the projects of my
                    courses at OpenClassrooms)
                  </p>
                </li>
                <li><p>Creation of CSS animations</p></li>
                <li>
                  <p>
                    Validated the course during my first year in
                    Maths-Informatique
                  </p>
                </li>
              </ul>
              <p>
                Javascript/VueJS : Creation of an e-shop website, an entreprise
                social network and APIs. Projects validated.
              </p>
              <p>
                C/C++ : Validated the course during my first year in
                Maths-Informatique.
              </p>
              <p>Unreal Engine 4 and blueprints coding : Elementary notions</p>
              <p>Source Engine 1 & 2 : Elementary notions in Level Design</p>
              <p>Complete setup and maintenance of a PC</p>
              <p>Setup and configuration of an OS</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-projects>
          <h2 class="active">Projects</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-projects">
          <div class="projects">
            <div class="collapsible--content">
              <h3 class="collapsible--text">
                <mark class="blue-undeline">Val</mark>idated projects
              </h3>
              <p>Transform a sketch into a website</p>
              <p>Dynamise a webpage with CSS animations</p>
              <p>Optimize an existing website</p>
              <p>Create an e-shop</p>
              <p>
                Build a secure API for a food rate app
              </p>
              <p>
                Create an entreprise social network
              </p>

              <h3 class="collapsible--text">
                <mark class="blue-undeline">Pro</mark>jets personnels
              </h3>
              <p>Personal website</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-soft-skills>
          <h2 class="active">Soft Skills</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-soft-skills">
          <div class="soft-skills">
            <div class="collapsible--content">
              <p>Adaptation</p>
              <p>Confidence relation with my colleagues</p>
              <p>
                Resolution of different problems (human and hardware/software
                ones)
              </p>
              <p>Commercial sense</p>
              <p>Communication with my colleagues and clients.</p>
              <p>Self-taught</p>
              <p>Immaginative and creative</p>
            </div>
          </div>
        </b-collapse>

        <b-button class="collapsible--button" v-b-toggle.collapse-linguistics>
          <h2 class="active">Linguistics</h2>
        </b-button>
        <b-collapse class="collapsible" id="collapse-linguistics">
          <div class="langues">
            <div class="collapsible--content">
              <p>English: Bilingual</p>
              <p>German: level B1 LV2 (french baccalaureate certification)</p>
              <p>Polish: Mother tongue (spoken and read)</p>
            </div>
          </div>
        </b-collapse>
      </b-collapse>

      <b-button class="collapsible--button" v-b-toggle.collapse-hobby>
        <h2 class="active">Center of interest</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-hobby">
        <section id="interets">
          <div class="hobby-desc">
            <h3 class="collapsible--text">Music</h3>
            <p>
              <b>2006 to 2014 (8 years) - </b>Piano in the Conservatoire à
              Rayonnement Régional de Lyon, played on a daily basis.
              <b>2014 - </b>End of second cycle of piano patent.
            </p>
            <p>
              <b>2006 to 2013 (7 years) - </b>Music theory in the Conservatoire
              de Lyon. <b>2013 - </b>End of second cycle of music theory patent.
            </p>
            <p><b>Since 2014 - </b>Music in self-taught.</p>
            <p>I also have the <i>perfect pitch !</i></p>
          </div>
          <div class="hobby-desc">
            <h3 class="collapsible--text">Editing</h3>
            <p>
              Shooting and editing of some short films with the use of a green
              screen.
            </p>
            <p>
              Video editing (on Vegas and Premiere Pro) for personnal projects.
            </p>
            <p>
              Photograph editing (on Photoshop) for personnal projects.
              <br />
              <b-button v-b-modal.photoModal class="modal-button link">
                Learn more...
              </b-button>
            </p>
          </div>
          <div class="hobby-desc">
            <h3>Video games</h3>
            <p>
              Learning of different game dev softwares such as Unreal Engine 4,
              Source Engine 1 & 2, and more recently Unity on self-taught.
              <br />
              <b-button v-b-modal.gamedevModal class="modal-button link">
                Learn more...
              </b-button>
            </p>
            <p>
              High interest on new technilogies such as virtual reality and its
              use.
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
              <h2>Photograph editing</h2>
            </div>
            <div class="modal-body">
              <span
                >I really enjoy to manipulate editing softwares such as Adobe
                Photoshop. As a concrete example, I created every background
                image of this website from scratch. I also like to create funny
                images such as my Facebook profile picture</span
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
              <h2>Game dev</h2>
            </div>
            <div class="modal-body">
              <span
                >As a video game passionate, I was always interested by their
                creation. So, I started to learn how to use some game engines,
                like Unreal Engine 4 but also Valve's engines : Source 1 and
                more recently, with the release of Half-Life: Alyx in VR, Source
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
        <h2 class="active">Charity</h2>
      </b-button>
      <b-collapse class="collapsible" id="collapse-charity">
        <section id="associatif">
          <div class="amnesty">
            <h3>Amnesty International</h3>
            <p>
              2015-2016 (11th grade class) - Solidarity action with Amnesty
              International, signing petitions to defend a prisoner of
              conscience.
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
