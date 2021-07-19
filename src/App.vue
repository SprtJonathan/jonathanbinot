<template>
  <div id="app">
    <LanguageSelection v-if="this.$store.state.language == ''" />
    <HeaderFR v-if="this.$store.state.language == 'fr'" />
    <HeaderEN v-if="this.$store.state.language == 'en'" />
    <button @click="click()"></button>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderFR from "@/components/fr/Header.vue";
import HeaderEN from "@/components/en/Header.vue";
import LanguageSelection from "@/components/LanguageSelection.vue";
export default {
  data() {
    return {
      language: localStorage.getItem("language"),
    };
  },
  methods: {
    setLanguageFr() {
      localStorage.setItem("language", "fr");
      location.reload();
    },
    setLanguageEn() {
      localStorage.setItem("language", "en");
      location.reload();
    },
  },
  components: {
    LanguageSelection,
    HeaderFR,
    HeaderEN,
  },
};
</script>

<style lang="scss">
@import "@/modules/main";
button {
  background: none;
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
