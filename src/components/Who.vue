<template>
  <div>
    <Navigation />
    <div class="headLineInfo">
      <h1 class="title">
        Who
      </h1>
      <hr class="titleUnderline" />
      <p>
        Software developer based in Malmö.
        <br />
        My main interest are development of system that improves peoples
        everyday life, education and leadership. My knowledge span from software
        architecture all the way to front-end development. In addition to this,
        I have experience in working with 3d-graphics and graphical design. I am
        always interested in meeting new people and learning new things, so feel
        free to contact me! Development: Java, C#, C++/C, JavaScript, HTML, Css,
        SQL among others
      </p>
    </div>
    <span class="profilePicture"> </span>
  </div>
</template>

<script>
import Navigation from "@/components/Landingpage/Navigation.vue";

export default {
  name: "Who",
  components: {
    Navigation
  }
};
</script>

<style scoped lang="scss">
.headLineInfo {
  position: absolute;
  top: 20%;
  left: 30%;
  width: 300px;
  text-align: left;

  .title {
    text-transform: uppercase;
    margin: 0px;

    h1 {
      color: var(--h1-text-color);
    }
  }

  .titleUnderline {
    width: 100%;
    border-style: inset;
  }
}
.profilePicture {
  border: 5px solid #303030;
  background-image: url(https://live.staticflickr.com/65535/49606112477_797c2b905e_k.jpg);
  color: transparent;
  //background-size: cover;
  background-size: auto 100%;
  background-position: 50% 50%;
  background-repeat: none;
  z-index: 100;
  width: 550px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 20%;
}
</style>
