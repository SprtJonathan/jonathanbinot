<template>
  <div>
    <PortfolioFR v-if="this.$store.state.language == 'fr'" />
    <PortfolioEN v-if="this.$store.state.language == 'en'" />
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioFR from "@/components/fr/Portfolio";
import PortfolioEN from "@/components/en/Portfolio";

export default {
  name: "Home",
  components: {
    PortfolioFR,
    PortfolioEN,
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
