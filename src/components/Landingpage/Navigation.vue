<template>
  <div id="navbar">
    <div id="home" @click="home">
      <span>LifeArray</span>
    </div>
    <!-- <div
      id="burger"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </slot>
      <transition name="fade">
        <div v-if="isBurgerActive" id="dropdownlist">
          <div class="menu_connector"></div>
          <ul>
            <li v-for="item in items" :key="item.name">
              <router-link class="menuEntry" :to="{ name: item.redirectTo }">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div> -->
    <div class="headerMenu">
        <ul>
          <li v-for="headlineItem in headlineItems" :key="headlineItem.name">
            <router-link class="menuEntry" :to="{name: headlineItem.redirectTo}">{{
                headlineItem.title
              }}</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        {
          title: "Login",
          redirectTo: "login",
          additionalinformation: ""
        },
        {
          title: "About",
          redirectTo: "login",
          additionalinformation: ""
        },
        {
          title: "Sign up",
          redirectTo: "login",
          additionalinformation: ""
        },
        {
          title: "Sign in",
          redirectTo: "login",
          additionalinformatio: ""
        }
      ];
    },
    headlineItems(){
        return [
            {
                title: "Who",
                redirectTo: "who"
            },
            {
                title: "What",
                redirectTo: "login"
            },
            {
                title: "Work",
                redirectTo: "login"
            },
             {
                title: "New title",
                redirectTo: "login"
            }
        ]
    }
  },
  mounted() {},
  data() {
    return {
      isBurgerActive: false
    };
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    home() {
      this.$router.push({ name: "FirstPage" });
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/global.scss';

#navbar {
  position: fixed;
 // background-color: rgba(128, 128, 128, 0.171);
  width: 100%;
  height: var(--topnav-height);
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
  color: black;
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
  content: '';
  display: block;
  position: absolute;
  top: 0;
  transform: translateY(10px);
  transform: rotate(45deg);
  width: 55px;
  height: 55px;
  background-color: rgb(255, 255, 255);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
  width: 600px;
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
    width: calc(100% / 4);
    //height: 120px;
    text-align: center;
  }

  a {
    //color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
  
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
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
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:before { 
    width: 100%; 
    left: 0; 
  }
}
</style>