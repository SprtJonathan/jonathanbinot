<template>
  <div>
    <HomeFR v-if="this.$store.state.language == 'fr'" />
    <HomeEN v-if="this.$store.state.language == 'en'" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeFR from "@/components/fr/Home";
import HomeEN from "@/components/en/Home";

export default {
  name: "Home",
  components: {
    HomeFR,
    HomeEN,
  },
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
