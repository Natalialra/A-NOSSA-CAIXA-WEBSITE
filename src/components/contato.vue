<template>
  <div id="contato">
    <h1>Entre em Contato Conosco</h1>
    <div id="funcionamento">
    </div>
    <section>
      <div id="contact-us">
        <div class="cards-contato1">
          <div class="contato-cards">
            <i class="material-icons">phone_in_talk</i>
            <h3>Telefones</h3>
              <a href="tel:+5531999637152" title="Ligar"><p>(31) 9 9963-7152</p></a>
          </div>
          <div class="contato-cards">
            <i class="material-icons">phone_android</i>
            <h3>Redes Sociais</h3>
            <div id="social-media">
              
                <a href="https://www.instagram.com/anossacaixa/" target="_blank" title="Acessar Instagram">
                  <i class="fa-brands fa-instagram">
                  </i>
                </a>
              <!-- <i class="fa-brands fa-facebook"></i> -->
            </div>
          </div>
        </div>
        <div class="cards-contato2">
          <div class="contato-cards">
            <i class="material-icons">email</i>
            <h3>E-mail</h3>
            <p>rodrigo@anossacaixa.com.br</p>
          </div>
          <div class="contato-cards">
            <i class="material-icons">location_on</i>
            <h3>Endereço</h3>
            <p>
              Avenida Raja Gabaglia, nº 1613, sala B, Luxemburgo - Belo
              Horizonte/MG
            </p>
          </div>
        </div>
      </div>
      <div id="logo-contato">
        <img :src="require('../assets/logo-empresa-15001.png')" />
        <h1>A NOSSA CAI<span>X</span>A</h1>
        <h2>Realizando Sonhos</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contato",
};
</script>

<style scoped>
#contato {
  background-image: linear-gradient(
      to bottom,
      rgba(208, 226, 231, 0.527),
      rgba(241, 246, 248, 0.952)
    ),
    url("../assets/background-abstrato.png");
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: "Mukta", sans-serif;
}

#contato > h1 {
  margin-top: 5%;
  text-align: center;
  color: var(--blue-transparent);
  font-size: 3rem;
}

#funcionamento {
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 1%;
}

#contato > section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 1%;
}

#contact-us {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  height: 70%;
  margin-top: 1%;
}

.cards-contato1,
.cards-contato2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 100%;
  margin-bottom: 3%;
}

.contato-cards {
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 50%;
  height: 40%;
  min-height: 180px;
  margin: 1% 2%;
  padding: 3%;
  background: var(--blue-transparent);
  color: whitesmoke;
}

.contato-cards > #social-media {
  display: flex;
  flex-direction: row;
}

#social-media > a {
  color: white;
}

#social-media > a:hover {
  color: var(--laranja);
  cursor: pointer;
}

.contato-cards > h3 {
  margin-bottom: 3%;
}

.contato-cards > p {
  margin-bottom: 3%;
}

.contato-cards > a {
  color: white;
  text-decoration: none;
}

.contato-cards > a:hover {
  color: var(--laranja);
  cursor: pointer;
}

.material-icons {
  font-size: 50px;
  color: var(--laranja);
  padding-bottom: 3%;
}

#logo-contato {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 40%;
  margin-top: 1% 5% 1% 0;
}

#logo-contato > h1 {
  font-size: 5rem;
  letter-spacing: 1rem;
  padding-bottom: 3%;
  color: var(--azul-logo);
  margin-bottom: 1%;
}

#logo-contato > h1 > span {
  color: var(--laranja);
}

#logo-contato > img {
  width: 50rem;
  height: 15rem;
}

#logo-contato > h2 {
  font-size: 3rem;
  letter-spacing: 0.5rem;
  color: var(--laranja);
}

/*---------- Responsive Layout > 1401px ----------*/
@media (min-width: 1401px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 1% 1% 0 1%;
    font-size: 3rem;
  }

  #contato > section {
    flex-direction: row;
    align-items: center;
    padding: 1% 1%;
  }

  #contact-us {
    display: flex;
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 1% 0;
  }

  .contato-cards {
    width: 90%;
    height: 40%;
    min-height: 204px;
    min-width: 270px;
    max-width: 280px;
    margin: 3% 2%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 4rem;
    letter-spacing: 1rem;
  }

  #logo-contato > img {
    width: 50rem;
    height: 13rem;
  }

  #logo-contato > h2 {
    font-size: 2.3rem;
  }
}

/*---------- Responsive Layout 1025px  - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 5% 1% 0 1%;
    font-size: 3rem;
  }

  #funcionamento {
    font-size: 18px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    display: flex;
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 1% 0;
  }

  .contato-cards {
    width: 100%;
    height: 40%;
    min-height: 204px;
    min-width: 150px;
    max-width: 270px;
    margin: 3% 2%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 4rem;
    letter-spacing: 1rem;
  }

  #logo-contato > img {
    width: 50rem;
    height: 13rem;
  }

  #logo-contato > h2 {
    font-size: 2.3rem;
  }
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 6% 1% 0 1%;
    font-size: 3rem;
  }

  #funcionamento {
    font-size: 18px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    display: flex;
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 1% 0;
  }

  .contato-cards {
    width: 100%;
    height: 40%;
    min-height: 170px;
    min-width: 150px;
    max-width: 270px;
    margin: 3% 2%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 4rem;
    letter-spacing: 1rem;
  }

  #logo-contato > img {
    width: 50rem;
    height: 13rem;
  }

  #logo-contato > h2 {
    font-size: 2.3rem;
  }
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 7% 1% 0 1%;
    font-size: 2.7rem;
  }

  #funcionamento {
    font-size: 18px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    display: flex;
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 1% 0;
  }

  .contato-cards {
    width: 100%;
    height: 40%;
    min-height: 170px;
    min-width: 150px;
    max-width: 270px;
    margin: 3% 1%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 2.6rem;
    letter-spacing: 1rem;
  }

  #logo-contato > img {
    width: 40rem;
    height: 10rem;
  }

  #logo-contato > h2 {
    font-size: 1.7rem;
  }
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 12% 1% 0 1%;
    font-size: 2rem;
  }

  #funcionamento {
    font-size: 18px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: column;
    width: 90%;
    margin: 1% 0;
  }

  .contato-cards {
    width: 80%;
    height: 40%;
    min-height: 130px;
    max-width: 270px;
    margin: 3% 2%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 1.8rem;
    letter-spacing: 0.8rem;
  }

  #logo-contato > img {
    width: 25rem;
    height: 6rem;
  }

  #logo-contato > h2 {
    font-size: 1.3rem;
  }
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin-top: 5%;
    padding: 12% 1% 0 1%;
    font-size: 2rem;
  }

  #funcionamento {
    font-size: 16px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: column;
    width: 90%;
    margin: 1% 0;
  }

  .contato-cards {
    width: 90%;
    height: 40%;
    min-height: 130px;
    max-width: 270px;
    margin: 3% 2%;
    font-size: 1rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 1.6rem;
    letter-spacing: 0.5rem;
  }

  #logo-contato > img {
    width: 25rem;
    height: 6rem;
  }

  #logo-contato > h2 {
    font-size: 1.2rem;
  }
}

/*---------- Responsive Layout 320px  - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
  #contato {
    background-image: linear-gradient(
        to bottom,
        rgba(208, 226, 231, 0.11),
        rgba(241, 246, 248, 0.493)
      ),
      url("../assets/background-abstrato.png");
  }

  #contato > h1 {
    margin: 5%1%30% 1% 1%;
    padding-top: 12%;
    font-size: 2rem;
  }

  #funcionamento {
    font-size: 16px;
    margin: 2%;
    text-align: center;
  }

  #contato > section {
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 1%;
  }

  #contact-us {
    align-items: center;
    width: 95%;
  }

  .cards-contato1,
  .cards-contato2 {
    flex-direction: column;
    width: 90%;
    margin: 3% 0;
  }

  .contato-cards {
    width: 100%;
    height: 40%;
    min-height: 130px;
    margin: 3% 2%;
    font-size: 0.9rem;
  }

  .contato-cards > h3 {
    font-size: 1rem;
  }

  .material-icons {
    font-size: 30px;
  }

  #logo-contato {
    width: 95%;
    height: 40%;
    margin: 1%;
  }

  #logo-contato > h1 {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }

  #logo-contato > img {
    width: 25rem;
    height: 6rem;
  }

  #logo-contato > h2 {
    font-size: 1rem;
  }
}
</style>

