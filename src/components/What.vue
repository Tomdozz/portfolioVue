<template>
  <div class="body">
    <section>
      scroll down
    </section>
    <section class="content">
      <div class="left">
        <img alt="yello" src="../assets/logo.png" class="yellow anim" />
        <p class="anim">I have no clue what i im doing</p>
        <img alt="squig" src="../assets/logo.png" class="squig anim" />
      </div>
      <div class="right">
        <div>
          <h2>Get yellow</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            assumenda officiis reiciendis, libero dolore ea excepturi et illum
            ratione ipsam minima sint nostrum soluta, quaerat sequi illo rerum
            deleniti possimus! Eaque autem dolore voluptate facere perspiciatis
            harum veritatis laudantium aliquid!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const images = document.querySelectorAll(".anim");

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("fancy");
          //                    entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.classList.remove("fancy");
          //                  entry.target.style.animation = 'none';
        }
      });
    });

    images.forEach(image => {
      observer.observe(image);
    });

    //observer.observe(images);
  }
};
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  margin: 0;
  background: #212933;
  color: #738baa;
}

.yellow.fancy {
  animation: anim1 2.7s ease-out;
}
.squig.fancy {
  animation: anim2 2.7s ease-out;
}

@keyframes anim1 {
  0% {
    opacity: 0;
    transform: translateX(-30rem) rotate(-45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes anim2 {
  0% {
    opacity: 0;
    transform: translateX(30rem) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

section {
  width: 80%;
  margin: 0 auto;
  height: 100vh;
}

.content {
  display: grid;
  grid-template-columns: 70% auto;

  .left {
    position: relative;
    text-align: center;
    display: grid;
    place-items: center;

    p {
      background: white;
      position: absolute;
      margin-top: -25%;
      right: 17%;
      color: black;
      padding: 1em;
      border-radius: 15px;
      width: 20vw;
      text-align: left;
    }
  }

  .yellow {
    width: 50%;
    //opacity: 0;
  }

  .squig {
    position: absolute;
    margin-top: 32%;
    left: 19%;
    width: 8vw;
  }

  .right {
    display: grid;
    place-items: center;

    h2 {
      color: white;
      font-size: 1.7rem;
    }

    p {
      line-height: 1.6em;
    }
  }
}
</style>
