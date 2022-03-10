<template>
  <div id="servicesection">
    <h1>Produtos Negociais de Relacionamento</h1>
    <div data-aos="zoom-in-left" data-aos-duration="1500" id="cardService1">
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/abertura-de-conta.png')"
        />
        <span
          >Abertura de conta (Corrente Pessoa Física e Jurídica, Poupança)</span
        >
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/financiamento-habitacional.png')"
        />
        <span>Financiamento Habitacional</span>
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/emprestimos.png')"
        />
        <span
          >Empréstimos Pessoa Física e Pessoa Jurídica (Consignado e Giro
          CAIXA)</span
        >
      </div>
    </div>
    <div data-aos="zoom-in-right" data-aos-duration="1500" id="cardService2">
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/cheque-especial.png')"
        />
        <span>Cheque Especial</span>
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/cartoes-de-credito.png')"
        />
        <span>Cartões de crédito </span>
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/caixa-seguros.png')"
        />
        <span
          >Produtos da CAIXA Seguros (Seguros, Consórcios, Capitalização)</span
        >
      </div>
    </div>
    <div data-aos="zoom-in-left" data-aos-duration="1500" id="cardService3">
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/solucoes-corporativas.png')"
        />
        <span>Soluções Corporativas</span>
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/portabilidade-de-credito.png')"
        />
        <span>Portabilidade de Crédito</span>
      </div>
      <div class="cardService">
        <img
          class="img-cardService"
          :src="require('../assets/credito-com-garantia.png')"
        />
        <span>Crédito com Garantia</span>
      </div>
    </div>
    <button id="btn-service-section" @click="scrolltop">
      <router-link to="/contato"> Saiba Mais </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "servicesection",
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

<style >
#servicesection {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4% 0;
  background: var(--light-background);
  font-family: "Mukta", sans-serif;
}

#cardService1,
#cardService2,
#cardService3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  height: 20%;
  margin: 1% 0;
}

.cardService {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  margin: 1% 1%;
  width: 100%;
  height: 90%;
  padding: 2%;
  position: relative;
  font-size: 1.2rem;
}

.cardService:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.cardService:after,
.cardService:before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
}

.cardService:before {
  border-left: 2px solid rgba(4, 52, 139, 0.95);
  border-right: 2px solid rgba(4, 52, 139, 0.95);
  border-radius: 8px;
  transform: scaleY(0);
}

.cardService:hover:before {
  transform: scaleY(1);
}

.cardService:hover:after {
  transform: scaleX(1);
}

.cardService:after {
  border-top: 2px solid rgba(4, 52, 139, 0.95);
  border-bottom: 2px solid rgba(4, 52, 139, 0.95);
  border-radius: 8px;
  transform: scaleX(0);
}

.img-cardService {
  width: 70px;
  height: 70px;
  background: var(--laranja);
  color: white;
}

#servicesection h1 {
  font-size: 3rem;
  color: var(--blue-dark);
  padding-top: 1%;
  text-align: center;
}

#btn-service-section {
  margin: 2% 0;
  font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
}

#btn-service-section:hover {
  background: var(--linear2);
}

/*---------- Responsive Layout > 1401px ----------*/
@media (min-width: 1401px) {
  .cardService {
    max-height: 150px;
    font-size: 1rem;
  }
}

/*---------- Responsive Layout 1025px  - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #servicesection {
    padding-top: 4%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: row;
    align-items: center;
    width: 95%;
  }

  .cardService {
    flex-direction: column;
    text-align: center;
    margin: 0 2%;
    width: 40%;
    min-height: 160px;
    height: 80%;
    font-size: 1rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }

  #servicesection h1 {
    font-size: 3rem;
    margin: 5% 0;
  }

  #btn-service-section {
    margin: 3% 0;
    font-size: 1.4rem;
  width: 20rem;
  height: 3rem;
  }
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #servicesection {
    padding-top: 4%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: row;
    align-items: center;
    width: 95%;
  }

  .cardService {
    flex-direction: column;
    text-align: center;
    margin: 0 2%;
    width: 40%;
    min-height: 170px;
    height: 80%;
    font-size: 1rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }

  #servicesection h1 {
    font-size: 1.8rem;
    margin: 5% 0;
  }

  #btn-service-section {
    margin: 3% 0;
    width: 60%;
    height: 2.5rem;
    font-size: 1.4rem;
  }
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
  #servicesection {
    padding-top: 4%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: row;
    align-items: center;
    width: 95%;
  }

  .cardService {
    flex-direction: column;
    text-align: center;
    margin: 0 2%;
    width: 30%;
    max-width: 162px;
    min-height: 182px;
    height: 80%;
    font-size: 1rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }

  #servicesection h1 {
    font-size: 1.8rem;
    margin: 5% 0;
  }

  #btn-service-section {
    margin: 3% 0;
    width: 90%;
    height: 2.5rem;
    font-size: 1.4rem;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #servicesection {
    padding-top: 4%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 20%;
  }

  .cardService {
    flex-direction: column;
    text-align: center;
    margin: 2% 0;
    width: 90%;
    max-width: 308px;
    max-height: 120px;
    height: 70%;
    font-size: 1rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }

  #servicesection h1 {
    font-size: 1.4rem;
    margin: 5% 0;
  }

  #btn-service-section {
    margin: 3% 0;
    width: 90%;
    height: 2.5rem;
    font-size: 1.3rem;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
  #servicesection {
    flex-direction: column;
    padding-top: 12%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 20%;
    margin: 1% 0;
  }

  .cardService {
    margin: 2% 1%;
    font-size: 0.8rem;
  }

  #servicesection h1 {
    font-size: 1.5rem;
  }

  #btn-service-section {
    margin: 2% 0 5% 0;
    width: 80%;
    height: 2.5rem;
    font-size: 1.2rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
  #servicesection {
    flex-direction: column;
    padding-top: 12%;
  }

  #cardService1,
  #cardService2,
  #cardService3 {
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 20%;
    margin: 1% 0;
  }

  .cardService {
    margin: 2% 1%;
    font-size: 0.8rem;
  }

  #servicesection h1 {
    font-size: 1.5rem;
  }

  #btn-service-section {
    margin: 2% 0 5% 0;
    width: 80%;
    height: 2.5rem;
    font-size: 1.1rem;
  }

  .img-cardService {
    width: 70px;
    height: 70px;
  }
}
</style>