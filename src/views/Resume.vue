<template>
  <div>
    <ResumeFR v-if="this.$store.state.language == 'fr'" />
    <ResumeEN v-if="this.$store.state.language == 'en'" />
  </div>
</template>

<script>
// @ is an alias to /src
import ResumeFR from "@/components/fr/Resume";
import ResumeEN from "@/components/en/Resume";

export default {
  name: "Home",
  components: {
    ResumeFR,
    ResumeEN,
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
