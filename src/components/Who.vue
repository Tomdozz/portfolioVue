<template>
  <div class="body">
    <Navigation />
    <section>
      <h1 class="whoTitle centerInSection">Who.</h1>
    </section>
    <section>
      <div class="long">
        <div class="left info section1Anim">
          <h1>I'm a web developer</h1>
          <h2>...with a passion for design</h2>
        </div>

        <img
          alt="profile"
          src="../assets/tom.jpg"
          class="profile right section1Anim"
        />
      </div>
    </section>
    <section>
      <div class="dev">
        <img
          alt="keyboard"
          src="../assets/keyboard2.png"
          class="keyboard section1Anim"
        />
        <div class="development">
          <h1>Development</h1>
          <p>
            I'm a full stack developer based i Malmö. I got a B.S in computer
            sience with specialization in game development. My biggest passion
            is design and creating an software that improve peoples everyday
            lives.
          </p>

          <div class="skill-cap">
            <p>JAVA</p>
            <div class="skill-container">
              <div class="skills section1Anim java"></div>
            </div>
          </div>
          <div class="skill-cap">
            <p>HTML/CSS</p>
            <div class="skill-container">
              <div class="skills section1Anim html"></div>
            </div>
          </div>
          <div class="skill-cap">
            <p>JavaScript</p>
            <div class="skill-container">
              <div class="skills section1Anim js"></div>
            </div>
          </div>
          <div class="skill-cap">
            <p>Vue</p>
            <div class="skill-container">
              <div class="skills section1Anim vue"></div>
            </div>
          </div>
          <div class="skill-cap">
            <p>Adobe XD</p>
            <div class="skill-container">
              <div class="skills section1Anim xd"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <img
        alt="camera"
        src="../assets/camera1.png"
        class="camera section1Anim"
      />
      <div class="photography section1Anim">
        <h1>Photography & videography</h1>
        <p>I am a lifestyle</p>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Landingpage/Navigation.vue";

export default {
  name: "Who",
  components: {
    Navigation
  },
  mounted() {
    const section1 = document.querySelectorAll(".section1Anim");
    let section1Observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("move");
        } else {
          entry.target.classList.remove("move");
        }
      });
    });
    section1.forEach(one => {
      section1Observer.observe(one);
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/global.scss";
@import "../assets/who/skillSlider.scss";
@import "../assets/who/development.scss";
@import "../assets/who/photograohyVideography.scss";
@import "../assets/who/title.scss";

.body {
  background: var(--paper);
  width: 100vw;
}
h1 {
  color: var(--dusty);
}
h2,
h3 {
  color: var(--lavendar);
}
p {
  color: var(--lavendar);
}
.firstSection {
  height: 110wh;
}

section {
  height: 100vh;
  overflow: hidden;
}
.centerInSection {
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
}

.whoTitle {
  font-size: 500px;
  margin: 0px;
}
</style>
