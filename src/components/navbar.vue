<template>
  <div id="master">
    <a href="https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso" target="blank" >
      <button
      id="btn-simulacao"
      class="heartbeat"
    >
      Simule seu Financiamento
      </button>
    </a>
    <div id="navbar">
      <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
          <div class="branding">
            <img
              id="logo-empresa"
              :src="require('../assets/logo-empresa-nav.png')"
              alt=""
            />
            <h4>A NOSSA CAI<span>X</span>A</h4>
          </div>
          <ul v-show="!mobile" class="navigation">
            <li>
              <router-link
                class="link"
                :to="{ name: 'mainpage', hash: '#mainsection' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                class="link"
                :to="{ name: 'mainpage', hash: '#servicesection' }"
                >Serviços</router-link
              >
            </li>
            <li>
              <router-link
                class="link"
                :to="{ name: 'mainpage', hash: '#habit' }"
                >Financiamento</router-link
              >
            </li>
            <li @click="scrolltopMiddle">
              <router-link
                class="link"
                :to="{ name: 'mainpage', hash: '#middlesection' }"
                >Vantagens</router-link
              >
            </li>
            <li @click="scrolltop">
              <router-link class="link" to="/quemsomos" 
                >Quem Somos</router-link
              >
            </li>
            <li @click="scrolltop">
              <router-link class="link" to="/contato"
                >Contato</router-link
              >
            </li>
          </ul>
          <div class="icon">
            <i
              @click="toggleMobileNav"
              v-show="mobile"
              class="fa-solid fa-bars"
              :class="{ 'icon-active': mobileNav }"
            ></i>
          </div>
          <transition name="mobile-nav" id="mobileNavigation">
            <ul v-show="mobileNav" class="dropdown-nav">
              <li>
                <router-link
                  class="link"
                  :to="{ name: 'mainpage', hash: '#mainsection' }"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  class="link"
                  :to="{ name: 'mainpage', hash: '#servicesection' }"
                  >Serviços</router-link
                >
              </li>
              <li>
                <router-link
                  class="link"
                  :to="{ name: 'mainpage', hash: '#habit' }"
                  >Financiamento</router-link
                >
              </li>
              <li>
                <router-link
                  class="link"
                  :to="{ name: 'mainpage', hash: '#middlesection' }"
                  >Vantagens</router-link
                >
              </li>
              <li @click="scrolltop">
                <router-link class="link" to="/quemsomos"
                  >Quem Somos</router-link
                >
              </li>
              <li @click="scrolltop">
                <router-link class="link" to="/contato">Contato</router-link>
              </li>
            </ul>
          </transition>
        </nav>
      </header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    document.addEventListener("mousedown", (event) => {
      if (!event.target.closest("#mobileNavigation")) {
        this.mobileNav = false;
      }
    });
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      this.$emit("mobileNav", this.mobileNav);
    },
    closeMobileNav() {
      this.mobileNav = false;
      this.$emit("mobileNav", this.mobileNav);
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 900) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    scrolltop() {
      window.scrollTo(0, 0);
    },
    scrolltopMiddle() {
      window.scroll(0,2300);
    }
  },
};
</script>

<style>
header {
  background: var(--azul-caixa);
  opacity: 0.9;
  z-index: 98;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: var(--blue-dark);
  font-family: "Mukta", sans-serif;
}

nav {
  order: 2;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}

@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}

@media (min-width: 751px) and (max-width: 990px) {
  ul > li {
    margin-left: 15px;
  }

  .link {
    font-size: 12px;
  }
}

@media (min-width: 320px) and (max-width: 340px) {
  nav {
    padding-right: 10px;
  }
}

.branding > #logo-empresa {
  width: 100px;
}

ul,
.link {
  color: white;
  opacity: 3;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px 0;
  margin-left: 16px;
  font-weight: 600;
}

li > a {
  font-size: 18px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: var(--laranja);
}

.link:hover {
  color: var(--laranja);
  cursor: pointer;
}

#btn-simulacao {
  display: flex;
  align-items: center;
  height: 3rem;
  z-index: 99;
  width: 12rem;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.4px;
  position: fixed;
  top: 14px;
  right: 6px;
  background: linear-gradient(183deg, rgb(255, 135, 0), rgb(255, 80, 15));
}

#btn-simulacao:hover {
  cursor: pointer;
}

.heartbeat {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.branding {
  display: flex;
  align-items: center;
}

.branding > img {
  width: 50px;
  transition: 0.5s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
}

.icon {
  display: flex;
  align-items: center;
  position: aboslute;
  top: 0;
  right: 24px;
  height: 100%;
}

.icon > i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(180deg);
}

h4 > span {
  color: var(--laranja);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background: var(--azul-caixa);
  top: 0;
  left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.dropdown-nav > li {
  margin-left: 0;
}

.dropdown-nav > li > .link {
  color: var(--laranja);
}

.scrolled-nav {
  background: var(--azul-caixa);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav > nav {
  padding: 8px 0;
}

.scrolled-nav > nav > .branding > img {
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/*---------- Responsive Layout 1341px  - 1520px ----------*/
@media (min-width: 1341px) and (max-width: 1520px) {
  #master > #btn-simulacao {
    height: 3.5rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 7px;
    right: 2px;
  }
}

/*---------- Responsive Layout 1260px  - 1340px ----------*/
@media (min-width: 1260px) and (max-width: 1340px) {
  #master > #btn-simulacao {
    height: 2rem;
    width: 15rem;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 60px;
    right: 1%;
  }
}

/*---------- Responsive Layout 1116px  - 1259px ----------*/
@media (min-width: 1116px) and (max-width: 1259px) {
  #btn-simulacao {
    height: 3rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 2%;
    right: 1%;
  }
}

/*---------- Responsive Layout 991px  - 1115px ----------*/
@media (min-width: 991px) and (max-width: 1115px) {
  #btn-simulacao {
    height: 1.5rem;
    width: 15rem;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 3px;
    right: 35%;
  }
}

/*---------- Responsive Layout 901px  - 950px ----------*/
@media (min-width: 901px) and (max-width: 950px) {
   #btn-simulacao {
    height: 3rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 2%;
    right: 2%;
  }
}

/*---------- Responsive Layout 751px  - 900px ----------*/
@media (min-width: 751px) and (max-width: 900px) {
  #btn-simulacao {
    height: 2rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 1%;
    right: 10%;
  }
}

/*---------- Responsive Layout 577px  - 750px ----------*/
@media (min-width: 577px) and (max-width: 750px) {
  #btn-simulacao {
    height: 3rem;
    width: 8rem;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 4px;
    right: 75px;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #btn-simulacao {
    height: 2.5rem;
    width: 7rem;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 05px;
    right: 60px;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 375px) and (max-width: 425px) {
  #btn-simulacao {
    height: 2.5rem;
    width: 5.8rem;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.4px;
    top: 05px;
    right: 41px;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 374px) {
 #btn-simulacao {
    display: none;
  }
}
</style>
