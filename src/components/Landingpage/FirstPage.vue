<template>
  <div class="firstpage">
    <Navigation />
    <section>
      <FullScreenBackground />
    </section>
    <section>
      hello
    </section>

    <!-- <div class="circle center"></div> -->
    <div class="center"></div>
    <!-- <img src="../../assets/netset-59.jpg" alt="backdrop" /> -->
  </div>
</template>

<script>
import Navigation from "@/components/Landingpage/Navigation.vue";
import FullScreenBackground from "@/components/Landingpage/FullScreenBackground.vue";

export default {
  name: "FirstPage",
  components: {
    Navigation,
    FullScreenBackground
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/global.scss";

section {
  //width: 80%;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
}

h1 {
  text-transform: uppercase;
  color: var(--h1-text-color);
}
h4 {
  text-transform: uppercase;
  color: var(--h4-text-color);
}

.title:before {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  top: -50%;
  background: black;
  width: 100%;
}
.title:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  top: 150%;
  background: black;
  width: 100%;
}

// .circle {
//     background-color:rgba(255, 255, 255, 0);
//     border:1px solid rgb(0, 0, 0);
//     height:300px;
//     border-radius:100%;
//     -moz-border-radius:50%;
//     -webkit-border-radius:50%;
//     width:420px;
//     	// transform: translate(-50%, -10%);
// }
</style>
