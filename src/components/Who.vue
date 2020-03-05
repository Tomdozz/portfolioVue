<template>
  <div class="body">
    <Navigation />
    <section>
      <h1 class="whoTitle centerInSection">Who.</h1>
    </section>
    <section>
      <div class="short">
        <h3 class="title">
          Tom Andersson
        </h3>
        <div class="lineWrapper">
          <div class="line section1Anim"></div>
        </div>
        <h2>I'm a developer, photographer, videographer and ...</h2>
        <p>
          I'm passionate about creating things that are slowly making the world
          a better place. Or just awsome things in general.
        </p>
      </div>
    </section>

    <section>
      <div class="headLineInfo">
        <h1 class="title">
          Who
        </h1>
        <hr class="titleUnderline" />
        <p>
          Software developer based in Malmö.
          <br />
          My main interests are development of system that improves peoples
          everyday life, education and leadership. My knowledge span from
          software architecture all the way to front-end development. In
          addition to this, I have experience in working with 3d-graphics and
          graphical design. I am always interested in meeting new people and
          learning new things, so feel free to contact me! Development: Java,
          C#, C++/C, JavaScript, HTML, Css, SQL among others
        </p>
      </div>
      <span class="profilePicture"> </span>
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
body {
  height: 100vh;
  margin: 0;
  background: #212933;
  color: #738baa;
}
.firstSection {
  height: 100%;
}

section {
  height: 100vh;
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

.short {
  .title {
    text-transform: uppercase;
    margin: 0px;

    h1 {
      color: var(--h1-text-color);
    }
  }
  .lineWrapper {
    height: 50px;
    width: 50px;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .line {
    position: relative;
    top: 50%;
    width: 6px;
    height: 6px;
    background: var(--h1-text-color);
    transform: skew(0deg, -10deg);
  }

  .headLineInfo {
    position: relative;
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
    width: 550px;
    height: 400px;
    background-image: url(https://live.staticflickr.com/65535/49606112477_797c2b905e_k.jpg);
    color: transparent;
    //background-size: cover;
    background-size: auto 100%;
    background-position: 50% 50%;
    background-repeat: none;
    z-index: 100;

    position: relative;
    // left: 50%;
    // top: 20%;
  }

  //---Animations---
  .line.move {
    animation: section1anim1 0.6s ease-in;
    animation-fill-mode: forwards;
  }
  @keyframes section1anim1 {
    from {
      opacity: 0;
      width: 6px;
    }
    to {
      opacity: 1;
      width: 50px;
    }
  }
}
</style>
