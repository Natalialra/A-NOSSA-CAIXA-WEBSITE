<template>
  <div id="quemsomos">
    <h1 id="quem-somos-titulo">Quem Somos</h1>
    <div id="main-quem-somos">
      <div id="sobrenos">
        <div id="sobre-nos-in">
          <p>
            <span>A Nossa Caixa Serviços</span> foi criada para ser
            correspondente exclusivo Caixa Econômica Federal.
          </p>
          <p>
            Manteremos todos os padrões de qualidade e critérios estabelecidos
            pela Instituição Financeira.
          </p>
          <p>
            Foco nos padrões operacionais definidos pela instituição,
            contribuindo para a profissionalização dos serviços de
            correspondente bancário trazendo eficiência e agilidade nos
            processos.
          </p>
          <p>
            Nossa missão é ser referência em soluções no mercado imobiliário e
            financeiro, contribuindo para o desenvolvimento da população
          </p>
          <p>
            <span>A Nossa Caixa Serviços</span> é uma empresa multisserviços e
            multissoluções, pensada para auxiliar você, sua família e sua
            empresa a gerir todo o planejamento financeiro, o patrimônio e os
            negócios, com tranquilidade e segurança.
          </p>
          <p>
            Oferecemos uma linha completa de produtos e serviços que auxiliam na
            realização do seu sonho. Tudo isso e muito mais, para que nossos
            clientes tenham confiança na hora de cuidar do seu capital.
          </p>
          <p>
            Quer saber mais? Entre em contato conosco e descubra tudo que
            podemos oferecer!
          </p>
          <button id="btn-quem-somos">
            <router-link class="link" to="/contato">
              Entre em Contato
            </router-link>
          </button>
        </div>
      </div>
      <div id="logo-sobre-nos">
        <img
          id="img-logo-sobre-nos"
          :src="require('../assets/logo-empresa-15001.png')"
          alt=""
        />
        <h1>A NOSSA CAI<span>X</span>A</h1>
        <h2>Realizando Sonhos</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quemsomos",
};
</script>

<style>
#quemsomos {
  background-image: linear-gradient(
      to bottom,
      rgba(208, 226, 231, 0.527),
      rgba(241, 246, 248, 0.952)
    ),
    url("../assets/background-abstrato.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Mukta", sans-serif;
  padding: 5% 3% 2% 3%;
  width: 100%;
  height: 100%;
}

#quem-somos-titulo {
  font-size: 3rem;
  color: var(--blue-transparent);
}

#main-quem-somos {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#btn-quem-somos {
  width: 14rem;
  height: 3rem;
  font-size: 1.4rem;
}

#btn-quem-somos:hover {
  background: var(--linear2);
}

#btn-quem-somos > a:hover {
  color: white;
}

#sobrenos {
  width: 50%;
  height: 100%;
  background: white;
  clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
  margin: 1% 0 3% 0;
}

#sobre-nos-in {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3% 3%;
  text-align: justify;
}
#sobrenos > h1 {
  font-size: 3rem;
  padding-bottom: 3%;
  color: var(--blue-transparent);
  align-self: center;
  margin-bottom: 1%;
}

#sobre-nos-in > p {
  font-size: 1rem;
  margin-bottom: 2%;
}

p > span {
  font-weight: bold;
}

#logo-sobre-nos {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  justify-content: center;
  align-items: center;
}

#logo-sobre-nos > h1 {
  font-size: 5rem;
  letter-spacing: 1rem;
  color: var(--azul-logo);
}

#logo-sobre-nos > h1 > span {
  color: var(--laranja);
}

#logo-sobre-nos > h2 {
  font-size: 3rem;
  letter-spacing: 0.5rem;
  color: var(--laranja);
}

#img-logo-sobre-nos {
  width: 50rem;
  height: 15rem;
}

/*---------- Responsive Layout 1401px  - 1844px----------*/
@media (min-width: 1401px) and (max-width: 1844px) {
  #quemsomos {
    padding: 7% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 3rem;
  }

  #main-quem-somos {
    flex-direction: row;
    align-items: center;
  }

  #btn-quem-somos {
    width: 12rem;
    align-self: center;
    height: 3rem;
    font-size: 1.2rem;
  }

  #sobrenos {
    width: 50%;
    height: 100%;
    clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5% 20% 5% 5%;
  }

  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 1rem;
    margin-bottom: 3%;
  }

  #logo-sobre-nos {
    width: 50%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    letter-spacing: 1rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 2.2rem;
    letter-spacing: 0.5rem;
    width: 100%;
    text-align: center;
  }

  #img-logo-sobre-nos {
    width: 100%;
    height: 30%;
  }
}

/*---------- Responsive Layout 1025px - 1400px ----------*/
@media (min-width: 1025px) and (max-width: 1400px) {
  #quemsomos {
    padding: 10% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 3rem;
  }

  #main-quem-somos {
    flex-direction: row;
    align-items: center;
  }

  #btn-quem-somos {
    width: 10rem;
    align-self: center;
    height: 2.5rem;
    font-size: 1rem;
  }

  #sobrenos {
    width: 50%;
    height: 100%;
    clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5% 20% 5% 5%;
  }

  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  #logo-sobre-nos {
    width: 50%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 2.7rem;
    width: 100%;
    text-align: center;
    letter-spacing: 0.5rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 1.8rem;
    letter-spacing: 0.5rem;
    width: 100%;
    text-align: center;
  }

  #img-logo-sobre-nos {
    width: 100%;
    height: 30%;
  }
}

/*---------- Responsive Layout 769px - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
  #quemsomos {
    padding: 13% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 3rem;
  }

  #main-quem-somos {
    flex-direction: row;
    align-items: center;
  }

  #btn-quem-somos {
    width: 10rem;
    align-self: center;
    height: 2.5rem;
    font-size: 1rem;
  }

  #sobrenos {
    width: 50%;
    height: 100%;
    clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5% 20% 5% 5%;
  }

  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  #logo-sobre-nos {
    width: 50%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 2.1rem;
    width: 100%;
    text-align: center;
    letter-spacing: 0.5rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    width: 100%;
    text-align: center;
  }

  #img-logo-sobre-nos {
    width: 100%;
    height: 30%;
  }
}

/*---------- Responsive Layout 426px - 768px ----------*/
@media (min-width: 426px) and (max-width: 768px) {
  #quemsomos {
    padding: 13% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 3rem;
  }

  #main-quem-somos {
    flex-direction: column-reverse;
    align-items: center;
  }

  #btn-quem-somos {
    width: 100%;
    align-self: center;
    height: 2.5rem;
    font-size: 1.3rem;
  }

  #sobrenos {
    width: 90%;
    height: 100%;
    clip-path: none;
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5%;
  }

  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  #logo-sobre-nos {
    width: 100%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 2.3rem;
    letter-spacing: 0.5rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }

  #img-logo-sobre-nos {
    width: 100%;
    height: 30%;
  }
}

/*---------- Responsive Layout 376px - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
  #quemsomos {
    padding: 15% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 2rem;
  }

  #main-quem-somos {
    flex-direction: column-reverse;
    align-items: center;
  }

  #btn-quem-somos {
    align-self: center;
    width: 100%;
    height: 2.5rem;
    font-size: 1.2rem;
  }

  #sobrenos {
    width: 90%;
    height: 100%;
    clip-path: none;
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5%;
  }

  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  #logo-sobre-nos {
    width: 100%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 1.9rem;
    letter-spacing: 0.5rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 1.3rem;
    letter-spacing: 0.5rem;
  }

  #img-logo-sobre-nos {
    width: 25rem;
    height: 7rem;
  }
}

/*---------- Responsive Layout 320px - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
  #quemsomos {
    padding: 17% 3% 2% 3%;
  }

  #quem-somos-titulo {
    font-size: 2rem;
  }

  #main-quem-somos {
    flex-direction: column-reverse;
  }

  #btn-quem-somos {
    align-self: center;
    width: 100%;
    height: 2.5rem;
    font-size: 1.1rem;
  }

  #sobrenos {
    width: 100%;
    height: 100%;
    clip-path: none;
    border-radius: 20px;
  }

  #sobre-nos-in {
    width: 100%;
    padding: 5%;
  }
  #sobrenos > h1 {
    font-size: 2rem;
  }

  #sobre-nos-in > p {
    font-size: 0.8rem;
    margin-bottom: 5%;
  }

  #logo-sobre-nos {
    width: 100%;
    height: 100%;
    padding-top: 5%;
    margin-bottom: 5%;
  }

  #logo-sobre-nos > h1 {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }

  #logo-sobre-nos > h2 {
    font-size: 1.1rem;
    letter-spacing: 0.5rem;
  }

  #img-logo-sobre-nos {
    width: 20rem;
    height: 6rem;
  }
}
</style>