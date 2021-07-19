<template>
  <div class="lang">
    <header class="header--lg-selector">
      <h1>
        Jonathan Binot <br />
        Personnal Website - Site Web
      </h1>
    </header>

    <section class="language-selection-section">
      <h2 class="change-lg">Choisissez votre langue</h2>
      <div class="homepage-selector-lang">
        <button type="submit" @click="setLanguageFr" class="fr">
          <img
            src="@/assets/images/FR.png"
            alt="version FR"
            class="fr-flag"
            height="100"
            width="100"
          />
        </button>
        <button type="submit" @click="setLanguageEn" class="en">
          <img
            src="@/assets/images/EN.png"
            alt="EN version"
            class="en-flag"
            height="100"
            width="100"
          />
        </button>
      </div>
      <h2 class="change-lg">Choose your language</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "LanguageSelection",

  methods: {
    setLanguageFr() {
      localStorage.setItem("language", "fr")
      location.reload();
    },
    setLanguageEn() {
      localStorage.setItem("language", "en")
      location.reload();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/modules/main";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
