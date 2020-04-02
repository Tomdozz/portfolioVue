<template>
  <div id="navbar">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="contactBtn" v-on:click="toggle">
      <h3>Contact</h3>
    </div>
    <transition name="expand">
      <div v-if="showContact" class="overlay">
        <div class="close" v-on:click="toggle"></div>
        <h4 class="contactMe">Contact me</h4>
        <a href="mailto:hello@tomandersson.se" class="mailto">
          hello@tomandersson.se
        </a>

        <div class="socialmedialinks">
          <ul class="social-list">
            <li v-for="socialItem in socialItems" :key="socialItem.name">
              <a
                target="_blank"
                :class="socialItem.class"
                :href="socialItem.redirectTo"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="headerMenu">
      <ul>
        <li v-for="headlineItem in headlineItems" :key="headlineItem.name">
          <router-link
            :class="headlineItem.class"
            :to="{ name: headlineItem.redirectTo }"
            >{{ headlineItem.title }}
            <h6 class="subTitle">{{ headlineItem.subTitle }}</h6>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    headlineItems() {
      return [
        {
          title: "Who",
          redirectTo: "who",
          class: "menuEntry"
        },
        // {
        //   title: "What",
        //   redirectTo: "what",
        //   class: "menuEntry"
        // },
        {
          title: "Tom Andersson",
          redirectTo: "firstPage",
          class: "menuEntry home",
          subTitle: "Developer Photographer Videographer"
        },
        {
          title: "Work",
          redirectTo: "login",
          class: "menuEntry"
        }
        // {
        //   title: "Contact",
        //   redirectTo: "login",
        //   class: "menuEntry"
        // }
      ];
    },

    socialItems() {
      return [
        {
          title: "LinkedIn",
          redirectTo: "https://www.linkedin.com/in/tom-andersson-4a7189113/",
          class: "fa fa-linkedin"
        },
        {
          title: "Instagram",
          redirectTo: "https://www.instagram.com/lifearray/",
          class: "fa fa-instagram"
        },
        {
          title: "LinkedIn",
          redirectTo: "https://www.linkedin.com/in/tom-andersson-4a7189113/",
          class: "fa fa-twitter"
        }
      ];
    }
  },
  mounted() {},
  data() {
    return {
      showContact: false
    };
  },
  methods: {
    toggle() {
      this.showContact = !this.showContact;
    },
    home() {
      this.$router.push({ name: "FirstPage" });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/global.scss";

#navbar {
  position: absolute;
  width: 100%;
  height: var(--topnav-height);
  padding-top: 40px;
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  animation: spin 1s linear infinite;
  animation-play-state: paused;
}
.close:hover {
  opacity: 1;
  animation-play-state: running;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: var(--dark);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

@keyframes spin {
  100% {
    transform: rotate(1turn);
  }
}

.contactBtn {
  position: relative;
  left: 90%;
  transform: translate(-50%, 0%);
  cursor: pointer;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
    color: var(--dark);
  }
}
.fa {
  text-decoration: none;
  font-size: 30px;
  width: 50px;
  color: var(--dusty);
}

.fa:hover {
  color: var(--lavendar);
}

.socialmedialinks {
  position: fixed;
  width: 100%;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
}
.social-list {
  padding: 0px;
}

.social-list li {
  display: inline;
}

.overlay {
  position: fixed;
  width: 90%;
  height: 90%;
  background-color: var(--paper);
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .contactMe {
    position: relative;
    top: 40%;
    left: 50%;
    font-size: 20px;
    color: var(--lavendar);
    transform: translate(-50%, -50%);
  }
}
.mailto {
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 80px;
  transform: translate(-50%, -50%);
  color: var(--dusty);
  text-decoration: none;
}
.mailto.hover {
  color: var(--lavendar);
}

#home {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

li {
  list-style-type: none;
}

.menuEntry {
  text-decoration: none;
  color: var(--dark);
}
#dropdownlist {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  left: 90%;
  top: 150%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  transform-origin: top;
}
.menu_connector {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  transform: translateY(10px);
  transform: rotate(45deg);
  width: 55px;
  height: 55px;
  background-color: rgb(255, 255, 255);
}
.expand-enter-active {
  animation: bounce-in 0.5s;
}
.expand-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    max-height: 0px;
    opacity: 0.4;
  }
  100% {
    max-height: 100%;
    opacity: 1;
  }
}

#dropdownlist li {
  width: 200px;
  padding-top: 10px;
  transform: translateY(0);
}
.burger-button {
  position: absolute;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  left: 90%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: 0px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 50% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

.headerMenu {
  position: absolute;
  left: 50%;
  width: 1000px;
  top: 50%;
  transform: translate(-50%, -50%);

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0;
  }

  li {
    list-style: none;
    display: inline-block;
    //width: calc(100% / 5);
    //height: 120px;
    text-align: center;
    //padding: 15px;
  }

  .menuEntry {
    padding: 25px;
    width: 250px;
  }
  .home {
    width: 350px;
    height: 50px;
  }
  .subTitle {
    position: absolute;
    text-transform: uppercase;
    top: 55%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  a {
    //color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
    color: var(--dark);
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--dark);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }

  a:before {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    top: 5%;
    background: var(--dark);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:before {
    width: 100%;
    left: 0;
  }
}
</style>
