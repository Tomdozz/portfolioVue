<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    //transform: translateX(0);
  }
  to {
    //transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    // transform: translateX(-50px);
    opacity: 0;
  }
  to {
    // transform: translateX(0);
    opacity: 1;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
