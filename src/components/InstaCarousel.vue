<template>
    <carousel>
        <slide v-for="i in info" :key="i.id" v-html="slide">
            {{i.id}}
        </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  name: "InstaCarousel",
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  components: {
    Carousel,
    Slide
  },
  mounted() {
    axios
      .get("/about/insta")
      .then(response => {
        this.info = response.data.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
