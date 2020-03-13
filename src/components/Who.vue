<template>
  <div class="body">
    <Navigation />
    <section>
      <h1 class="whoTitle centerInSection">Who.</h1>
    </section>
    <!-- <section class="shortSection">
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
    </section> -->
    <section>
      <div class="long">
        <div class="left info section1Anim">
          <h1>I'm a web developer</h1>
          <h2>... in a designer's body</h2>
          <!-- <p>
            Software developer based in Malmö. My main interests are development
            of system that improves peoples everyday life, education and
            leadership. My knowledge span from software architecture all the way
            to front-end development. In addition to this, I have experience in
            working with 3d-graphics and graphical design. I am always
            interested in meeting new people and learning new things, so feel
            free to contact me! Development: Java, C#, C++/C, JavaScript, HTML,
            Css, SQL among others
          </p> -->
        </div>

        <img
          alt="profile"
          src="../assets/tom.jpg"
          class="profile right section1Anim"
        />
      </div>
    </section>
    <section>
      
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
.body {
  background: var(--paper);
  //color: #738baa;
}
h1{
    color: var(--dusty)
}
h2, h3{
    color: var(--lavendar)
}
p{
    color: var(--lavendar)
}
.firstSection {
  height: 110wh;
}

section {
  height: 100vh;
  overflow: hidden;
  //background: var(--paper);
}
.shortSection {
  height: 50vh;
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
.long {
  display: grid;
  grid-template-columns: 50% auto;

  .info {
    width: 80%;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0%);
    position: relative;
    opacity: 0;

    h1 {
      font-size: 7em;
      text-align: left;
      text-transform: uppercase;
    }

    h2 {
      font-size: 2em;
      text-align: left;
      text-transform: uppercase;
    }
    p {
      text-align: left;
      //background: white;
      position: absolute;
      //padding: 1em;
    }
  }

  .profile {
    position: relative;

    display: grid;
    place-items: center;
    width: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
  }
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

.info.move {
  animation: info 1.5s ease-in;
  animation-fill-mode: forwards;

}

@keyframes info {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.profile.move {
  animation: profile 1.5s ease-in;
  animation-fill-mode: forwards;

}

@keyframes profile {
  0% {
    opacity: 0;
    transform: translateX(-30%) rotateY(20deg);
  }
  100% {
    opacity: 1;
    //transform: scale(1) rotate(0deg);
  }
}
</style>
