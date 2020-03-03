<template>
  <div>
    <Navigation />
    <div class="headLineInfo">
      <h1 class="title">
        Who
      </h1>
      <hr class="titleUnderline" />
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae,
        eveniet, maiores autem deleniti sapiente pariatur qui nisi fugit numquam
        sint, porro atque alias beatae facilis ad quos molestias obcaecati.
      </p> -->
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

  .title {
    text-transform: uppercase;
    margin: 0px;

    h1 {
      color: var(--h1-text-color);
    }
  }

  .titleUnderline {
    width: 30%;
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
