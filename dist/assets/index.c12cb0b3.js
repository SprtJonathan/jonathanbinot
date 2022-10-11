(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=c(a);fetch(a.href,n)}})();const e=(t,o,c,i,a,n)=>{const s=document.createElement(t);for(const[r,p]of Object.entries(o))s.setAttribute(r,p);return a&&s.addEventListener(a,n),s.innerHTML=c,i&&i.appendChild(s),s};function j(t,o){o!=null?(t.classList.add("active"),t.classList.remove("invisible")):(t.classList.remove("active"),t.classList.add("invisible"))}function qe(t,o,c){t||(t=[]);for(let i=0;i<t.length;i++){const a=e("li",{},"",c);e("a",{class:"link",href:t[i]},o[i],a)}}function F(t,o,c,i,a){const n=t,s=o;let r,p;!i||i==""?r="modal":r=i,a?p="--"+a:p="";const h=e("div",{id:n,class:r+"--container--base"},"",""),v=e("div",{class:r+"--container"},"",h),g=e("div",{class:r+"--content"+p},"",v);a?e("div",{class:r+p},"",g):e("div",{class:r+"--blur"},"",g);const x=e("div",{class:r+"--header"},"",g);(s!=""||s!=null)&&e("h2",{class:r+"--header--text"},s,x);const d=e("button",{type:"button",id:"close-modal",class:r+"--exit"+p},'<i class="fa fa-close"></i>',x);return e("div",{class:r+"--body"},"",g).append(c),{htmlCode:h,closeButton:d}}const be={fr:{resumeTitle:"Mon CV",portfolioTitle:"Portfolio",contactTitle:"Contact",languageTitle:"Langue",contactHeader:"Contactez moi",contactForm:`
    <form class="contact-form">
      <div class="contact-form--buttons">
          <!--<input type="submit" id="send-email" class="button button--base"  value="Envoyer"/>      
          <button id="close-modal-cancel" class="button button--base--inverted">Annuler</button>-->
          <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
          >Me contacter par Mail <i class="fas fa-external-link-alt"></i
        ></a>
      </div>      
    </form>`},en:{resumeTitle:"Resume",portfolioTitle:"Portfolio",contactTitle:"Contact",languageTitle:"Language",contactHeader:"Contact me",contactForm:`
    <form class="contact-form">
      <div class="contact-form--buttons">
          <!--<input type="submit" id="send-email" class="button button--base"  value="Envoyer"/>      
          <button id="close-modal-cancel" class="button button--base--inverted">Annuler</button>-->
          <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
          >Send me an Email <i class="fas fa-external-link-alt"></i
        ></a>
      </div>      
    </form>`}},oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGCUlEQVR42u3WMRGAMBREwc8MDpCAhtiKhQQRKaMHCUihxQG0ybBbX3XViwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIApLZ+LvZWIqK5iFCWnqDk5gmHcrcfduiMYSd2u83gbrD4CgP8RAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKbwAL+dECbjzP1iAAAAAElFTkSuQmCC",ne="/assets/EN.a947de3b.png";function st(t){const o=t,c=localStorage.getItem("language");let i;c==="fr"?i=be.fr:i=be.en;const a=document.createElement("nav");a.setAttribute("class","navbar"),a.setAttribute("id","navbar-container");const n=document.createElement("div");n.setAttribute("id","display-menu-button"),n.setAttribute("class","navbar--toggle"),n.innerHTML='<i class="navbar--toggle--icon fa-solid fa-bars" id="display-menu-icon"></i>',n.addEventListener("click",f=>{(f.target.id==="display-menu-button"||f.target.id==="display-menu-icon")&&nt()});const s=document.createElement("div");s.setAttribute("class","hidden navbar--menu"),s.setAttribute("id","navbar"),a.append(s);let r="navbar--button",p="navbar--button",h="navbar--button";(f=>{f=="/home"||f=="/"?(r="navbar--button active-page",p="navbar--button",h="navbar--button"):f=="/resume"?(r="navbar--button",p="navbar--button active-page",h="navbar--button"):f=="/portfolio"&&(r="navbar--button",p="navbar--button",h="navbar--button active-page")})(o);const g=e("ul",{id:"navbar-buttons-block",class:"navbar--block"},"",s);e("div",{class:"modal--blur"},"",g);const x=e("li",{class:"navbar--li"},"",g);e("a",{id:"home",class:r,href:"/"},'<i class="fa-solid fa-house"></i>',x);const d=e("li",{class:"navbar--li"},"",g);e("a",{id:"resume",class:p,href:"/resume"},i.resumeTitle,d);const y=e("li",{class:"navbar--li"},"",g);e("a",{id:"portfolio",class:h,href:"/portfolio"},i.portfolioTitle,y);const I=e("li",{class:"navbar--li"},"",g),Xe=e("a",{id:"contact-button",class:"navbar--button",href:"#contact"},i.contactTitle,I),Ae=e("li",{class:"navbar--li"},"",g),Ze=e("a",{id:"language-menu-button",class:"navbar--button",href:"#language-selection"},i.languageTitle,Ae),ge=e("div",{id:"language-menu",class:"hidden"},"",Ae),et=e("a",{class:"navbar--button",href:"#"},`<img id="select-fr" class="language-flag" src="${oe}" width=48 height=48>`,ge),tt=e("a",{class:"navbar--button",href:"#"},`<img id="select-en" class="language-flag" src="${ne}" width=48 height=48>`,ge);Xe.addEventListener("click",f=>{f.preventDefault(),j(P.htmlCode,s)}),Ze.addEventListener("click",f=>{f.preventDefault(),ot()}),et.addEventListener("click",()=>{he("fr")}),tt.addEventListener("click",()=>{he("en")});const at=e("div",{},i.contactForm,""),P=F("contact-modal",i.contactHeader,at);a.append(n),a.append(P.htmlCode);function ot(){document.getElementById("language-menu").className==="hidden"?document.getElementById("language-menu").className="navbar--li--dropdown":document.getElementById("language-menu").className="hidden"}function he(f){console.log("Changement en "+f),localStorage.setItem("language",f),location.reload()}P.closeButton.addEventListener("click",()=>{j(P.htmlCode)});let K=!1;function nt(){K=!K,it()}function it(){K?(document.getElementById("navbar").className="navbar--menu",document.getElementById("display-menu-icon").className="navbar--toggle--icon--after fa-solid fa-bars"):(document.getElementById("navbar").className="navbar--slided navbar",document.getElementById("display-menu-icon").className="navbar--toggle--icon fa-solid fa-bars")}return a}const rt="/assets/javascript.8dac5379.svg",fe="/assets/oc-logo.26deeb94.png";let lt=new Date("02/14/1999"),ct=Date.now()-lt.getTime(),dt=new Date(ct),pt=dt.getUTCFullYear();const ve=Math.abs(pt-1970),ye={fr:{homepageIntroName:"Jonathan Binot",homepageIntroJob:"D\xE9veloppeur web - Frontend - Applications JS",homepageIntroSummary:"Bienvenue sur mon site web personnel.<br /> Diverses pages vous sont ici propos\xE9es, vous y trouverez mon CV en fran\xE7ais et en anglais, ainsi que mon portfolio dans les deux langues \xE9galement.<br /> Mais avant tout, qui suis-je?",homepageIntroIntroduction:`Je m'appelle Jonathan Binot, j'ai <span id="age">${ve}</span> ans et je
suis titulaire d'un dipl\xF4me de d\xE9veloppeur web de niveau Bac +2 mais
\xE9galement de d\xE9veloppeur d'applications Javascript
<img src="${rt}" height="18px" /> de niveau Bac +3 obtenus avec
OpenClassrooms <img src="${fe}" height="18px" />.<br /><br />Depuis
tout petit, je suis passionn\xE9 d'informatique et de jeux vid\xE9o, si bien que
j'ai d\xE9cid\xE9 de me donner les moyens de travailler dans le domaine.
L'informatique \xE9tant tr\xE8s vaste, il y a deux disciplines pour lesquelles
j'ai envie de m'investir professionnellement : <br /><br />`,homepageWebdevTitle:'<mark class="blue-underline text-light">Le d\xE9velop</mark>pement web',homepageGamedevTitle:'<mark class="blue-underline text-light">Le d\xE9velop</mark>pement de jeux vid\xE9o',homepageIntroObectivesGame:`Motiv\xE9 pour atteindre mes objectifs, j'ai commenc\xE9 tr\xE8s t\xF4t \xE0 apprendre en
autodidacte, avec mon ordinateur et les logiciels de d\xE9veloppement \xE0 ma
disposition. J'ai commenc\xE9 sur FPS Creator (mais cette partie l\xE0 ne compte
pas vraiment) puis avec l'\xE9diteur de niveaux de Half-Life\xB2 en regardant
des tutoriels vid\xE9o en ligne. Les ann\xE9es passant, j'ai commenc\xE9 \xE0 me
diversifier au niveau de mon apprentissage, en d\xE9couvrant l'Unreal Engine
3 (avec UDK) puis l'Unreal Engine 4.<br /><br />J'ai \xE9galement \xE9t\xE9
int\xE9ress\xE9 par l'apprentissage de diff\xE9rents logiciels de montage photo et
vid\xE9o (comme Photoshop, Sony Vegas, Adobe Premiere etc.), que je continue
\xE0 utiliser r\xE9guli\xE8rement aujourd'hui. <br /><br />
Enfin, avec la sortie de Half-Life: Alyx en VR ainsi que de ses outils de
d\xE9veloppement, j'ai d\xE9couvert le d\xE9veloppement sur Source\xB2 Engine (qui
poss\xE8de de fortes similitudes avec son pr\xE9d\xE9cesseur de 2003) cette fois-ci. <br /><br />J'appr\xE9cie fortement apprendre de nouvelles
techniques, et d\xE9couvrir tout ce qu'il est possible de faire avec les
moteurs de jeu modernes.`,homepageIntroObjectivesWeb:`Pour ce qui est du d\xE9veloppement web, j'ai d\xE9couvert cette discipline lors
de ma premi\xE8re ann\xE9e \xE0 la fac Math\xE9matiques-Infomratique de Lyon. Le
cursus universitaire ne m'a malheureusement pas plu, mais l'unit\xE9
d'enseignement "Introduction aux r\xE9seaux et au web" m'a fortement
interess\xE9e. Gr\xE2ce \xE0 elle, j'ai d\xE9couvert le potentiel des langages HTML et
CSS et apr\xE8s un an en tant que salari\xE9 dans la salle d'arcade familiale La
T\xEAte dans les Nuages, je me suis donn\xE9 pour objectif de r\xE9aliser un site
web personnel sur lequel se trouverait mon CV ainsi qu'une vitrine de mes
r\xE9alisations. J'ai recommenc\xE9 \xE0 apprendre en autodidacte gr\xE2ce notamment
aux cours gratuits en ligne sur le d\xE9veloppement web.
<br />
<br />
Aujourd'hui, vous vous trouvez sur la page d'accueil de ce site, et si
vous avez pris le temps de lire ce texte, je vous en remercie et j'esp\xE8re
que vous comprenez ma determination \xE0 r\xE9aliser mes objectifs au travers de
l'alternance.
<br />
<br />
Vous avez maintenant le choix d'acc\xE9der \xE0 mon CV, \xE0 mon portfolio ou \xE0 me
contacter directement en cliquant sur l'un des liens du menu en haut de la
page. Bonne visite.`},en:{homepageIntroName:"Jonathan Binot",homepageIntroJob:"Web developer - Frontend - JS Apps",homepageIntroSummary:"Welcome to my personnal website<br /> Different pages are available here, you will find my resume in English and in French, as well as my portfolio in the two languages too.<br /> But before anything else, who am I?",homepageIntroIntroduction:`My name is Jonathan Binot, I'm <span id="age">${ve}</span> year old and I
    have a degree in web development with a level of Bachelor + 2, but also a
    degree in web development with a level of Bachelor +3/4 with OpenClassrooms
    <img src="${fe}" height="18px" />.<br /><br />
    Since I was a child, I'm passionate about computer technology and video
    games, that's why I decided to give myself the means to work in the sector.
    Computer tech being a vast domain, there are two disciplins in which I would
    like to invest professionnaly : <br /><br />`,homepageWebdevTitle:'<mark class="blue-underline text-light">Web</mark> development',homepageGamedevTitle:'<mark class="blue-underline text-light">Gam</mark>e development',homepageIntroObectivesGame:`Motivated to achieve my goals, I started learning on my own very early, with
    my computer and the software I had at my disposal. I started with FPS
    Creator (but that part doesn't really count) then with the Half-Life\xB2 level
    editor by watching video tutorials online. As the years went by, I started
    to learn new things, by discovering Unreal Engine 3 (with UDK) then Unreal
    Engine 4. Motiv\xE9 pour atteindre mes objectifs, j'ai commenc\xE9 tr\xE8s t\xF4t \xE0
    apprendre en autodidacte, avec mon ordinateur et les logiciels de
    d\xE9veloppement \xE0 ma disposition. J'ai commenc\xE9 sur FPS Creator (mais cette
    partie l\xE0 ne compte pas vraiment) puis avec l'\xE9diteur de niveaux de
    Half-Life\xB2 en regardant des tutoriels vid\xE9o en ligne.
    <br /><br />More recently, I found a passion for virtual reality and I was
    finally able to invest in quality equipment thanks to the job I had found.
    Finally, with the release of Half-Life: Alyx in VR as well as its
    development tools, I discovered the development on Source\xB2 Engine (which has
    strong similarities with its predecessor from 2003) this time and I Also
    discovered the basics of virtual reality development on Unreal Engine 4 and
    the basics of the Unity engine less than a month ago. <br /><br />I really
    enjoy learning new techniques, and discovering all that is possible to do
    with modern game engines.`,homepageIntroObjectivesWeb:`As for web development, I discovered this discipline during my first year of
    university at the Mathematics-Computer Science high school of Lyon.
    Unfortunately, I did not like the way the university worked and the
    mathematics course we were learning, but the teaching unit "Introduction to
    networks and web dev" really interested me. Thanks to this, I discovered the
    potential of HTML and CSS and after a year as an employee in the family
    arcade room "La T\xEAte dans les Nuages", I set myself the goal of creating a
    personal website on which would be my resume and a showcase of my
    achievements in the form of a portfolio. I started to learn on my own again
    thanks to the free Openclassrooms lessons in particular.
    <br />
    <br />
    Today you are on the home page of this website, and if you have taken the
    time to read this text, I thank you and I hope you understand my
    determination to achieve my goals through the work-study program.
    <br />
    <br />
    You now have the choice to access my resume, my portfolio or contact me
    directly by clicking on one of the menu links at the top of the page. Enjoy
    your visit.`}},ut="/assets/webdev.80d57f03.png",mt="/assets/gamedev.52403ad6.png",At=localStorage.getItem("language");let S;At==="fr"?S=ye.fr:S=ye.en;const B=e("div",{class:"homepage--content",id:"homepage-content"},"",""),gt=e("section",{id:"summary",class:"intro--section intro--name"},"",B),Pe=e("div",{class:"homepage--title--block"},"",gt),ht=e("h1",{class:"text-light"},"",Pe);e("mark",{class:"text-light blue-underline"},S.homepageIntroName,ht);e("h2",{class:"text-light"},S.homepageIntroJob,Pe);const bt=e("section",{class:"intro--section intro--summary"},"",B),ft=e("div",{class:"intro--inner-text--block"},"",bt);e("p",{class:"intro--inner-text"},S.homepageIntroSummary,ft);const vt=e("section",{class:"intro--section intro--introduction",style:"background-color: #1e1e1e"},"",B);e("p",{class:"intro--inner-text"},S.homepageIntroIntroduction,vt);const De=e("section",{class:"intro--section intro--type webdev"},"",B);e("span",{class:"text-light"},S.homepageWebdevTitle,De);e("img",{class:"intro--type--image",src:ut,height:"30%",alt:"Web development illustration picture"},"",De);const Me=e("section",{class:"intro--section intro--type gamedev"},"",B);e("img",{class:"intro--type--image",src:mt,height:"30%",alt:"Game development illustration picture"},"",Me);e("span",{class:"text-light"},S.homepageGamedevTitle,Me);const yt=e("section",{class:"intro--section intro--objectives--game"},"",B);e("p",{class:"intro--objectives--text"},S.homepageIntroObectivesGame,yt);const kt=e("section",{class:"intro--section intro--objectives--web"},"",B);e("p",{class:"intro--objectives--text"},S.homepageIntroObjectivesWeb,kt);const ke="/assets/homepage-bg-1.cb525e19.jpg",Ct="/assets/homepage-bg-3_frame.035043af.png",wt=`
  <div id="homepage-background" class="homepage--background">
  <div id="background-1" class="hidden homepage--background homepage--background--bluepurple" style="background-image: url(${ke})"></div>
  <div id="background-2" class="hidden homepage--background homepage--background--darkgrey" style="background-image: url(${Ct})"></div>
  <div id="background-3" class="hidden homepage--background homepage--background--yelloworange"></div>
  <div id="background-4" class="hidden homepage--background homepage--background--greenblue"></div>
  <video id="background-5" class="hidden" autoplay muted loop id="myVideo">
  <source class="mp4-source" autoplay="true" src="https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4">
  </video>
  <div id="background-6" class="homepage--background" style="background-image: url(${ke})"></div>
  </div>
  `;function Ce(){const t=document.createElement("main");t.setAttribute("class","homepage"),t.setAttribute("id","homepage"),t.appendChild(B),t.innerHTML+=wt;function o(){const c=window.innerHeight;c>=window.pageYOffset?(document.getElementById("background-1").className="homepage--background homepage--background--image",document.getElementById("background-2").className="hidden homepage--background homepage--background--image",document.getElementById("background-3").className="hidden homepage--background homepage--background--image",document.getElementById("background-4").className="hidden homepage--background homepage--background--image",document.getElementById("background-5").className="hidden",document.getElementById("background-6").className="hidden homepage--background",console.log("1 fois "+window.pageYOffset)):c*3>=window.pageYOffset&&window.pageYOffset>=c?(document.getElementById("background-1").className="hidden homepage--background homepage--background--image",document.getElementById("background-2").className="homepage--background homepage--background--image",document.getElementById("background-3").className="hidden homepage--background homepage--background--image",document.getElementById("background-4").className="hidden homepage--background homepage--background--image",document.getElementById("background-5").className="hidden",document.getElementById("background-6").className="hidden homepage--background",console.log("1 fois "+window.pageYOffset)):c*5>=window.pageYOffset&&window.pageYOffset>=c*3&&(document.getElementById("background-1").className="hidden homepage--background homepage--background--image",document.getElementById("background-2").className="hidden homepage--background homepage--background--image",document.getElementById("background-3").className="hidden homepage--background homepage--background--image",document.getElementById("background-4").className="hidden homepage--background homepage--background--image",document.getElementById("background-5").className="homepage--background",document.getElementById("background-6").className="hidden homepage--background",console.log("4 fois "+window.pageYOffset))}return document.addEventListener("scroll",function(){window.location.pathname.split("/")[2]==""&&o()}),t}function k(t,o,c,i){let a=!1,n=o;(o==""||o==null)&&(n="collapsible");const s=document.createElement("div");s.setAttribute("id",t),s.setAttribute("class",n+"--container");const r=document.createElement("span");r.setAttribute("id","collapsible-"+t+"-icon"),r.setAttribute("class",n+"--title--text--chevron"),r.innerHTML='<i class="fa-solid fa-chevron-down"></i>';const p=document.createElement("div");p.setAttribute("id",t+"-title"),p.setAttribute("class",n+"--title--container");const h=document.createElement("div");h.setAttribute("class",n+"--title"),h.innerHTML=`<span class=collapsibleClassName + "--title--text">${c} </span>`,h.append(r),p.appendChild(h),s.appendChild(p);const v=document.createElement("div");v.setAttribute("id",t+"-content-container"),v.setAttribute("class",n+"--content--container");const g=document.createElement("div");g.setAttribute("id",t+"-content"),g.setAttribute("class",n+"--content"),g.append(i),v.appendChild(g),s.appendChild(v),p.addEventListener("click",d=>{x()});function x(){a?(v.classList.remove("active"),v.style.maxHeight="0px",r.classList=n+"--title--text--chevron",a=!a):(v.classList.add("active"),v.style.maxHeight="100vh",r.classList=n+"--title--text--chevron--upside-down",a=!a)}return s}let It=new Date("02/14/1999"),St=Date.now()-It.getTime(),xt=new Date(St),Et=xt.getUTCFullYear();const we=Math.abs(Et-1970),Ie={fr:{resumeHeaderName:"JONATHAN BINOT",resumeDescription:"D\xE9veloppeur web Frontend - Disponible imm\xE9diatement",resumeIntroText:`Passionn\xE9 d\u2019informatique et du d\xE9veloppement web et curieux des nouvelles
    technologies, je souhaite approfondir mes connaissances par la pratique en
    entreprise tout en suivant ma formation. Je m\u2019adapte rapidement. Vous
    trouverez mes r\xE9alisations sur la page portfolio et sur mon github \xE0 cette
    adresse :
    <a href="http://github.com/SprtJonathan" target="_blank"
      >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
    ></a>`,resumeIntroAge:`14/02/1999 (${we} ans)`,resumeIntroContact:`<a href="mailto:jonathanbinot@gmail.com"
    >Me contacter par Mail <i class="fas fa-external-link-alt"></i
  ></a>`,resumeIntroLinkedin:`<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
    >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
  ></a>`,resumeIntroDrivingLicense:"Permis B (depuis le 23/03/18)"},en:{resumeHeaderName:"JONATHAN BINOT",resumeDescription:"Frontend web developer - Available now",resumeIntroText:`Passionate about computers, high tech and video games since I was a child, I wish to work in web development as it\u2019s a 
    domain I really enjoy. I can easily and quickly adapt to change and resolve issues that could occur at work.
    You can check out my work on my portfolio and on my Github profile :
  <a href="http://github.com/SprtJonathan" target="_blank"
    >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
  ></a>`,resumeIntroAge:`02/14/1999 (${we} years old)`,resumeIntroContact:`<a href="mailto:jonathanbinot@gmail.com"
  >Send me an email <i class="fas fa-external-link-alt"></i
></a>`,resumeIntroLinkedin:`<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
  >My LinkedIn profile <i class="fas fa-external-link-alt"></i
></a>`,resumeIntroDrivingLicense:"Driving license (since 03/23/18)"}},Se={fr:{formationTitle:"Formation",openclassroomsFrontend:`
    <h3>2022</h3>
    <p>
      <b
        >OpenClassrooms : D\xE9veloppeur Frontend - Dipl\xF4me RNCP de Niveau VI (Bac
        +3/4) : </b
      ><br /><br />
      <li>Analyser les besoins</li>
      <li>Impl\xE9menter des mockups avec du code de qualit\xE9</li>
      <li>Optimiser le temps de chargement des pages</li>
      <li>Utilisation de frameworks, notamment React</li>
    </p>`,openclassroomsWebdev:`
    <h3>2020</h3>
    <p>
      <b
        >OpenClassrooms : D\xE9veloppeur Web - Dipl\xF4me RNCP de Niveau III (Bac
        +2/3) :</b
      ><br /><br />
      <li>Assemblage de pages web en HTML5 et CSS3</li>
      <li>Int\xE9gration de contenus multim\xE9dias dans le code</li>
      <li>Respect des normes W3C</li>
      <li>Gestion de base de donn\xE9es</li>
    </p>`,university:`
    <h3>2017 - 2018</h3>
    <p>
      <b
        >Premi\xE8re ann\xE9e de licence Maths-Informatique \xE0 l'Universit\xE9 Claude
        Bernard Lyon 1</b
      >
      et validation des UE "Introduction aux R\xE9seaux et au Web", "Algorithmique
      Programmation Imp\xE9rative, Initiation", "UNIX" et "Bases de l'architecture
      pour la programmation".
    </p>`,baccalaureate:`
    <h3>2017</h3>
    <p>
      <b>Baccalaur\xE9at g\xE9n\xE9ral Scientifique SVT sp\xE9cialit\xE9 Physique-Chimie</b>
      au lyc\xE9e Saint Marc de Lyon.
    </p>`,professionalExperienceTitle:"Exp\xE9rience Professionnelle",proExpLTDN:`
    <h3>
      Octobre 2018 \xE0 janvier 2019 en CDD, puis f\xE9vrier 2019 \xE0 juillet 2020 en
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
          >Conseiller loisirs dans le centre de loisirs familial "La T\xEAte Dans
          Les Nuages" de Lyon Confluence (bowling, VR, Jeux arcade) :</b
        >
        <br />
        <br />
      </p>
      <li>Accueil, pr\xE9sentation du concept et de l'offre aux clients.</li>
      <li>Responsable de la fermeture en cas d\u2019absence de la manager.</li>
      <li>Vente, techniques commerciales.</li>
      <li>Relationnel clients / conseillers / sup\xE9rieurs.</li>
      <li>Maintenance basique des jeux mais aussi des caisses.</li>
    </div>`,proExpEpitech:`
    <h3>F\xE9vrier 2016 - 1 semaine</h3>
    <div class="exp-content">
      <a href="https://www.epitech.eu/"
        ><img
          src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png"
          alt="logo epitech"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b>Stage d'int\xE9gration \xE0 l'\xE9cole Epitech Lyon :</b> Apprentissage de la
        programmation de base en C puis de la base de la cr\xE9ation d\u2019un jeu vid\xE9o
        sur Unity. Ce stage m\u2019a r\xE9ellement confort\xE9 dans mon projet de
        travailler dans le domaine informatique.
      </p>
    </div>`,proExpPoleEmploi:`
    <h3>F\xE9vrier 2015 - 1 semaine</h3>
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
          >Stage d'int\xE9gration au Service Informatique R\xE9gional Centre-Est
          (Service informatique de P\xF4le Emploi) :</b
        >
        Semaine d'int\xE9gration en entreprise au Service Informatique R\xE9gional
        Centre-Est d'Oullins avec d\xE9couverte de diff\xE9rentes activit\xE9s, du
        mat\xE9riel et de leur fonction, mais aussi gestion et r\xE9solution
        d'incidents.
      </p>
    </div>`,skillsTitle:"Comp\xE9tences",computerSkillsTitle:"Informatiques",computerSkillsContent:`
    <div class="content">
      <p>HTML/CSS/SASS : Cr\xE9ation de site web (Mon portfolio et les projets de ma formation chez OpenClassrooms)</p>
      <p>Cr\xE9ation d\u2019animations CSS</p>
      <p>Javascript : Frontend niveau avanc\xE9, backend niveau d\xE9butant.</p>
      <p>React/Vue/ViteJS : Cr\xE9ation de sites communiquant avec des API</p>
      <p>Vegas Pro, Adobe Premiere Pro et Kdenlive : niveau op\xE9rationnel</p>
      <p>Adobe Photoshop : Photomontages et cr\xE9ation de visuels</p>
      <p>Diffusion en direct : XSplit Broadcaster, OBS et d\xE9riv\xE9s</p>
      <p>
        Unreal Engine 4 & 5 et codage en blueprints : notions \xE9l\xE9mentaires
      </p>
      <p>Source Engine 1 & 2 : Notions \xE9l\xE9mentaires en Level Design</p>
      <p>Montage complet et maintenance de base d'un PC</p>
      <p>Installation et configuration d'un OS</p>
    </div>`,softSkillsTitle:"Soft Skills",softSkillsContent:`
    <div class="soft-skills">
    <div class="content">
        <p>Adaptabilit\xE9</p>
        <p>Relation de confiance avec mes collaborateurs</p>
        <p>R\xE9solution de diff\xE9rents types de probl\xE8mes (humains et mat\xE9riels)</p>
        <p>Sens commercial</p>
        <p>Communication avec mes coll\xE8gues et les clients.</p>
        <p>Autodidacte</p>
        <p>Immaginatif et cr\xE9atif</p>
    </div>          
    </div>`,languagesSkillsTitle:"Linguistiques",languagesSkillsContent:`
    <div class="content">
        <p>Anglais : niveu courant</p>
        <p>Polonais : Langue maternelle/Niveau basique (plus parl\xE9 que lu)</p>
    </div>`,notableProjectsTitle:"Projets notables",notableProjectsContent:`
        <div class="openclassroooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Cr\xE9ation d\u2019un r\xE9seau social d\u2019entreprise avec express et VueJS (fullstack)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Portfolio personnel</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application de cr\xE9ation de formulaires et d\u2019exploitation des donn\xE9es (sondages, tableaux)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposition d\u2019une application JQuery vers React</a></li>
        </div>`,hobbiesSectionTitle:"Centres d'int\xE9r\xEAts",hobbiesMusicTitle:"Musique",hobbiesMusicContent:`
    <div class="hobby-desc">
    <p><b>2006 \xE0 2014 (8 ans) - </b>Piano au Conservatoire \xE0 Rayonnement R\xE9gional de Lyon, pratiqu\xE9 quotidiennement.
        <b>2014 - </b>Brevet de fin de deuxi\xE8me cycle de piano.</p>
    <p><b>2006 \xE0 2013 (7 ans) - </b>Solf\xE8ge au Conservatoire de Lyon.
        <b>2013 - </b>Brevet de fin de deuxi\xE8me cycle de solf\xE8ge.</p>
    <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
    <p>Je poss\xE8de \xE9galement <i>l'oreille absolue !</i></p>
    </div>`,hobbiesEditingTitle:"Montage",hobbiesEditingContent:`
        <h3>Montage</h3>
        <p>Tournage et montage de diff\xE9rents courts m\xE9trages avec utilisation de fond vert</p>
        <p>Montage vid\xE9o (sur Vegas, Premiere Pro et Kdenlive) pour des projets personnels.</p>
        <p>Montage photo (sur Photoshop) pour des projets personnels.`,hobbiesEditingModalTitle:"Montage Photo",hobbiesEditingModalContent:`J'aime beaucoup manipuler des logiciels de retouches tels que photoshop. Comme exemple concret, j'ai cr\xE9\xE9 toutes les images de fond de ce site web. Il m'arrive \xE9galement de faire quelques retouches "fantaisistes" (exemple mes photos de profil Facebook)`,hobbiesGamesTitle:"Jeu vid\xE9o",hobbiesGamesContent:`
    <h3>Jeu Vid\xE9o</h3>
    <p>Apprentissage de diff\xE9rents logiciels de d\xE9veloppement de jeux vid\xE9o (Unreal Engine 4,  Source 1 et 2) en autodidacte.
    <p>Fort int\xE9r\xEAt pour les nouvelles technologies et notamment la r\xE9alit\xE9 virtuelle et ses utilisations.</p>`,hobbiesGamesModalTitle:"Cr\xE9ation Vid\xE9oludique",hobbiesGamesModalContent:"\xC9tant passionn\xE9 par les jeux vid\xE9o, j'ai toujours \xE9t\xE9 fascin\xE9 par leur conception. J'ai donc appris, au fil des ann\xE9es, \xE0 utiliser quelques moteurs graphiques, notamment l'Unreal Engine 4 mais surtout les moteurs de Valve : Source 1 et plus r\xE9cemment avec l'arriv\xE9e d'Half-Life: Alyx en R\xE9alit\xE9 Virtuelle, Source 2.",knowMoreText:"En savoir plus...",charitySectionTitle:"Associatif",charitySectionContent:`
    <section id="associatif">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Premi\xE8re S) - Action de solidarit\xE9 Amnesty International, signature de p\xE9titions pour d\xE9fendre un prisonnier d'opinion.</p>            
    </div>
    </section>`},en:{formationTitle:"Training",openclassroomsFrontend:`
    <h3>2022</h3>
    <p>
      <b
        >OpenClassrooms: Frontend Developer - Level VI RNCP Diploma (Bac
        +3/4): </b
      ><br /><br />
      <li>Analyze needs</li>
      <li>Implement mockups with quality code</li>
      <li>Optimize page load time</li>
      <li>Use of frameworks, including React</li>
    </p>`,openclassroomsWebdev:`
    <h3>2020</h3>
    <p>
      <b
        >OpenClassrooms: Web Developer - Level III RNCP Diploma (Bac
        +2/3):</b
      ><br /><br />
      <li>Assembling web pages in HTML5 and CSS3</li>
      <li>Integrating multimedia content into the code</li>
      <li>Compliance with W3C standards</li>
      <li>Database management</li>
    </p>`,university:`
    <h3>2017 - 2018</h3>
    <p>
      <b
        >First year of Maths-Computer science degree at Claude University
        Bernard Lyon 1</b
      >
      and validation of the teaching units "Introduction to Networks and the Web", "Algorithms
      Imperative Programming, Initiation", "UNIX" and "Basics of architecture
      for programming".
    </p>`,baccalaureate:`
    <h3>2017</h3>
    <p>
      <b>General Scientific Baccalaureate SVT specialty Physics-Chemistry</b>
      at Saint Marc high school in Lyon.
    </p>`,professionalExperienceTitle:"Professional Experience",proExpLTDN:`
    <h3>
      October 2018 to January 2019 on fixed-term contracts, then February 2019 to July 2020 on
      CDI
    </h3>
    <div class="exp-content">
      <a href="https://latetedanslesnuages.com"
        ><img
          src="https://latetedanslesnuages.com/wp-content/themes/ltdn/assets/images/logo-footer.svg"
          alt="head in the clouds logo"
          class="ltdn-logo"
          height="92"
          width="92"
      /></a>

      <p>
        <b
          >Customer advisor in the family entertainement center "La T\xEAte Dans
          Les Nuages" at Lyon Confluence (bowling, VR, arcade games):</b
        >
        <br />
        <br />
      </p>
      <li>Reception, presentation of the concept and the offer to customers.</li>
      <li>Responsible for closing the center in the absence of the manager.</li>
      <li>Sales and sales techniques.</li>
      <li>Good relations with clients / colleagues / managers.</li>
      <li>Basic maintenance of the games but also of the automated checkouts.</li>
    </div>`,proExpPoleEmploi:`
    <h3>February 2016 - 1 week</h3>
    <div class="exp-content">
      <a href="https://www.epitech.eu/"
        ><img
          src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png"
          alt="epitech logo"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b>Internship at the Epitech Lyon school:</b> Learning the
        basic programming in C then the basics of creating a video game
        in Unity. This internship really strengthened me in my project of
        work in the computer field.
      </p>
    </div>`,proExpEpitech:`
    <h3>February 2015 - 1 week</h3>
    <div class="exp-content">
      <a href="https://www.pole-emploi.fr/accueil/"
        ><img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/1200px-Logo_P%C3%B4le_Emploi_2008.svg.png"
          alt="job center logo"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b
          >Integration internship at the Centre-Est Regional IT Service
          (IT department of P\xF4le Emploi):</b
        >
        Business integration week at the Regional IT Service
        Center-East of Oullins with discovery of different activities,
        hardware and their function, but also management and resolution
        incidents.
      </p>
    </div>`,skillsTitle:"Skills",computerSkillsTitle:"Computers",computerSkillsContent:`
    <div class="computing">
    <div class="content">
      <p>HTML/CSS/SASS: Website creation (My portfolio and the projects of my training at OpenClassrooms)</p>
      <p>Creating CSS animations</p>
      <p>Javascript: Advanced level frontend, beginner level backend.</p>
      <p>React/Vue/ViteJS: Creation of sites communicating with APIs</p>
      <p>Vegas Pro, Adobe Premiere Pro and Kdenlive: operational level</p>
      <p>Adobe Photoshop: Photomontages and creation of visuals</p>
      <p>Live broadcast: XSplit Broadcaster, OBS and derivatives</p>
      <p>
        Unreal Engine 4 & 5 and Coding in Blueprints: The Basics
      </p>
      <p>Source Engine 1 & 2: Level Design Basics</p>
      <p>Complete assembly and basic maintenance of a PC</p>
      <p>Installation and configuration of an OS</p>
    </div>`,softSkillsTitle:"Soft Skills",softSkillsContent:`
    <div class="soft-skills">
    <div class="content">
        <p>Adaptability</p>
        <p>Relationship of trust with my collaborators</p>
        <p>Solving different types of problems (human and material)</p>
        <p>Business sense</p>
        <p>Communication with my colleagues and clients.</p>
        <p>Self-taught</p>
        <p>Imaginative and creative</p>
    </div>
    </div>`,languagesSkillsTitle:"Linguistics",languagesSkillsContent:`
    <div class="content">
        <p>English: fluent level</p>
        <p>Polish: Mother tongue/Basic level (more spoken than read)</p>
    </div>`,notableProjectsTitle:"Notable Projects",notableProjectsContent:`
        <div class="openclassrooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Building an enterprise social network with express and VueJS (fullstack)</a ></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Personal Portfolio</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application for creating forms and using data (polls, tables)</a ></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposing a JQuery application to React</a></li>
        </div>`,hobbiesSectionTitle:"Hobbies",hobbiesMusicTitle:"Music",hobbiesMusicContent:`
    <div class="hobby-desc">
    <p><b>2006 to 2014 (8 years) - </b>Piano at the Regional Conservatory of Lyon, practiced daily.
        <b>2014 - </b>End of second cycle piano certificate.</p>
    <p><b>2006 to 2013 (7 years) - </b>Solf\xE8ge at the Lyon Conservatory.
        <b>2013 - </b>Certificate of end of second cycle of music theory.</p>
    <p><b>Since 2014 - </b>Self-taught music.</p>
    <p>I also have <i>perfect pitch!</i></p>
    </div>`,hobbiesEditingTitle:"Editing",hobbiesEditingContent:`
        <h3>Editing</h3>
        <p>Filming and editing of various short films with use of green screen</p>
        <p>Video editing (on Vegas, Premiere Pro and Kdenlive) for personal projects.</p>
        <p>Photo editing (on Photoshop) for personal projects.`,hobbiesEditingModalTitle:"Photo Editing",hobbiesEditingModalContent:'I really like working with editing software such as photoshop. As a concrete example, I created all the background images for this website. I also sometimes do some "fancy" retouching (example my Facebook profile photos)',hobbiesGamesTitle:"Video Game",hobbiesGamesContent:`
    <h3>Video Game</h3>
    <p>Learning different video game development software (Unreal Engine 4, Source 1 and 2) as an autodidact.
    <p>Strong interest in new technologies and in particular virtual reality and its uses.</p>`,hobbiesGamesModalTitle:"Video Game Creation",hobbiesGamesModalContent:"Being passionate about video games, I have always been fascinated by their design. So I learned, over the years, to use some graphic engines, in particular the Unreal Engine 4 but especially the engines of Valve: Source 1 and more recently with the arrival of Half-Life: Alyx in Virtual Reality, Source 2.",knowMoreText:"Learn more...",charitySectionTitle:"Associative",charitySectionContent:`
    <section id="associative">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Premi\xE8re S) - Amnesty International solidarity action, signature of petitions to defend a prisoner of conscience.</p>
    </div>
    </section>`}},_e="/assets/hla-1.b40bd089.jpg",Tt="/assets/PPCV.e4291ca6.png";let E,l;const jt=localStorage.getItem("language");jt==="fr"?(E=Ie.fr,l=Se.fr):(E=Ie.en,l=Se.en);const He=e("section",{class:"resume--header",id:"resume-header"},"",""),ie=e("div",{class:"resume--title",id:"resume-title"},"",He);e("h1",{class:"resume--h1",id:"resume-h1"},E.resumeHeaderName,ie);const Re=e("div",{class:"resume--intro--container"},"",ie);e("img",{class:"profile-picture",id:"profile-picture",src:Tt,height:"92px"},"",Re);const Ne=e("div",{class:"resume--intro--text--container"},"",Re);e("h2",{class:"resume--description"},E.resumeDescription,Ne);e("p",{class:"resume--description"},E.resumeIntroText,Ne);const V=e("aside",{class:"resume--title--info",id:"resume-aside"},"",ie);e("p",{},E.resumeIntroAge,V);e("p",{},E.resumeIntroContact,V);e("p",{},E.resumeIntroLinkedin,V);e("p",{},E.resumeIntroDrivingLicense,V);const T=e("div",{class:"resume--content",id:"resume-content"},"",""),q=e("section",{id:"formation"},"","");e("div",{class:"formation--description"},l.openclassroomsFrontend,q);e("div",{class:"formation--description"},l.openclassroomsWebdev,q);e("div",{class:"formation--description"},l.university,q);e("div",{class:"formation--description"},l.baccalaureate,q);const Bt=k("formation","",l.formationTitle,q);T.append(Bt);const U=e("section",{id:"exp-pro"},"","");e("div",{class:"profesionnal--description"},l.proExpLTDN,U);e("div",{class:"profesionnal--description"},l.proExpPoleEmploi,U);e("div",{class:"profesionnal--description"},l.proExpEpitech,U);const Lt=k("pro-exp","",l.professionalExperienceTitle,U);T.append(Lt);const Q=e("section",{id:"skills",class:"skills"},"",""),Jt=e("div",{class:"skills"},l.computerSkillsContent,""),qt=k("computers","",l.computerSkillsTitle,Jt);Q.append(qt);const Pt=e("div",{class:"skills"},l.softSkillsContent,""),Dt=k("soft-skills","",l.softSkillsTitle,Pt);Q.append(Dt);const Mt=e("div",{class:"skills"},l.languagesSkillsContent,""),_t=k("languages","",l.languagesSkillsTitle,Mt);Q.append(_t);const Ht=k("skills","",l.skillsTitle,Q);T.append(Ht);const Fe=e("section",{id:"projects"},"","");e("div",{class:"profesionnal--description"},l.notableProjectsContent,Fe);const Rt=k("notable-projects","",l.notableProjectsTitle,Fe);T.append(Rt);const O=e("section",{class:"hobby--section"},"",""),Nt=e("div",{class:"hobby"},l.hobbiesMusicContent,""),Ft=k("music","",l.hobbiesMusicTitle,Nt);O.append(Ft);const Ve=e("div",{class:"hobby"},l.hobbiesEditingContent,""),Vt=k("editing","",l.hobbiesEditingTitle,Ve),Ut=e("a",{id:"editing-know-more",class:"resume--example-modal--button",href:"#editing-example"},l.knowMoreText,Ve);O.append(Vt);const Ue=e("div",{class:"hobby"},l.hobbiesGamesContent,""),Qt=k("video-games","",l.hobbiesGamesTitle,Ue),Ot=e("a",{id:"gamedev-know-more",class:"resume--example-modal--button",href:"#gamedev-example"},l.knowMoreText,Ue);O.append(Qt);const zt=k("hobbies","",l.hobbiesSectionTitle,O);T.append(zt);const Qe=e("section",{},"","");e("div",{class:"profesionnal--description"},l.charitySectionContent,Qe);const Gt=k("charity","",l.charitySectionTitle,Qe);T.append(Gt);const Oe=e("div",{class:"resume--example-modal--content"},l.hobbiesEditingModalContent,""),ze=e("div",{class:"resume--example-modal--image--container"},"",Oe);e("img",{class:"resume--example-modal--image",src:"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/47196459_2290062601227752_8864858708497137664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4CGt6pA3E8MAX-GBf06&tn=32L3dSojrsn1PSud&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8mYppG0LShQDD4kYAAjlvRvgTH-6kn7aztZ0W_YfGYfw&oe=63497675"},"",ze);e("img",{class:"resume--example-modal--image",src:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/47320482_2290084304558915_1379622247995539456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zzHSjFy9ch0AX-TKaqC&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_lzzw96Lcqk92Xxlp1UQKiPUqcbB82g8YoJw7kDtFJRg&oe=6346A6DB"},"",ze);const R=F("know-more-modal",l.hobbiesEditingModalTitle,Oe);R.closeButton.addEventListener("click",t=>{t.preventDefault(),j(R.htmlCode)});T.append(R.htmlCode);const Ge=e("div",{class:"resume--example-modal--content"},l.hobbiesGamesModalContent,""),Kt=e("div",{class:"resume--example-modal--image--container"},"",Ge);e("img",{class:"resume--example-modal--image",src:_e},"",Kt);const Ke=e("div",{},"","");e("div",{},"Test",Ke);const Wt=e("button",{},"Test Click",Ke);Wt.addEventListener("click",()=>{console.log("Test")});const N=F("know-more-modal",l.hobbiesGamesModalTitle,Ge);N.closeButton.addEventListener("click",t=>{t.preventDefault(),j(N.htmlCode)});T.append(N.htmlCode);Ut.addEventListener("click",t=>{t.preventDefault(),j(R.htmlCode,!0)});Ot.addEventListener("click",t=>{t.preventDefault(),j(N.htmlCode,!0)});function $t(){const t=document.createElement("main");return t.setAttribute("class","resume"),t.appendChild(He),t.appendChild(T),t}const D={fr:{modalTitle:"D\xE9veloppement web",modalIntroText:`Durant mes deux formations avec OpenClassrooms (d\xE9veloppeur web et d\xE9veloppeur d'applications JS et React), 
    j'ai pu r\xE9aliser de nombreux projets, en voici la liste`,firstFormationTitle:"D\xE9veloppeur Web : ",webdevLinks:["https://github.com/SprtJonathan/JonathanBinot_2_17112020","https://github.com/SprtJonathan/JonathanBinot_3_14122020","https://github.com/SprtJonathan/JonathanBinot_4_30012021","https://github.com/SprtJonathan/JonathanBinot_5_25022021","https://github.com/SprtJonathan/JonathanBinot_6_04042021","https://github.com/SprtJonathan/JonathanBinot_7_28042021"],webdevTitles:["Transformez une maquette en site web avec HTML & CSS","Dynamisez une page web avec des animations CSS","Optimisez un site web existant","Construisez un site e-commerce en JavaScript","Construisez une API s\xE9curis\xE9e pour une application d'avis gastronomiques","Cr\xE9ez un r\xE9seau social d\u2019entreprise"],secondFormationTitle:"D\xE9veloppeur Front-End / D\xE9veloppeur d'applications React Javascript : ",frontendLinks:["https://github.com/SprtJonathan/JonathanBinot_4_27092021","https://github.com/SprtJonathan/JonathanBinot_6_15102021","https://github.com/SprtJonathan/JonathanBinot_7_01122021","https://github.com/SprtJonathan/JonathanBinot_9_14012022","https://github.com/SprtJonathan/JonathanBinot_10_25022022","https://github.com/SprtJonathan/JonathanBinot_11_01042022","https://github.com/SprtJonathan/JonathanBinot_12_25042022","https://github.com/SprtJonathan/JonathanBinot_13_23052022","https://github.com/SprtJonathan/JonathanBinot_2_17112020"],frontendTitles:["Cr\xE9ez une landing page avec Javascript","Cr\xE9ez un site accessible pour une plateforme de photographes","D\xE9veloppez un algorithme de recherche en JavaScript","D\xE9buggez et testez un SaaS RH","D\xE9finissez les besoins pour une app de soutien scolaire","D\xE9veloppez une application Web avec React et React Router","D\xE9veloppez un tableau de bord d'analytics avec React","Utilisez une API pour un compte utilisateur bancaire avec React","Faites passer une librairie jQuery vers React"],personalProjectFailed:`Je me suis \xE9galement essay\xE9 \xE0 des projets plus personnels. Par exemple, en souhaitant retravailler mon site web personnel, j'ai d\xE9but\xE9 un projet que j'avais sobrement nomm\xE9 <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a> 
    et dont le but \xE9tait de cr\xE9er un projet de type starter pour tous mes projets web futurs. Je souhaitais faire en sorte de rendre possible la r\xE9utilisation de composants sans devoir r\xE9\xE9crire leur code, \xE0 la mani\xE8re d'un framework de type React/Vue, mais le tout en JS Vanilla.`,personalProjectRebooted:`J'ai r\xE9cemment recr\xE9\xE9 un projet du m\xEAme type mais sans utiliser ce syst\xE8me de composants que je n'avais pas r\xE9ussi \xE0 rendre viable \xE0 ce moment l\xE0. Ce projet, nomm\xE9 JS Project Base 
    permet, comme son nom l'indique, de d\xE9buter un projet plus rapidement. Il contient une base de projet avec un index.html, un index.js contenant une simple fonction permettant de faire tourner le logo JS au clic, une base de CSS organis\xE9e \xE0 la mani\xE8re de SASS avec un fichier ma\xEEtre 
    important le code de tous les fichiers d\xE9pendants, ceci afin de mieux organiser l'espace de travail du style et d'optimiser au mieux le code en facilitant la coh\xE9rence stylistique des pages et en \xE9vitant de r\xE9\xE9crire du code d\xE9j\xE0 existant sur des pages pr\xE9c\xE9dentes. Car apr\xE8s tout : 
    <blockquote>Do not repeat yourself*</blockquote>`,jsBaseTitle:'<a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>',administrativeManagerDescription:`Enfin, je travaille actuellement pendant mon temps libre sur un autre projet, d\xE9but\xE9 gr\xE2ce \xE0 mon starter pack d'ailleurs. Il s'agit d'un outil en ligne permettant de cr\xE9er
    un formulaire avec des champs personnalisables puis de remplir ces champs et de retrouver les donn\xE9es entr\xE9es dans un tableau situ\xE9 sur une autre page. 
    L'objectif est de proposer un outil simple et complet afin de pouvoir effectuer des t\xE2ches administratives simples et de fa\xE7on intuitive : Cr\xE9ation de tableaux (avec fonctionnalit\xE9 de recherche et de tri), exportation des donn\xE9es, importation de donn\xE9es pr\xE9-existantes, 
    exportation du code html du formulaire cr\xE9\xE9 afin de simplifier la cr\xE9ation de formulaires pour des projets de site web, cr\xE9ation de sondages avec affichage et exploitation des r\xE9sulats, formulaires de type Google Form. L'id\xE9al serait de pouvoir rendre cet outil 
    accesible au plus grand nombre en proposant une interface simple et compr\xE9hensible, une gestion du travail en local pour chaque utilisateur ou la possibilit\xE9 de synchroniser leurs appareils via un compte cr\xE9\xE9. <br/>
    Vous pouvez explorer le site web gr\xE2ce \xE0 la fen\xEAtre int\xE9gr\xE9e ci-dessous. <br/>
    `,administrativeManagerTitle:'<a class="link" href="https://github.com/SprtJonathan/AdministrativeManager">Administrative Manager</a>',administrativeManagerToggleButton:"Lancer la d\xE9mo",administrativeManagerExitButton:"Quitter la d\xE9mo",developperMotto:"*Ne vous r\xE9p\xE9tez pas : une des philosophies principales du d\xE9veloppeur."},en:{modalTitle:"Web development",modalIntroText:`During my two trainings with OpenClassrooms (web developer and developer of JS and React applications),
    I was able to carry out many projects, here is the list`,firstFormationTitle:"Web developer : ",webdevLinks:["https://github.com/SprtJonathan/JonathanBinot_2_17112020","https://github.com/SprtJonathan/JonathanBinot_3_14122020","https://github.com/SprtJonathan/JonathanBinot_4_30012021","https://github.com/SprtJonathan/JonathanBinot_5_25022021","https://github.com/SprtJonathan/JonathanBinot_6_04042021","https://github.com/SprtJonathan/JonathanBinot_7_28042021"],webdevTitles:["Turn a model into a website with HTML & CSS","Energize a web page with CSS animations","Optimize an existing website","Build an e-commerce site in JavaScript","Build a secure API for a food reviews app","Create a corporate social network"],secondFormationTitle:"Front-End developer / React Javascript apps developer : ",frontendLinks:["https://github.com/SprtJonathan/JonathanBinot_4_27092021","https://github.com/SprtJonathan/JonathanBinot_6_15102021","https://github.com/SprtJonathan/JonathanBinot_7_01122021","https://github.com/SprtJonathan/JonathanBinot_9_14012022","https://github.com/SprtJonathan/JonathanBinot_10_25022022","https://github.com/SprtJonathan/JonathanBinot_11_01042022","https://github.com/SprtJonathan/JonathanBinot_12_25042022","https://github.com/SprtJonathan/JonathanBinot_13_23052022","https://github.com/SprtJonathan/JonathanBinot_2_17112020"],frontendTitles:["Create a landing page with JavaScript","Create an accessible site for a platform of photographers","Develop a search algorithm in JavaScript","Debug and test an HR SaaS","Define the needs for a tutoring app","Develop a web application with React and React Router","Build an analytics dashboard with React","Use an API for a bank user account with React","Move a jQuery library to React"],personalProjectFailed:`I also tried my hand at more personal projects. For example, wanting to rework my personal website, I started a project that I had soberly named <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a >
    and whose goal was to create a starter type project for all my future web projects. I wanted to make it possible to reuse components without having to rewrite their code, like a React/Vue type framework, but all in JS Vanilla.`,personalProjectRebooted:`I recently recreated a project of the same type but without using this component system that I hadn't managed to make viable at the time. This project, named <a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>
    allows, as its name suggests, to start a project more quickly. It contains a project base with an index.html, an index.js containing a simple function to rotate the JS logo on click, a CSS base organized like SASS with a master file
    importing the code of all the dependent files, this in order to better organize the workspace of the style and to better optimize the code by facilitating the stylistic consistency of the pages and avoiding rewriting code already existing on previous pages. Because after all:
    <blockquote>Do not repeat yourself*</blockquote>`,jsBaseTitle:'<a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>',administrativeManagerDescription:"Finally, I am currently working in my free time on another project, started thanks to my starter pack by the way",administrativeManagerTitle:'<a class="link" href="https://github.com/SprtJonathan/AdministrativeManager">Administrative Manager</a>',administrativeManagerToggleButton:"Launch demo",administrativeManagerExitButton:"Close demo",developperMotto:"*Don't repeat yourself: one of the main philosophies of the developer."}},Yt=localStorage.getItem("language");let X,m;Yt==="fr"?(X=D.fr.modalTitle,m=D.fr):(X=D.en.modalTitle,m=D.en);const A=e("div",{id:"webdev-content",class:"portfolio--modal-content"},"","");e("p",{},m.modalIntroText,A);e("h3",{},m.firstFormationTitle,A);qe(m.webdevLinks,m.webdevTitles,A);e("h3",{},m.secondFormationTitle,A);qe(m.frontendLinks,m.frontendTitles,A);e("hr",{},"",A);e("p",{},m.personalProjectFailed,A);e("p",{},m.personalProjectRebooted,A);e("h3",{},m.jsBaseTitle,A);const xe=e("button",{class:"iframe--button"},m.administrativeManagerToggleButton,A),se=e("div",{class:"iframe--wrapper"},"",A),Xt=e("iframe",{class:"iframe",src:"",frameborder:"0"},"",se);se.style.maxHeight="0px";function We(t,o,c,i,a){return c?(o.src="",t.style.paddingBottom="0%",i.textContent=m.administrativeManagerToggleButton):(o.src=a,t.style.paddingBottom="56.25%",i.textContent=m.administrativeManagerExitButton),c=!c,c}let Ee=!1;xe.addEventListener("click",t=>{t.preventDefault(),Ee=We(se,Xt,Ee,xe,"https://sprtjonathan.github.io/js-project-base/")});e("hr",{},"",A);e("p",{},m.administrativeManagerDescription,A);e("h3",{},m.administrativeManagerTitle,A);const Te=e("button",{class:"iframe--button",id:"iframe-button-1"},m.administrativeManagerToggleButton,A),re=e("div",{class:"iframe--wrapper"},"",A),Zt=e("iframe",{class:"iframe",src:"",frameborder:"0"},"",re);re.style.maxHeight="0px";let je=!1;Te.addEventListener("click",t=>{t.preventDefault(),je=We(re,Zt,je,Te,"https://sprtjonathan.github.io/AdministrativeManager/")});e("p",{},m.developperMotto,A);e("div",{class:"spacer--vertical--medium"},"",A);function L(t,o,c){let i=0;console.log(o);let a;c?a=c:a="carousel";const n=e("section",{class:a+"--section"},"",""),s=e("div",{class:a},"",n),r=[];for(let d=0;d<o.length;d++){const y=e("figure",{class:a+"--slide"},"",s);if((o[d].title||o[d].title!="")&&e("div",{class:a+"--media--title"},o[d].title,y),o[d].type=="video"){const I=e("video",{class:a+"--media--video",title:o[d].title,controls:!0,height:"100%"},"",y);e("source",{class:a+"--media--video",src:o[d].link},"",I)}else{const I=e("a",{class:a+"--media--image--link",href:o[d].link,target:"_blank"},"",y);e("img",{class:a+"--media--img",src:o[d].link,alt:o[d].title},"",I)}if(o[d].description||o[d].description!=""){const I=e("figcaption",{class:a+"--media--description"},"",y);e("p",{class:a+"--media--description--text"},o[d].description,I)}r.push(y)}r.forEach((d,y)=>{d.style.transform=`translateX(${y*100}%)`});const p=e("div",{class:a+"--controls--block"},"",s);o.length<=1?p.className="hidden":p.className=a+"--controls--block";const h=e("div",{class:a+"--controls--button--block"},"",p),v=e("button",{id:"previous-button-"+t,class:a+"--controls--button",type:"button"},'<i class="fa-solid fa-chevron-left"></i>',h),g=e("button",{id:"next-button-"+t,class:a+"--controls--button",type:"button"},'<i class="fa-solid fa-chevron-right"></i>',h);v.addEventListener("click",d=>{x(-1)}),g.addEventListener("click",d=>{d.preventDefault(),x(1)});function x(d){i=i+d,i<0&&(i=o.length-1),i>o.length-1&&(i=0),r.forEach((y,I)=>{y.style.transform=`translateX(${100*(I-i)}%)`})}return n}const M={fr:{gamedevTitle:"D\xE9veloppement de Jeux Vid\xE9o",modalIntroText:`Depuis un certain nombre d'ann\xE9es, pendant mon temps libre, je m'int\xE9resse au d\xE9veloppement de jeux vid\xE9o. Je cherche \xE0 comprendre comment les diff\xE9rents jeux auquels je joue habituellement sont cr\xE9\xE9s, j'apprends \xE9galement (toujours en autodidacte) 
    \xE0 cr\xE9er du contenu par moi m\xEAme, que ce soit des maps (cartes de jeu), majoritairement sur Half-Life 2 et plus r\xE9cemment Half-Life: Alyx (en VR), sur Dying Light gr\xE2ce aux outils de modding, ou plus globalement des m\xE9caniques de jeu sur Unreal Engine (4 et 5). Enfin je me 
    suis \xE9galement essay\xE9 \xE0 la mod\xE9lisation 3D gr\xE2ce \xE0 l'outil gratuit Blender. J'ai r\xE9ussi \xE0 cr\xE9er quelques mod\xE8les simples ou a modifier des mod\xE8les d\xE9j\xE0 existants afin de les int\xE9grer \xE0 diff\xE9rents jeux. Ci-dessous, vous trouverez diff\xE9rentes cat\xE9gories montrant 
    quelques exemples de ce que j'ai pu r\xE9aliser au cours de ces quelques ann\xE9es. Aucun projet n'a r\xE9ellement abouti mais chaque r\xE9alisation m'a permis de m'am\xE9liorer \xE0 chaque fois un peu plus.`,firstCategoryName:"Source\xB2 Engine (Half-Life: Alyx / VR) : ",firstCategoryDescription:`Depuis mars 2020, je me suis int\xE9ress\xE9 au moteur Source\xB2 de Valve, utilis\xE9 dans Half-Life Alyx: notamment. Ce moteur, bien que r\xE9cent, partage de nombreux aspects avec son pr\xE9d\xE9cesseur, sur lequel j'ai pass\xE9 beaucoup de temps au cours de ces derni\xE8res ann\xE9es, 
    \xE0 apprendre des techniques de Level Design. J'ai pris un immense plaisir \xE0 y retourner et \xE0 approfondir mes bases. C'est un outil que je trouve tr\xE8s agr\xE9able \xE0 prendre en mains. 
    L'exemple suivant est une carte pour le jeu Half-Life Alyx sur laquelle je travail depuis un mois. Je continue mon processus d'apprentissage du moteur au fur et \xE0 mesure que je progresse sur la g\xE9om\xE9trie de la map. J'ai appris \xE0 utiliser quelques uns des outils int\xE9gr\xE9s au moteur :
    <br/>
    - Tile Meshing : mod\xE8les 3D programm\xE9s pour former des cheminements d\xE9finis par l'utilisateur (par exemple, les tuyaux aux murs, les conduits d'a\xE9rations etc.)
    <br/>
    - Skybox 3D : utilisation d'une map externe afin de la "projeter" sur la map en cours afin d'optimiser l'affichage des mod\xE8les 3D \xE0 distance en les zoomant.
    <br/>
    - Scripted Sequences (Des entit\xE9s permettant de scripter les animations de personnages afin de leur faire r\xE9aliser une action d\xE9finie)
    <br/>
    - L'\xE9clairage dynamique
    <br/>`,firstCategoryVideosDescription:["Cette vid\xE9o montre le d\xE9but de la map, les tuyaux visibles ont \xE9t\xE9s plac\xE9s gr\xE2ce \xE0 l'outil de tile meshing",`Ici il est question de s\xE9quence script\xE9e. La cr\xE9ature (un headcrab) qui arrive du pilier est "appel\xE9e" par une entit\xE9 qui la fait appara\xEEtre, et une autre entit\xE9 (nomm\xE9e "scripted sequence") se charge de lui faire faire son animation. Une fois l'animation termin\xE9e, l'intelligence artificelle par d\xE9faut du headcrab reprend la main.`,"Un autre exemple de s\xE9quence script\xE9e. Ici le zombie (nom donn\xE9e \xE0 ces presonnages non jouables dans le jeu Half-Life) effectue une animation de base (il pointe le projecteur du doigt). Une fois que le joueur passe la zone de d\xE9tection (trigger), l'animation du pointage s'arr\xEAte et le zombie doit rejoindre la deuxi\xE8me s\xE9quence script\xE9e en marchant. Arriv\xE9 \xE0 celle-ci, un output (une sortie activ\xE9e lorsque le zombie arrive \xE0 destination) le fait ragdoll (active la physique du mod\xE8le 3D, ce qui cause sa chute). Une fois arriv\xE9 au sol, un autre output met sa valeur de vie \xE0 0.","Dernier exemple de s\xE9quence script\xE9e. Cette fois-ci lorsque le joueur s'approche de la porte, un trigger d\xE9clenche la marche des soldats ainsi que le son de la radio qui se joue derri\xE8re la porte."],firstCategoryPhotosSectionIntro:"Voici enfin une galerie montrant quelques photos de mon travail sur le moteur Source\xB2. Les images en format carr\xE9 proviennent de captures d'\xE9cran en r\xE9alit\xE9 virtuelle.",secondCategoryName:"Unreal Engine 4 / 5 : ",secondCategoryDescription:`L'Unreal Engine 4 doit \xEAtre le moteur graphique sur lequel j'ai pass\xE9 le plus de temps \xE0 apprendre le d\xE9veloppement en g\xE9n\xE9ral. Alors que je me concentrais davantage sur le level design avec le moteur Source, l'UE4 m'a permis de commencer \xE0 coder gr\xE2ce au syst\xE8me de blueprints (programmation visuelle) int\xE9gr\xE9 au moteur. 
    En suivant plusieurs cours en ligne, j'ai pu apprendre \xE0 cr\xE9er les bases d'un jeu simple, plus sp\xE9cialement, des jeux de type FPS. J'ai \xE9t\xE9 tr\xE8s touche-\xE0-tout avec le moteur graphique et j'ai abord\xE9 diff\xE9rents th\xE8mes tels que le "Player Controler", 
    faisant l'interface entre le joueur et le personnage jou\xE9, la gestion de la cam\xE9ra (passage de la premi\xE8re \xE0 la troisi\xE8me personne), l'affichage des armes et leur fonctionnement, les bases de l'IA non joueur, les widgets (permettant d'afficher le HUD par exemple).
    
    Malheureusement, je n'ai jamais r\xE9ellement termin\xE9 quoi que ce soit. Chaque projet m'ayant toutefois permis d'en apprendre plus dans le domaine du d\xE9veloppement de jeux vid\xE9o.`,secondCategoryExamplesTitles:["Projet de TPS r\xE9alis\xE9 avec Udemy","Projet de FPS \xE9galement r\xE9alis\xE9 avec Udemy"],secondCategoryExamplesDescriptions:["","Polonez Caro: Voiture Polonaise que j'ai int\xE9gr\xE9e \xE0 mon projet Unreal afin d'apprendre le fonctionnement des v\xE9hicules dans le moteur."],thirdCategoryName:"Blender / Mod\xE9lisation 3D : ",thirdCategoryDescription:`Lorsque j'ai \xE9tudi\xE9 le d\xE9veloppement de jeux vid\xE9o, que ce soit sur Unreal ou Source, j'ai pu aborder certains aspects de la mod\xE9lisation 3D. Plus pr\xE9cisemment, je me suis initi\xE9 \xE0 l'utilisation de Blender (Logiciel de mod\xE9lisation 3D gratuit mais puissant) 
    afin de r\xE9pondre \xE0 certains besoins, tout en apprendant une discipline suppl\xE9mentaire. Mes utilisations principales de Blender ont surtout \xE9t\xE9 la modification de mod\xE8les pr\xE9-existants afin de les adapter \xE0 mes besoins. J'ai toutefois pu cr\xE9er de toute pi\xE8ce quelques mod\xE8les simples 
    pour une utilisation autre que le jeu vid\xE9o : l'impression 3D, \xE0 laquelle je m'initie depuis fin 2021.
    
    Vous trouverez ci-dessous une nouvelle galerie contenant quelques exemple de mes travaux sur Blender. Je tiens tout de m\xEAme \xE0 pr\xE9ciser que les mod\xE8les provenant d'autres personnes que j'ai utilis\xE9 n'ont pas vocation \xE0 \xEAtre redistribu\xE9s.`,thirdCategoryExamplesTitles:["Ma t\xEAte dans Half-Life\xB2","Projet de FPS \xE9galement r\xE9alis\xE9 avec Udemy","Distributeur automatique","Locomotive et wagon de passagers"],thirdCategoryExamplesDescription:["Oui, ceci est bien ma t\xEAte ajout\xE9e \xE0 un mod\xE8le de personnage de Half-Life\xB2. Je souhaitais faire d\xE9couvrir le jeu \xE0 un ami en y jouant en coop\xE9ration et je me suis dit que l'immersion n'en serait que plus grande si nos t\xEAtes \xE9taient en jeu. J'ai appris comment adapter le mod\xE8le afin que les animations fonctionnent toujours, je suis plut\xF4t fier du r\xE9sultat final (Scan des t\xEAtes r\xE9alis\xE9s avec AvatarSDK)","Une FSO Polonez Caro: voiture bien connue en Pologne. Je souhaitais pouvoir utiliser cette voiture dans un projet Unreal Engine, j'ai donc adapt\xE9 un mod\xE8le trouv\xE9 en ligne afin de pouvoir l'exploiter dans l'\xE9diteur. J'ai ensuite r\xE9alis\xE9 les textures en me servant d'images r\xE9elles","Probablement un de mes mod\xE8les les plus complexes r\xE9alis\xE9s de toute pi\xE8ce : Ce distributeur automatique devait servir comme objet de d\xE9cor lorsque je m'amusais \xE0 recr\xE9er le premier niveau de Half-Life\xB2 sur Unreal Engine 4","J'ai \xE9galement cr\xE9\xE9 des mod\xE8les simples et non optimis\xE9s d'un train et d'un wagon de passagers (les mod\xE8les gris sur cette image)","Ce pistolet provient de SktechFab (biblioth\xE8que de mod\xE8les 3D), j'ai adapt\xE9 ce mod\xE8le \xE0 Half-Life: Alyx afin qu'il remplace le pistolet original du jeu"]},en:{gamedevTitle:"Video Game Development",modalIntroText:`For several years, in my spare time, I have been interested in developing video games. I try to understand how the different games I usually play are created, I also learn (still self-taught)
    to create content by myself, whether maps (game cards), mainly on Half-Life 2 and more recently Half-Life: Alyx (in VR), on Dying Light thanks to modding tools, or more generally game mechanics on Unreal Engine (4 and 5). Finally I
    am also tried at 3D modeling thanks to the free tool Blender. I managed to create some simple models or modify existing models in order to integrate them into different games. Below you will find different categories showing
    some examples of what I have been able to achieve during these few years. No project has really succeeded, but each achievement has allowed me to improve a little more each time.`,firstCategoryName:"Source\xB2 Engine (Half-Life: Alyx / VR) : ",firstCategoryDescription:`Since March 2020, I have been interested in Valve's Source\xB2 engine, used in Half-Life Alyx: in particular. This engine, although recent, shares many aspects with its predecessor, on which I have spent a lot of time over the past few years,
    to learn Level Design techniques. I took great pleasure in going back and deepening my knowledge. It is a tool that I find very pleasant to use.
    The following example is a Half-Life Alyx map I've been working on for a month. I continue my engine learning process as I progress on the geometry of the map. I learned to use some of the tools built into the engine:
    <br/>
    - Tile Meshing: 3D models programmed to form user-defined pathways (e.g. pipes on walls, air ducts etc.)
    <br/>
    - Skybox 3D: use of an external map to "project" it onto the current map in order to optimize the display of 3D models from a distance by zooming them.
    <br/>
    - Scripted Sequences (Entities allowing character animations to be scripted in order to make them perform a defined action)
    <br/>
    - Dynamic lighting
    <br/>`,firstCategoryVideosDescription:["This video shows the beginning of the map, the visible pipes have been placed using the tile meshing tool",`This shows scripted sequences. The creature (a headcrab) that comes from the pillar is "called" by an entity that makes it appear, and another entity (named "scripted sequence") is responsible for making it do its animation. Once the animation is complete, the headcrab's default AI takes over.`,"Another example of a scripted sequence. Here the zombie (name given to these non-playable characters in the Half-Life game) performs a basic animation (he points to the projector). Once the player passes the detection zone (trigger), the pointing animation stops and the zombie must join the second scripted sequence by walking. Arrived at this one, an output (an output activated when the zombie arrives at its destination) makes it ragdoll (activates the physics of the 3D model, which causes its fall). Once on the ground, another output sets its life value to 0.","Last example of scripted sequence. This time when the player approaches the door, a trigger triggers the march of the soldiers as well as the sound of the radio playing behind the door."],firstCategoryPhotosSectionIntro:"Here is finally a gallery showing some photos of my work on the Source\xB2 engine. Square format images are from VR screenshots.",secondCategoryName:"Unreal Engine 4 / 5 : ",secondCategoryDescription:`Unreal Engine 4 has to be the graphics engine I've spent the most time learning about development in general. While I was focusing more on level design with the Source engine, the UE4 allowed me to start coding thanks to the engine's built-in blueprints (visual programming) system.
    By taking several online courses, I was able to learn how to create the basics of a simple game, more specifically, FPS type games. I was very hands-on with the graphics engine and I tackled different themes such as the "Player Controller",
    making the interface between the player and the character played, the management of the camera (passage from the first to the third person), the display of weapons and their operation, the basics of the non-player AI, the widgets (allowing to display the HUD for example).
    
    Unfortunately, I never actually finished anything. Each project, however, allowed me to learn more about the field of video game development.`,secondCategoryExamplesTitles:["TPS project created with Udemy","FPS project also created with Udemy"],secondCategoryExamplesDescriptions:["","Polonez Caro: Polish car that I added to my Unreal project to learn how vehicles work in the engine."],thirdCategoryName:"Blender / 3D Modeling: ",thirdCategoryDescription:`When I studied video game development, whether on Unreal or Source, I was able to approach certain aspects of 3D modeling. More specifically, I learned to use Blender (Free but powerful 3D modeling software)
    in order to meet certain needs, while learning an additional discipline. My main uses of Blender have mainly been modifying pre-existing models to adapt them to my needs. However, I was able to create a few simple models from scratch.
    for use other than video games: 3D printing, which I have been learning since the end of 2021.
    
    Below is a new gallery containing some examples of my work on Blender. I would like to point out that the models from other people that I have used are not intended to be redistributed.`,thirdCategoryExamplesTitles:["My head in Half-Life\xB2","FPS project also made with Udemy","Vending machine","Locomotive and Passenger Cart"],thirdCategoryExamplesDescription:["Yes, this is my head added to a Half-Life\xB2 character model. I wanted to show the game to a friend by playing it in cooperation and I thought that the immersion would be even greater if our heads were ingame. (Scan of the heads made with AvatarSDK)","A FSO Polonez Caro: A well known car in Poland. I wanted to be able to use this car in an Unreal Engine project, so I adapted a model I found online so I could use it in the editor. I then made the textures using real images,","Probably one of my most complex models made from scratch: This vending machine was to be used as a prop when I was having fun recreating the first level of Half-Life\xB2 on Unreal Engine 4","I also created simple, non-optimized models of a train and a passenger wagon (the gray models in this image)","This gun is from SktechFab (3D model library), I adapted this model to Half-Life: Alyx so that it replaces the original gun in the game","A FSO Polonez Caro: A well known car in Poland. I wanted to be able to use this car in an Unreal Engine project, so I adapted a model I found online so I could use it in the editor. I then made the textures using real images,"]}},ea="/assets/hla-2.7f0cf503.jpg",ta="/assets/hla-3.f1c2997f.jpg",aa="/assets/hla-4.0fa22526.jpg",oa="/assets/hla-5.adf44b46.jpg",na="/assets/hla-6.b30f5a84.jpg",ia="/assets/udemy-project.d84c5ead.mp4",sa="/assets/poldek.6baace25.mp4",ra="/assets/jonathan_player-model.2008a188.gif",la="/assets/poldek.c8cd363c.png",ca="/assets/vending_machine.5683f18c.png",da="/assets/trainstation_wagons.69bf4159.png",pa=localStorage.getItem("language");let Z,u;pa==="fr"?(Z=M.fr.gamedevTitle,u=M.fr):(Z=M.en.gamedevTitle,u=M.en);const b=e("div",{id:"gamedev-content",class:"portfolio--modal-content"},"","");e("p",{},u.modalIntroText,b);e("hr",{},"",b);e("h3",{},u.firstCategoryName,b);e("p",{},u.firstCategoryDescription,b);const ua=[{type:"video",title:"Half-Life Alyx (VR) - Intro",link:"https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4",description:""},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:_e,description:"dddd"},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:ea,description:""},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:ta,description:""},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:aa,description:""},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:oa,description:""},{type:"image",title:"Half-Life Alyx (VR) - Intro",link:na,description:""}],ma=L("source-2",ua,"");b.append(ma);e("hr",{},"",b);e("h3",{},u.secondCategoryName,b);e("p",{},u.secondCategoryDescription,b);const Aa=[{type:"video",title:u.secondCategoryExamplesTitles[0],link:ia,description:u.secondCategoryExamplesDescriptions[0]},{type:"video",title:u.secondCategoryExamplesTitles[1],link:sa,description:u.secondCategoryExamplesDescriptions[1]}],ga=L("unreal",Aa,"");b.append(ga);e("hr",{},"",b);e("h3",{},u.thirdCategoryName,b);e("p",{},u.thirdCategoryDescription,b);const ha=[{type:"image",title:u.thirdCategoryExamplesTitles[0],link:ra,description:u.thirdCategoryExamplesDescription[0]},{type:"image",title:u.thirdCategoryExamplesTitles[1],link:la,description:u.thirdCategoryExamplesDescription[1]},{type:"image",title:u.thirdCategoryExamplesTitles[2],link:ca,description:u.thirdCategoryExamplesDescription[2]},{type:"image",title:u.thirdCategoryExamplesTitles[3],link:da,description:u.thirdCategoryExamplesDescription[3]}],ba=L("source-2",ha,"");b.append(ba);e("div",{class:"spacer--vertical--medium"},"",b);const _={fr:{photoEditingTitle:"Montage Photo",modalIntroText:`Depuis que j'ai commenc\xE9 \xE0 me renseigner sur de nombreux aspects de la cr\xE9ation en informatique, j'ai appris \xE0 utiliser des outils de photomontage et notamment Adobe Photoshop. Je me sers aujourd'hui tr\xE8s r\xE9guli\xE8rement de ce logiciel afin de r\xE9aliser divers visuels pour mes projets. 
    Vous trouverez ici quelques exemples de visuels sur lesquels j'ai travaill\xE9. Bien que n'\xE9tant pas dou\xE9 pour le dessin, j'ai appris \xE0 me d\xE9brouiller avec les outils informatiques. Je n'ai bien \xE9videmment pas le niveau d'un graphiste professionnel 
    mais j'ai \xE9t\xE9 en capacit\xE9 d'aider quelques personnes avec des illustrations simples.`,facebookPpTitle:"Photo de profil Facebook",facebookPpText:"Malgr\xE9 le fait qu'elle ne me mette pas en valeur, j'ai appr\xE9ci\xE9 faire cette photo de profil. Je pr\xE9f\xE8re cel\xE0 \xE0 une photo personnelle dans le cas de Facebook.",streamKitTitle:"StreamKit",streamKitText:"Plut\xF4t pr\xE9sent sur internet et spectateur sur les r\xE9seaux sociaux, j'ai eu plusieurs occasions d'aider des petits streamers \xE0 personnaliser leur cha\xEEne, notamment gr\xE2ce \xE0 mon utilisation de Photoshop. Je leur ai r\xE9alis\xE9 divers visuels, sous forme de tuiles (\xE9l\xE9ments visuels \xE0 mettre sur leur cha\xEEne Twitch par exemple afin de renseigner les utilisateurs), mais \xE9galement d'overlays pour leurs streams (image superpos\xE9e au flux vid\xE9o).",logosTitle:"Photos de profils d'amis",logosText:"Il m'est arriv\xE9 plusieurs fois de proposer \xE0 mes amis des photos de profils pour leurs r\xE9seaux. Pour la plupart, je me suis amus\xE9 \xE0 r\xE9utiliser un style que j'avais en premier utilis\xE9 sur mon propre logo.",companyLogoTitle:"Logo d'entreprise",companyLogoText:"En plus de faire des logos pour les photos de profils d'amis, j'ai \xE9galement eu l'occasion de r\xE9aliser le logo de la soci\xE9t\xE9 Arca Soudure."},en:{photoEditingTitle:"Photo Editing",modalIntroText:`Since I started to learn about many aspects of computer creation, I learned to use photomontage tools and in particular Adobe Photoshop. I now use this software very regularly to create various visuals for my projects.
    You will find here some examples of visuals on which I worked. Although not good at drawing, I learned to get by with computer tools. I of course don't have the level of a professional graphic designer
    but I was able to help a few people with simple illustrations.`,facebookPpTitle:"Facebook Profile Picture",facebookPpText:"Despite the fact that it does not highlight me, I enjoyed doing this profile picture. I prefer it to a personal photo in the case of Facebook.",streamKitTitle:"StreamKit",streamKitText:"Pretty present on the internet and a spectator on social networks, I had several opportunities to help small streamers to customize their channel, particularly thanks to my use of Photoshop. I created various visuals for them, in the form of tiles (visual elements they put on their Twitch channel for instance in order to inform users), but also overlays for their streams (image over the video stream).",logosTitle:"Friend Profile Pictures",logosText:"Several times I have offered my friends to create profile pictures for their social networks. For the most part, I had fun reusing a style that I had first used on my own logo.",companyLogoTitle:"Company Logo",companyLogoText:"In addition to making logos for friends' profile pictures, I also had the opportunity to make the Arca Soudure company logo."}},fa="/assets/facebook-pp-1.a13d080d.png",va="/assets/facebook-pp-2.8980fc73.png",ya="/assets/facebook-pp-3.755ebb86.png",ka="/assets/facebook-banner-1.280e4106.png",Ca="/assets/facebook-banner-2.2146894d.png",wa="/assets/stream-kit-1.452e2fbf.png",Ia="/assets/stream-kit-2.cd594033.png",Sa="/assets/ddp-logo.a437e4c1.png",xa="/assets/seehna-logo.ecd56810.png",Ea="/assets/spart-logo.5710f891.png",Ta="/assets/hybridus-logo.9059cad3.png",ja="/assets/ryzer-logo.3ff6df98.png",Ba="/assets/1stin-logo.bce32156.png",La="/assets/company-logo-1.b4a8cd38.png",Ja="/assets/company-logo-2.ef1ce2eb.png",qa=localStorage.getItem("language");let ee,C;qa==="fr"?(ee=_.fr.photoEditingTitle,C=_.fr):(ee=_.en.photoEditingTitle,C=_.en);const w=e("div",{id:"photoEditing-content",class:"portfolio--modal-content"},"","");e("p",{},C.modalIntroText,w);e("hr",{},"",w);const le=e("div",{},"",w);e("h3",{},C.facebookPpTitle,le);const Pa=[{type:"image",title:"",link:fa,description:""},{type:"image",title:"",link:va,description:""},{type:"image",title:"",link:ya,description:""},{type:"image",title:"",link:ka,description:""},{type:"image",title:"",link:Ca,description:""}],Da=L("streamKit",Pa,"");le.append(Da);e("p",{},C.facebookPpText,le);e("hr",{},"",w);const ce=e("div",{},"",w);e("h3",{},C.streamKitTitle,ce);const Ma=[{type:"image",title:"",link:wa,description:""},{type:"image",title:"",link:Ia,description:""}],_a=L("streamKit",Ma,"");ce.append(_a);e("p",{},C.streamKitText,ce);e("hr",{},"",w);const de=e("div",{},"",w);e("h3",{},C.logosTitle,de);const Ha=[{type:"image",title:"",link:Sa,description:""},{type:"image",title:"",link:xa,description:""},{type:"image",title:"My logo",link:Ea,description:""},{type:"image",title:"Discord bot logo",link:Ta,description:""},{type:"image",title:"",link:ja,description:""},{type:"image",title:"",link:Ba,description:""}],Ra=L("streamKit",Ha,"");de.append(Ra);e("p",{},C.logosText,de);e("hr",{},"",w);const pe=e("div",{},"",w);e("h3",{},C.companyLogoTitle,pe);const Na=[{type:"image",title:"",link:La,description:""},{type:"image",title:"",link:Ja,description:""}],Fa=L("streamKit",Na,"");pe.append(Fa);e("p",{},C.companyLogoText,pe);e("div",{class:"spacer--vertical--medium"},"",w);const H={fr:{videoEditingTitle:"Montage vid\xE9o",modalIntroText:`Comme vous avez surement pu le constater, je touche un peu \xE0 tout. Tr\xE8s curieux, je me passionne pour tout ce qui touche \xE0 la cr\xE9ation de divertissements et au domaine audiovisuel plus globalement. 
    Depuis mon enfance, je me suis int\xE9ress\xE9 \xE0 la cr\xE9ation de films, \xE0 mon \xE9chelle, avec mon premier camescope num\xE9rique. J'ai cr\xE9\xE9 quelques petites vid\xE9os avec mes amis et ma famille que ce soit simplement pour des sc\xE9narios cr\xE9\xE9s ensemble ou 
    plus simplement pour capturer des moments de vie. J'ai rapidement appris \xE0 utiliser divers logiciels de montage, en commen\xE7ant par AVS video Editor pour arriver jusqu'aux r\xE9f\xE9rences d'aujourd'hui avec Magix Vegas Pro ou Kdenlive pour le c\xF4t\xE9 Open Source. 
    Je me sers aujourd'hui tr\xE8s r\xE9guli\xE8rement de logiciels de montage, \xE0 l'instar des logiciels d'\xE9dition photo.`},en:{videoEditingTitle:"Video editing",modalIntroText:`As you have probably noticed, I touch a bit of everything. Very curious, I am passionate about everything related to the creation of entertainment and the audiovisual field more generally.
    Since my childhood, I have been interested in creating films, at my scale, with my first digital camcorder. I created some small videos with my friends and my family whether it is simply for scenarios created together or
    more simply to capture moments of life. I quickly learned to use various editing software, starting with AVS video Editor to reach today's references with Magix Vegas Pro or Kdenlive for the Open Source side.
    Today, I regularly use editing software, like photo editing software.`}},Va=localStorage.getItem("language");let te;Va==="fr"?(H.fr.videoEditingTitle,te=H.fr):(H.en.videoEditingTitle,te=H.en);const z=e("div",{id:"videoEditing-content",class:"portfolio--modal-content"},"","");e("p",{},te.modalIntroText,z);e("hr",{},"",z);e("h3",{},"WIP",z);e("div",{class:"spacer--vertical--medium"},"",z);const Be={fr:"Voici mon portfolio. Vous avez ici la possibilit\xE9 de cliquer sur le domaine qui vous int\xE9resse et d'explorer les diff\xE9rents travaux et r\xE9alisations que j'ai pu effectuer. Pour commencer, cliquez sur l'une des tuiles ci-dessous.",en:"This is my portfolio. Here you will be able to click on the category you want to see and to explore the different works and realizations I have done. To start, just click on one of the tiles down below."},W=["webdev","gamedev","photoEditing","videoEditing"],Ua=[X,Z,ee],Le=[A,b,w],Qa=localStorage.getItem("language");let ae;Qa==="fr"?ae=Be.fr:ae=Be.en;const J=e("div",{class:"portfolio",id:""},""),Oa=e("div",{class:"portfolio--header",id:""},"<h1>Portfolio</h1>",J),za=e("div",{class:"portfolio--content",id:"portfolio-content"},"",J);e("div",{class:"portfolio--intro",id:"homepage-content"},ae,Oa);function Ga(t,o,c,i,a){const n=document.createElement("div");n.setAttribute("id",t),n.setAttribute("class",i+" tile--container");const s=document.createElement("h2");s.setAttribute("class","tile--title"),s.innerHTML=o,n.append(s);const r=F(t+"-modal",o,c,"modal-fullscreen",a);return J.append(r.htmlCode),n.addEventListener("click",()=>{j(r.htmlCode,J)}),r.closeButton.addEventListener("click",()=>{j(r.htmlCode)}),n}for(let t=0;t<Le.length;t++)za.append(Ga(W[t],Ua[t],Le[t],"tile--container--"+W[t],W[t]));function Ka(){const t=document.createElement("main");return t.append(J),t}const ue=document.createElement("div");ue.innerHTML=`
<h1>ERREUR 404</h1>`;const $e=e("div",{class:"error-404--go-back"},"",ue),Wa=e("a",{class:"error-404--go-back--button",href:"/"},"",$e),G=e("div",{class:"error-404--go-back--link"},"",Wa);e("img",{class:"language-flag",src:oe,width:64,height:64},"",G);e("br",{},"",G);e("div",{class:"error-404--go-back--text"},"Retour \xE0 la page d'accueil",G);const Ye=e("a",{class:"error-404--go-back--button",href:"/"},"",$e),me=e("div",{class:"error-404--go-back--link"},"",Ye);e("img",{class:"language-flag",src:ne,width:64,height:64},"",me);e("br",{},"",Ye);e("div",{class:"error-404--go-back--text"},"Retour \xE0 la page d'accueil",me);G.addEventListener("click",t=>{localStorage.setItem("language","fr")});me.addEventListener("click",t=>{localStorage.setItem("language","en")});function $a(){const t=document.createElement("main");return t.append(ue),t}function Ya(){const t=localStorage.getItem("language");(t!=null&&t=="fr"||t!=null&&t=="en")&&(window.location.href="/");const o=document.createElement("main");o.innerHTML+="<h1>Choix de la langue / Select language</h1>";const c=e("div",{class:"error-404--go-back"},"",o),i=e("a",{class:"error-404--go-back--button",href:"/"},"",c),a=e("div",{class:"error-404--go-back--link"},"",i);e("img",{class:"language-flag",src:oe,width:64,height:64},"",a),e("br",{},"",a),e("div",{class:"error-404--go-back--text"},"Retour \xE0 la page d'accueil",a);const n=e("a",{class:"error-404--go-back--button",href:"/"},"",c),s=e("div",{class:"error-404--go-back--link"},"",n);return e("img",{class:"language-flag",src:ne,width:64,height:64},"",s),e("br",{},"",n),e("div",{class:"error-404--go-back--text"},"Retour \xE0 la page d'accueil",s),a.addEventListener("click",r=>{localStorage.setItem("language","fr")}),s.addEventListener("click",r=>{localStorage.setItem("language","en")}),o}console.log(window.location.pathname);const $=window.location.pathname,Je=localStorage.getItem("language"),Y={404:$a(),"":Ce(),"/":Ce(),"/resume":$t(),"/portfolio":Ka()};function Xa(){return!Je||Je==null?app.append(Ya()):Y[$]==null?app.append(Y[404]):(app.append(st($)),app.append(Y[$]))}Xa();
