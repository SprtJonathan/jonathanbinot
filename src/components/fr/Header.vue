<template>
  <header class="header--classic">
    <ul class="navbar">
      <li><router-link to="/" class="active">ACCUEIL</router-link></li>
      <li><router-link to="/resume" class="cv-page">MON CV</router-link></li>
      <li>
        <router-link to="/portfolio" class="portfolio-page"
          >MON PORTFOLIO</router-link
        >
      </li>
      <li>
        <a
          target="_blank"
          href="mailto:contact@jonathanbinot.com"
          class="contact-page"
          >CONTACT <b-icon icon="box-arrow-up-right"></b-icon
        ></a>
      </li>
    </ul>
    <section class="header-lng-dark">
      <button @click="setLanguageEn" class="en">
        <img
          src="@/assets/images/EN.png"
          alt="EN version"
          class="en-flag"
          height="24"
          width="24"
        />
      </button>
      <div class="theme-switch-wrapper">
        <button @click="toggleTheme" aria-label="Toggle themes">
          <span class="dark-mode-button" v-if="this.theme == 'darkMode'"
            ><b-icon icon="sun"></b-icon
          ></span>
          <span class="dark-mode-button" v-else
            ><b-icon icon="moon"></b-icon
          ></span>
        </button>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      theme: "", //When this property is empty, the theme is set to the default theme i.e. light mode.
    };
  },
  mounted() {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
    test() {
      console.log(this.$state.language);
    },
    setLanguageEn() {
      localStorage.setItem("language", "en");
      location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/modules/main";
nav {
  display: flex;
  flex-direction: column;
  background-color: $primary-color;
  color: $secondary-color;
  margin-bottom: 50px;
}

.logo {
  width: 50vw;
}
.user-dropdown {
  width: auto;
}
.profile-picture {
  &--image {
    width: 15%;
    border-radius: 50%;
    margin: auto;
  }
}
@media (min-width: 1024px) {
  #nav {
    flex-direction: row;
  }
  .logo {
    width: 10vw;
  }
  .user-dropdown {
    width: 10vw;
  }
}
</style>
