<template>
  <div id="header">
    <div id="mainsection">
      <div id="logo" data-aos="slide-right" data-aos-duration="3000"></div>
      <div id="info-mainsection">
        <img
          id="img-empresa"
          data-aos="fade-down"
          data-aos-duration="3000"
          :src="require('../assets/logo-empresa-15001.png')"
        />
        <h1 id="titulo" data-aos="fade-down" data-aos-duration="3000">
          A NOSSA CAI<span>X</span>A
        </h1>
        <h3 data-aos="zoom-in-up" data-aos-duration="3000">
          Produtos e serviços<br />
          com garantia
        </h3>
        <button id="btn-main-section" class="rotate-scale-down-ver" >
          <router-link :to="{ name: 'mainpage', hash: '#servicesection' }"
            >Serviços Disponíveis</router-link
          >
        </button>
      </div>
      <div id="logo-caixa-aqui" data-aos="slide-left" data-aos-duration="2000">
        <img id="caixa-aqui-logo" :src="require('../assets/caixa-aqui.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainsection",
};
</script>

<style>
#header {
  background-image: linear-gradient(
      to right,
      rgba(208, 226, 231, 0),
      rgba(241, 246, 248, 0.952)
    ),
    url("../assets/background-caixa.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 740px;
}
#mainsection {
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 766px;
  padding-top: 5%;
  position: relative;
  font-family: "Mukta", sans-serif;
}

#logo {
  background-image: url("../assets/mao.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 90%;
}

#info-mainsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 90%;
}

#info-mainsection > #titulo {
  color: #112e61;
  font-size: 5rem;
  letter-spacing: 1rem;
}

#info-mainsection > h1 > span {
  color: var(--laranja);
}
#logo-caixa-aqui {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 7%;
  height: 100%;
  width: 6%;
}

#img-empresa {
  width: 50rem;
  height: 16rem;
}

#caixa-aqui-logo {
  border-radius: 7px;
  margin-top: 2%;
  width: 100px;
  height: 100px;
}

#info-mainsection > h3 {
  font-size: 2rem;
  color: var(--blue-transparent);
  padding-top: 3%;
}

button {
  background: var(--linear1);
  color: white;
  border-radius: 5px;
  padding: 0.5%;
  border: none;
}

#btn-main-section {
  margin-top: 3%;
  font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
}

#btn-main-section:hover {
  cursor: pointer;
  background: var(--linear2);
}

button > a {
  color: white;
  text-decoration: none;
}

.rotate-scale-down-ver {
  -webkit-animation: rotate-scale-down-ver 0.65s linear both;
  animation: rotate-scale-down-ver 0.65s linear both;
}

@-webkit-keyframes rotate-scale-down-ver {
  0% {
    -webkit-transform: scale(1) rotateY(0);
    transform: scale(1) rotateY(0);
  }
  50% {
    -webkit-transform: scale(0.5) rotateY(180deg);
    transform: scale(0.5) rotateY(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateY(360deg);
    transform: scale(1) rotateY(360deg);
  }
}
@keyframes rotate-scale-down-ver {
  0% {
    -webkit-transform: scale(1) rotateY(0);
    transform: scale(1) rotateY(0);
  }
  50% {
    -webkit-transform: scale(0.5) rotateY(180deg);
    transform: scale(0.5) rotateY(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateY(360deg);
    transform: scale(1) rotateY(360deg);
  }
}

/*---------- Responsive Layout 1580px - 1600px ----------*/
@media (max-width: 1600px) {
  #header {
    background-image: linear-gradient(
        to right,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    justify-content: center;
    min-height: 763px;
  }
}

/*---------- Responsive Layout 1401px  - 1580px ----------*/
@media (max-width: 1580px) {
  #header {
    background-image: linear-gradient(
        to right,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    justify-content: center;
  }
  #mainsection {
    flex-direction: row;
  }

  #logo {
    width: 50%;
    height: 100%;
    align-self: flex-start;
  }

  #info-mainsection {
    width: 50%;
    height: 100%;
  }

  #info-mainsection > #titulo {
    font-size: 3.5rem;
  }

  #logo-caixa-aqui {
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    height: 90%;
    width: 12%;
  }

  #caixa-aqui-logo {
    width: 80px;
    height: 80px;
  }

  #img-empresa {
    width: 40rem;
    height: 12rem;
  }

  #info-mainsection > h3 {
    font-size: 1.7rem;
  }

  #btn-main-section {
   font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
    margin-top: 2%;
  }
}

/*---------- Responsive Layout 1025px  - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #header {
    background-image: linear-gradient(
        to right,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    justify-content: center;
  }

  #mainsection {
    flex-direction: row;
  }

  #logo {
    width: 50%;
    height: 100%;
    align-self: flex-start;
  }

  #info-mainsection {
    width: 50%;
    height: 100%;
  }

  #info-mainsection > #titulo {
    font-size: 3.5rem;
  }

  #logo-caixa-aqui {
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    margin: 2% 2% 0 0;
    height: 90%;
    width: 12%;
  }

  #caixa-aqui-logo {
    width: 80px;
    height: 80px;
  }

  #img-empresa {
    width: 40rem;
    height: 12rem;
  }

  #info-mainsection > h3 {
    font-size: 1.7rem;
  }

  #btn-main-section {
    font-size: 1.4rem;
    width: 20rem;
    height: 3rem;
    margin-top: 2%;
  }
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #header {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    justify-content: center;
  }
  #mainsection {
    flex-direction: column-reverse;
  }

  #logo {
    width: 50%;
    height: 50%;
    align-self: flex-start;
  }

  #info-mainsection {
    width: 100%;
    height: 40%;
  }

  #info-mainsection > #titulo {
    font-size: 3.5rem;
  }

  #logo-caixa-aqui {
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    margin-top: 3%;
    height: 20%;
    width: 12%;
  }

  #caixa-aqui-logo {
    width: 80px;
    height: 80px;
  }

  #img-empresa {
    width: 40rem;
    height: 12rem;
  }

  #info-mainsection > h3 {
    font-size: 1.7rem;
  }

  #btn-main-section {
  font-size: 1.4rem;
  width: 60%;
  height: 3rem;
  margin-top: 2%;
  }
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
  #header {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    justify-content: center;
    min-height: 769px;
  }
  #mainsection {
    flex-direction: column-reverse;
  }

  #logo {
    width: 100%;
    height: 58%;
  }

  #info-mainsection {
    width: 100%;
    height: 23%;
  }

  #info-mainsection > #titulo {
    font-size: 3rem;
  }

  #logo-caixa-aqui {
    align-self: flex-end;
    justify-content: flex-end;
    height: 15%;
    margin-right: 2%;
    width: 13%;
  }

  #img-empresa {
    width: 37rem;
    height: 10rem;
  }

  #caixa-aqui-logo {
    width: 80px;
    height: 80px;
  }

  #info-mainsection > h3 {
    font-size: 1.5rem;
  }

  #btn-main-section {
    width: 60%;
    height: 2.5rem;
    font-size: 1.3rem;
    margin-top: 2%;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #header {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
    min-height: 810px;
  }
  #mainsection {
    flex-direction: column-reverse;
  }

  #logo {
    width: 100%;
    height: 90%;
  }

  #info-mainsection {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 90%;
  }

  #info-mainsection > #titulo {
    font-size: 2.5rem;
  }
  #logo-caixa-aqui {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    height: 25%;
    width: 95%;
  }

  #img-empresa {
    width: 28rem;
    height: 8rem;
  }

  #caixa-aqui-logo {
    width: 60px;
    height: 60px;
  }

  #info-mainsection > h3 {
    font-size: 1.5rem;
    padding-top: 3%;
  }

  #btn-main-section {
    width: 90%;
    height: 2.5rem;
    font-size: 1.3rem;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 374px) and (max-width: 425px) {
  #header {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
  }
  #mainsection {
    flex-direction: column-reverse;
  }

  #logo {
    width: 100%;
    height: 90%;
  }

  #info-mainsection {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 90%;
  }

  #info-mainsection > #titulo {
    font-size: 1.9rem;
  }
  #logo-caixa-aqui {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    height: 25%;
    width: 95%;
  }

  #img-empresa {
    width: 23rem;
    height: 6rem;
  }

  #caixa-aqui-logo {
    border-radius: 7px;
    margin-top: 2%;
    width: 50px;
    height: 50px;
  }

  #info-mainsection > h3 {
    font-size: 1.2rem;
    padding-top: 3%;
  }

  #btn-main-section {
    width: 80%;
    height: 2.5rem;
    font-size: 1.2rem;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 373px) {
  #header {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0),
        rgba(241, 246, 248, 0.952)
      ),
      url("../assets/background-caixa.jpeg");
  }
  #mainsection {
    flex-direction: column-reverse;
  }

  #logo {
    width: 100%;
    height: 90%;
  }

  #info-mainsection {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 90%;
  }

  #info-mainsection > #titulo {
    font-size: 1.9rem;
  }
  #logo-caixa-aqui {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    height: 25%;
    width: 95%;
  }

  #img-empresa {
    width: 23rem;
    height: 6rem;
  }

  #caixa-aqui-logo {
    border-radius: 7px;
    margin-top: 2%;
    width: 50px;
    height: 50px;
  }

  #info-mainsection > h3 {
    font-size: 1.2rem;
    padding-top: 3%;
  }

  #btn-main-section {
    width: 80%;
    height: 2.5rem;
    font-size: 1.1rem;
  }
}
</style>
