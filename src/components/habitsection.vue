<template>
  <div id="habit">
    <h1>Financiamento Imobiliário</h1>
    <div id="main">
      <div data-aos="zoom-in" id="info">
        <h1>Realize o Sonho da Casa Propria</h1>
      </div>
      <div id="cards1">
        <div data-aos="flip-left" data-aos-duration="2000" class="cardsbanner">
          <i class="material-icons">account_balance_wallet</i>
          <h3>Portabilidade do Crédito Imobiliário</h3>
          <div class="infos">Migração do seu Financiamento para a CAIXA.</div>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000" class="cardsbanner">
          <i class="material-icons">home</i>
          <h3>Imovel Novo ou Usado</h3>
          <div class="infos">Casa ou apartamento, novo ou usado</div>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000" class="cardsbanner">
          <i class="material-icons">format_paint</i>
          <h3>Construção e Reforma</h3>
          <div class="infos">Construa ou reforme a sua casa</div>
        </div>
      </div>
      <div id="cards2">
        <div data-aos="flip-left" data-aos-duration="2000" class="cardsbanner">
          <i class="material-icons">business</i>
          <h3>Imóvel Comercial</h3>
          <div class="infos">
            Amplie seus negócios com a compra de um terreno, imóvel novo, usado
            ou na planta
          </div>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000" class="cardsbanner">
          <i class="material-icons">account_balance</i>
          <h3>Habitação Social</h3>
          <div class="infos">
            Financiamentos especiais para comprar, construir ou reformar
          </div>
        </div>
      </div>
      <button id="btn-finan" @click="scrolltop">
        <router-link to="/contato"> Saiba Mais </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "habit",
  data() {
    return {};
  },
  methods: {
    scrolltop() {
      window.scrollTo(0, 0);
    },
  }
};
</script>

<style>
#habit {
  background-image: linear-gradient(
      to right,
      rgba(86, 198, 230, 0.301),
      rgba(164, 205, 221, 0.144)
    ),
    url("../assets/background-habitacao.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  font-family: "Mukta", sans-serif;
}

#habit > h1 {
  font-size: 4rem;
  padding-top: 5%;
  color: var(--laranja);
}

#main {
  flex-direction: column;
  background-size: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 50%;
  height: 100%;
}

#main > #info {
  text-align: center;
  width: 50%;
  height: 20%;
}

#info > h1 {
  color: var(--blue-transparent);
  font-size: 3.5rem;
}

#cards1,
#cards2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  padding-bottom: 2%;
}

.cardsbanner > h3 {
  font-size: 1rem;
  margin-bottom: 5%;
}

.cardsbanner {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1%;
  width: 20%;
  height: 60%;
  min-height: 164px;
  border-radius: 15px;
  padding: 1%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
}

.cardsbanner > i {
  font-size: 40px;
  color: var(--laranja);
  margin-bottom: 5%;
}

#btn-finan {
  font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
}

#btn-finan:hover {
  background: var(--linear2);
}

/*---------- Responsive Layout 1401px  - 1700px ----------*/
@media (min-width: 1401px) and (max-width: 1700px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 628px;
  }

  #habit > h1 {
    font-size: 3.5rem;
    padding-top: 5%;
  }

  #main {
    width: 70%;
    height: 100%;
    align-items: center;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 2rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    margin: 1% 0;
    width: 95%;
    height: 30%;
    min-height: 170px;
  }

  .cardsbanner > h3 {
    font-size: 15px;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 25%;
    height: 60%;
    min-height: 150px;
    max-width: 170px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 14px;
  }

  #btn-finan {
    font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
  }
}

/*---------- Responsive Layout 1025px  - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 658px;
  }

  #habit > h1 {
    font-size: 3.5rem;
    padding-top: 8%;
  }

  #main {
    width: 70%;
    height: 100%;
    align-items: center;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 2rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    margin: 1% 0;
    width: 95%;
    height: 30%;
    min-height: 150px;
  }

  .cardsbanner > h3 {
    font-size: 15px;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 25%;
    height: 50%;
    min-height: 140px;
    max-width: 184px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 14px;
  }

  #btn-finan {
  font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
  }
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 712px;
  }

  #habit > h1 {
    font-size: 3.5rem;
    padding-top: 15%;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 2rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    width: 95%;
    height: 30%;
    min-height: 182px;
  }

  .cardsbanner > h3 {
    font-size: 1rem;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 25%;
    height: 60%;
    min-height: 170px;
    max-width: 184px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 40px;
  }

  .infos {
    font-size: 1rem;
  }

  #btn-finan {
    width: 60%;
    height: 2.5rem;
    font-size: 1.4rem;
  }
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 579px;
  }

  #habit > h1 {
    font-size: 2.1rem;
    padding-top: 8%;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 1.6rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    width: 95%;
    height: 23%;
    min-height: 150px;
    padding-bottom: 2%;
  }

  .cardsbanner > h3 {
    font-size: 0.9rem;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 30%;
    height: 70%;
    min-height: 140px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 0.9rem;
  }

  #btn-finan {
    width: 90%;
    height: 2.5rem;
    font-size: 1.4rem;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 507px;
  }

  #habit > h1 {
    font-size: 1.9rem;
    padding-top: 11%;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 1.5rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    width: 95%;
    height: 23%;
    padding-bottom: 2%;
    min-height: 160px;
  }

  .cardsbanner > h3 {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 35%;
    height: 70%;
    min-height: 140px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 0.8rem;
  }

  #btn-finan {
    width: 90%;
    height: 2.2rem;
    font-size: 1.3rem;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
  #habit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 645px;
  }

  #habit > h1 {
    font-size: 1.7rem;
    padding-top: 15%;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 1.5rem;
  }

  #cards1,
  #cards2 {
    flex-direction: row;
    width: 90%;
    height: 30%;
    padding-bottom: 2%;
    min-height: 177px;
  }

  .cardsbanner > h3 {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 35%;
    height: 70%;
    min-height: 160px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 0.8rem;
  }

  #btn-finan {
    width: 80%;
    height: 2.5rem;
    font-size: 1.2rem;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
  #habit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    min-height: 544px;
  }

  #habit > h1 {
    font-size: 1.5rem;
    padding-top: 15%;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  #main > #info {
    width: 95%;
    height: 10%;
    border: none;
  }

  #info > h1 {
    font-size: 1.3rem;
    text-align: center;
  }

  #cards1,
  #cards2 {
    width: 90%;
    height: 30%;
    margin-bottom: 3%;
    min-height: 178px;
  }

  .cardsbanner > h3 {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  .cardsbanner {
    width: 35%;
    height: 70%;
    min-height: 170px;
    padding: 1%;
  }

  .cardsbanner > i {
    font-size: 30px;
  }

  .infos {
    font-size: 0.8rem;
  }

  #btn-finan {
    width: 80%;
    height: 2.5rem;
    font-size: 1.1rem;
  }
}
</style>