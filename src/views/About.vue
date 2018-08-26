<template>

  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else >
      <p>This is where stuff would go</p>
      {{info}}
    </div>

  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: null
    };
  },
  mounted() {
    console.log("Mounted and firing call");
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.info = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style lang="scss">
.about {
}
</style>
