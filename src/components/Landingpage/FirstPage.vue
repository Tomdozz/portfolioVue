<template>
  <div class="firstpage">
    <Navigation />
    <section>
      <FullScreenBackground />
      <div class="scrolldown">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
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

.scrolldown {
  position: relative;
  width: 24px;
  height: 24px;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
}

.chevron {
  position: absolute;
  width: 30px;
  height: 10px;
  opacity: 0;
  animation: move 4s ease-out infinite;
}

.chevron:first-child {
  animation: move 4s ease-out 2s infinite;
}

.chevron:nth-child(2) {
  animation: move 4s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: rgb(0, 0, 0);
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 40deg);

  border-top-left-radius: 3px;
  //border-top-right-radius: 6px;
  border-bottom-left-radius: 3px;
  //border-bottom-right-radius: 6px;
}

.chevron:after {
  right: 0;
  width: 50%;
  //border-top-left-radius: 6px;
  border-top-right-radius: 3px;
  //border-bottom-left-radius: 6px;
  border-bottom-right-radius: 3px;
  transform: skew(0deg, -40deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

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
