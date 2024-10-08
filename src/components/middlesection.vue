<template>
  <div id="middlesection">
    <h1>Vantagens para seu cliente</h1>
    <div class="cards">
      <div class="card-template">
        <div class="logo-card">
          <img class="img-card" :src="require('../assets/flexibilidade.png')" />
        </div>
        <div class="title-card">
          <p>Flexibilidade</p>
        </div>
        <div class="info-card">
          <p>
            Serviços realizados fora do expediente bancário, nos fins de semana
            e feriados, seguindo os horários do seu estabelecimento.
          </p>
        </div>
      </div>
      <div class="card-template">
        <div class="logo-card">
          <img class="img-card" :src="require('../assets/comodidade.png')" />
        </div>
        <div class="title-card">
          <p>Comodidade</p>
        </div>
        <div class="info-card">
          <p>
            Disponibilidade de atendimento próximo da residência ou trabalho,
            sem necessidade de deslocamento para grandes centros.
          </p>
        </div>
      </div>
      <div class="card-template">
        <div class="logo-card">
          <img
            class="img-card"
            :src="require('../assets/acessibilidade.png')"
          />
        </div>
        <div class="title-card">
          <p>Acessibilidade</p>
        </div>
        <div class="info-card">
          <p>
            Atendimento a todas as pessoas, inclusive quem não é correntista da
            CAIXA.
          </p>
        </div>
      </div>
      <div class="card-template">
        <div class="logo-card">
          <img class="img-card" :src="require('../assets/seguranca.png')" />
        </div>
        <div class="title-card">
          <p>Segurança</p>
        </div>
        <div class="info-card">
          <p>
            O cliente conta com a confiança da marca CAIXA, que oferece
            qualidade e segurança nos negócios e para a prestação de serviços.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "middlesection",
};
</script>

<style>
#middlesection {
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 1% 0 2% 0;
  background-color: var(--azul-claro);
  border-radius: 300px;
  margin: 4% 0;
}

.cards {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
}

.img-card {
  width: 80px;
  height: 80px;
}

.card-template {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  height: 70%;
  min-height: 250px;
  width: 15%;
  margin: 1%;
  padding: 0 1%;
}

.card-template:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.title-card {
  font-weight: 800;
  margin-bottom: 2%;
}

.info-card {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  //font-size: 1.1rem;
}

#middlesection h1 {
  color: var(--blue-transparent);
  font-size: 3rem;
  font-family: "Mukta", sans-serif;
  padding: 2% 0;
}

/*---------- Responsive Layout 1401px  - 1750px ----------*/
@media (min-width: 1401px) and (max-width: 1750px) {
  #middlesection {
    min-height: 411px;
  }

  .card-template {
    min-height: 250px;
  }
}

/*---------- Responsive Layout 1025px  - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #middlesection {
    height: 60vh;
    min-height: 472px;
    width: 100%;
    border-radius: 200px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: row;
    height: 70%;
    width: 90%;
    align-items: center;
    padding: 5% 0;
  }

  .img-card {
    width: 80px;
    height: 80px;
  }

  .card-template {
    align-items: center;
    width: 90%;
    margin: 1.5%;
    padding: 0 1% 1% 1%;
    min-height: 280px;
  }

  .title-card {
    font-size: 1.1rem;
  }

  .info-card {
    font-size: 1.1rem;
  }

  #middlesection h1 {
    font-size: 3rem;
    //padding: 4% 0 0 0;
  }
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #middlesection {
    height: 60vh;
    min-height: 500px;
    width: 100%;
    border-radius: 100px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: row;
    height: 90%;
    width: 98%;
    align-items: center;
    padding: 5% 0;
  }

  .img-card {
    width: 80px;
    height: 70px;
  }

  .card-template {
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 1.5%;
    padding: 0 1% 1% 1%;
  }

  .title-card {
    font-size: 1.1rem;
  }

  .info-card {
    font-size: 1rem;
  }

  #middlesection h1 {
    font-size: 1.9rem;
    padding: 4% 0 0 0;
  }
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
  #middlesection {
    height: 60vh;
    min-height: 445px;
    width: 100%;
    border-radius: 100px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: row;
    height: 100%;
    width: 98%;
    align-items: center;
    padding: 5% 0;
  }

  .img-card {
    width: 65px;
    height: 55px;
  }

  .card-template {
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 1.5%;
    padding: 0 1% 1% 1%;
  }

  .title-card {
    font-size: 1.1rem;
  }

  .info-card {
    font-size: 1rem;
  }

  #middlesection h1 {
    font-size: 1.9rem;
    padding: 4% 0 0 0;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #middlesection {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    border-radius: 60px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: column;
    height: 90%;
    min-height: 694px;
    width: 95%;
    align-items: center;
  }

  .img-card {
    width: 70px;
    height: 70px;
  }

  .card-template {
    align-items: center;
    min-height: 170px;
    width: 90%;
    margin: 2%;
    max-width: 376px;
    padding: 0 1% 1% 1%;
  }

  .title-card {
    font-size: 1.1rem;
  }

  .info-card {
    font-size: 1rem;
  }

  #middlesection h1 {
    font-size: 1.9rem;
    margin: 0 0 5% 0;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
  #middlesection {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    border-radius: 60px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: column;
    height: 85%;
    width: 95%;
    align-items: center;
    min-height: 588px;
  }

  .img-card {
    width: 70px;
    height: 70px;
  }

  .card-template {
    align-items: center;
    min-height: 150px;
    width: 90%;
    margin: 2%;
    padding: 0 1% 1% 1%;
  }

  .title-card {
    font-size: 0.9rem;
  }

  .info-card {
    font-size: 0.8rem;
  }

  #middlesection h1 {
    font-size: 1.5rem;
    margin: 0 0 5% 0;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
  #middlesection {
    height: 100vh;
    width: 100%;
    min-height: 662px;
    border-radius: 60px;
    margin: 6% 0;
  }

  .cards {
    flex-direction: column;
    height: 85%;
    width: 95%;
    align-items: center;
    min-height: 500px;
  }

  .img-card {
    display: none;
  }

  .card-template {
    align-items: center;
    justify-content: center;
    min-height: 80px;
    width: 90%;
    margin: 2%;
    padding: 2%;
  }

  .title-card {
    font-size: 0.9rem;
  }

  .info-card {
    font-size: 0.8rem;
  }

  #middlesection h1 {
    font-size: 1.3rem;
    margin: 0 0 5% 0;
  }
}
</style>
