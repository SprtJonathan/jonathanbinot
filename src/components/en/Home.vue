<template>
  <div class="home">
    <LoadingScreen />
    <h1 class="nom">Welcome to my personnal website.</h1>

    <section class="intro">
      <h2>
        Different pages are available here, you will find my resume in english
        and in french, as well as my portfolio in the two languages too.<br />But
        before anything else, who am I?
      </h2>

      <p>
        My name is Jonathan Binot, I'm <span id="age">{{ age }}</span> year old
        and I'm currently looking for a work-study job as I'm learning web
        development with OpenClassrooms.
        <br />
        <br />
        Since I was a child, I'm passionate about computer technology and video
        games, that's why I decided to give myself the means to work in the
        sector. Computer tech being a vast domain, there are two disciplins in
        which I would like to invest professionnaly :
      </p>
      <li><mark class="blue-undeline">Web</mark>development</li>
      <br /><br />
      <li><mark class="blue-undeline">Gam</mark>edevelopment.</li>
      <br />
      <br />
      <p>
        Motivated to achieve my goals, I started learning on my own very early,
        with my computer and the development softwares at my reach. I started
        with FPS Creator (but that part doesn't really count) then with the
        Half-Life² level editor by watching video tutorials online. As the years
        went by, I started to learn new things, by discovering Unreal Engine 3
        (with UDK) then Unreal Engine 4.
        <br />
        <br />
        I was also interested in learning different photo and video editing
        software (like Photoshop, Sony Vegas, Adobe Premiere etc.), which I
        continue to use on a regular basis today.
        <br />
        <br />
        More recently, I found a passion for virtual reality and I was finally
        able to invest in quality equipment thanks to the job I had found.
        Finally, with the release of Half-Life: Alyx in VR as well as its
        development tools, I discovered the development on Source² Engine (which
        has strong similarities with its predecessor from 2003) this time and I
        Also discovered the basics of virtual reality development on Unreal
        Engine 4 and the basics of the Unity engine less than a month ago.
        <br />
        <br />
        I really enjoy learning new techniques, and discovering all that is
        possible to do with modern game engines.
        <br />
        <br />
        As for web development, I discovered this discipline during my first
        year of university at the Mathematics-Computer Science high school of
        Lyon. Unfortunately, I did not like the way the university worked and
        the mathematics course we were learning, but the teaching unit
        "Introduction to networks and web dev" really interested me. Thanks to
        this, I discovered the potential of HTML and CSS and after a year as an
        employee in the family arcade room "La Tête dans les Nuages", I set
        myself the goal of creating a personal website on which would be my
        resume and a showcase of my achievements in the form of a portfolio. I
        started to learn on my own again thanks to the free Openclassrooms
        lessons in particular.
        <br />
        <br />
        Today you are on the home page of this website, and if you have taken
        the time to read this text, I thank you and I hope you understand my
        determination to achieve my goals through the work-study program.
        <br />
        <br />
        You now have the choice to access my resume, my portfolio or contact me
        directly by clicking on one of the menu links at the top of the page.
        Enjoy your visit.
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingScreen from "@/components/en/Loading";

export default {
  name: "Home",
  data() {
    return {
      age: this.$store.state.age
    };
  },
  components: { LoadingScreen },
  created() {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/modules/main";
</style>
