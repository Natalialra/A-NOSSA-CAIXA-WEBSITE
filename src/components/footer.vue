<template>
  <div id="footersection">
    <div id="main">
      <div id="servicos">
        <div class="title">
          <p>SERVIÇOS</p>
        </div>
        <div id="list">
          <div id="list1">
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>
                Abertura de conta (Corrente Pessoa Física e Jurídica,
                Poupança)</span
              >
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Empréstimos PF e PJ (Consignado e Giro CAIXA)</span>
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Financiamento habitacional</span>
            </div>
          </div>
          <div id="list2">
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span
                >Produtos da CAIXA Seguros (Seguros, Consórcios,
                Capitalização)</span
              >
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Cartões de crédito</span>
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Cheque Especial PF e PJ</span>
            </div>
          </div>
          <div id="list3">
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span
                >Portabilidade de Crédito</span
              >
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Crédito com Garantia</span>
            </div>
            <div class="inlist">
              <i class="material-icons chevron_right">chevron_right</i>
              <span>Soluções Corporativas</span>
            </div>
          </div>
        </div>
      </div>
      <div id="contatos">
        <div id="contato">
          <div class="title">
            <p>CONTATO</p>
          </div>
          <div id="email">
            <i class="material-icons tel">email</i>
            <p>rodrigo@anossacaixa.com.br</p>
          </div>
          <div class="phone">
            <i class="material-icons tel">phone</i>
            <a href="tel:+5531999637152" title="Ligar"><p>(31) 9 9963-7152</p></a>
          </div>
        </div>
        <div id="medias">
          <div class="title">
          <p>REDES SOCIAIS</p>
        </div>
          <div id="socialmedia">
            <a href="https://www.instagram.com/anossacaixa/" target="_blank" title="Acessar Instagram"><i class="fa-brands fa-instagram"></i></a>
            <!-- <i class="fa-brands fa-facebook btn-social-media"></i> -->
            <button id="btn-scroll" @click="scrolltop" title="Ir para o Topo"><i class="material-icons">arrow_upward</i></button>
            <a href="https://api.whatsapp.com/send?phone=5531999637152"> 
              <button id="btn-whats">
                <i class="fa-brands fa-whatsapp botao-whatsapp-fix"></i>
              </button>
            </a>
        </div>
          </div>
      </div>
    </div>
    <div id="endereco">
      <i class="material-icons">location_on</i>
      <span
        >Avenida Raja Gabaglia, nº 1613, sala B, Luxemburgo - Belo Horizonte/MG</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "footersection",
  methods: {
    scrolltop() {
      window.scrollTo(0,0)
    }
  }
};
</script>

<style>
#footersection {
  display: flex;
  background: var(--azul-caixa);
  flex-direction: column;
  width: 100%;
  height: 15%;
  color: white;
}

#footersection > #main {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 80%;
  width: 100%;
  padding: 1% 0;
}

#servicos {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-items: center;
  margin: 1% 0 1% 5%;
}

.title {
  margin: 0.5% 0 2% 0;
}

.title > p {
  font-weight: bold;
}

#list {
  display: flex;
  flex-direction: row;
}

#list1,
#list2,
#list3 {
  display: flex;
  flex-direction: column;
}

#list1 span,
#list2 span {
  margin: 0.5%;
}

#list3 span {
  margin: 3%;
}

.inlist {
  display: flex;
  flex-direction: row;
  padding: 1% 0 1% 0.5%;
}

#contatos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  height: 100%;
  margin: 1% 0;
}

#contato {
  display: flex;
  flex-direction: column;
  width: 50%;
}

#contato a {
  color: white;
  text-decoration: none;
}

#contato a:hover {
  color: var(--laranja);
  cursor: pointer;
  font-weight: 600;
}

#email {
  display: flex;
  flex-direction: row;
  padding-top: 1%;
}

.phone {
  display: flex;
  flex-direction: row;
  padding: 1% 0 1% 0.5%;
}

.tel {
  display: flex;
  margin-right: 1%;
}

#medias {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
}

#socialmedia {
  display: flex;
  padding-top: 2%;
  align-items: center;
}

#socialmedia > a {
  color: white;
}

#socialmedia > a:hover {
  color: var(--laranja);
  cursor: pointer;
}

.btn-social-media:hover {
  cursor: pointer;
  color: var(--laranja);
}

.fa-instagram {
  font-size: 25px;
  padding-right: 15%;
}

.fa-facebook {
  font-size: 23px;
  padding-left: 15%;
}

#socialmedia > button {
  width: 3rem;
  height:3rem;
  border-radius: 50%;
  position:fixed;
  bottom: 5px;
  right: 20px;
}

.botao-whatsapp-fix {
  font-size: 20px;
  bottom: 413px;
  right: 33px;
}

#btn-whats {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position:fixed;
  bottom: 400px;
  right: 20px;
  background: #34af23;
}

#btn-whats:hover, .botao-whatsapp-fix {
  transform: scale(1.5);
  cursor: pointer;
}

#btn-scroll:hover {
  cursor: pointer;
}

#endereco {
  display: flex;
  border: 1px solid black;
  width: 100%;
  height: 25%;
  padding: 1% 0;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-top-color: white;
}


/*---------- Responsive Layout 1025px  - 1654px ----------*/
@media (min-width: 1025px) and (max-width: 1654px) {
#servicos {
  margin: 1% 0 1% 0;
}

#list3 span {
  margin: 3% 0;
}

.inlist {
  padding: 1% 0 1% 0;
}

#contatos {
  align-items: flex-start;
  width: 50%;
}

#contato {
  display: flex;
  align-items: center;
  width: 100%;
}

#logo-caixa-aqui {
  display: flex;
  justify-content: flex-start;
}

.phone {
  width: 50%;
}

#email {
  width: 50%
}


#medias {
  width: 50%;
}


#socialmedia > button {
  width: 3rem;
  height: 3rem;
  position:fixed;
  bottom: 5px;
  right: 20px;
}

#socialmedia > #btn-whats {
  width: 3rem;
  height: 3rem;
}
}

/*---------- Responsive Layout 769px  - 1024px ----------*/
@media (min-width: 769px) and (max-width: 1024px) {
   #footersection > #main {
  flex-direction: column;
  align-items: center;
}

#servicos {
  width: 95%;
  margin: 1% 1%;
}

.title {
  margin: 1% 0;
}

#list {
  width: 95%;
  margin-right: 4%;
}

#list1 span,
#list2 span,
#list3 span {
  margin: 2%;
}

#contatos {
  flex-direction: column;
  border-top: 1px solid white;
  width: 100%;
}

#contato {
  align-items: center;
  width: 95%;
}

#email {
  justify-content: center;
}

.phone {
  width: 50%;
  justify-content: center;
}

#medias {
  border-top: 1px solid white;
  width: 100%;
}

#socialmedia > #btn-scroll {
  display: none;
}

#socialmedia > #btn-whats {
  width: 3rem;
  height: 3rem;
  bottom: 60px;
  right: 10px;
}

#endereco {
  padding: 1% 0;
  flex-direction: column;
  text-align: center;
  border-top-color: white;
  border-bottom: none;
  margin-bottom: 2%;
}

#endereco > i {
  margin-bottom: 1%;
}
}

/*---------- Responsive Layout 577px  - 768px ----------*/
@media (min-width: 577px) and (max-width: 768px) {
   #footersection > #main {
  flex-direction: column;
  align-items: center;
}

#servicos {
  width: 95%;
  margin: 1% 1%;
}

.title {
  margin: 3% 0;
}

#list {
  width: 95%;
  margin-right: 4%;
}

#list1 span,
#list2 span,
#list3 span {
  margin: 3%;
}

#contatos {
  flex-direction: column;
  border-top: 1px solid white;
  width: 100%;
}

#contato {
  align-items: center;
  width: 95%;
}

#email {
  justify-content: center;
}

.phone {
  width: 50%;
  justify-content: center;
}

#medias {
  border-top: 1px solid white;
  width: 100%;
}

#socialmedia > #btn-scroll {
  display: none;
}

#socialmedia > #btn-whats {
  width: 3rem;
  height: 3rem;
  bottom: 60px;
  right: 10px;
}

#endereco {
  padding: 2% 0;
  flex-direction: column;
  text-align: center;
  border-top-color: white;
  border-bottom: none;
  margin-bottom: 2%;
}

#endereco > i {
  margin-bottom: 2%;
}
}

/*---------- Responsive Layout 426px  - 576px ----------*/
@media (min-width: 426px) and (max-width: 576px) {
  #footersection > #main {
  flex-direction: column;
  align-items: center;
}

#servicos {
  width: 95%;
  margin: 1% 1%;
}

.title {
  margin: 3% 0;
}

#list {
  width: 95%;
  margin-right: 4%;
}

#list1 span,
#list2 span,
#list3 span {
  margin: 3%;
}

#contatos {
  flex-direction: column;
  border-top: 1px solid white;
  width: 100%;
}

#contato {
  align-items: center;
  width: 95%;
}

#email {
  justify-content: center;
}

.phone {
  width: 50%;
  justify-content: center;
}

#medias {
  border-top: 1px solid white;
  width: 100%;
}

#socialmedia > #btn-scroll {
  display: none;
}

#socialmedia > #btn-whats {
  width: 3rem;
  height: 3rem;
  bottom: 55px;
  right: 8px;
}

#endereco {
  padding: 2% 0;
  flex-direction: column;
  text-align: center;
  border-top-color: white;
  border-bottom: none;
  margin-bottom: 2%;
}

#endereco > i {
  margin-bottom: 2%;
}
}

/*---------- Responsive Layout 376px  - 425px ----------*/
@media (min-width: 376px) and (max-width: 425px) {
 #footersection > #main {
  flex-direction: column;
  align-items: center;
}

#servicos {
  width: 95%;
  margin: 1% 1%;
}

.title {
  margin: 3% 0;
}

#list {
  flex-direction: column;
  width: 60%;
}

#list1 span,
#list2 span,
#list3 span {
  margin: 1%;
}

#contatos {
  flex-direction: column;
  border-top: 1px solid white;
  width: 100%;
}

#contato {
  align-items: center;
  width: 95%;
}

#email {
  justify-content: center;
}

.phone {
  width: 50%;
  justify-content: center;
}

#medias {
  border-top: 1px solid white;
  width: 100%;
}

#socialmedia > #btn-scroll {
  display: none;
}

 #btn-whats {
  width: 2.5rem;
  height: 2.5rem;
  bottom: 500px;
  right: 8px;
}

#endereco {
  padding: 2% 0;
  flex-direction: column;
  text-align: center;
  border-top-color: white;
  margin-bottom: 2%;
  border-bottom: none;
}

#endereco > i {
  margin-bottom: 2%;
}
}

/*---------- Responsive Layout 320px - 375px ----------*/
@media (min-width: 320px) and (max-width: 375px) {
#footersection > #main {
  flex-direction: column;
  align-items: center;
}

#servicos {
  width: 100%;
  margin: 1% 1%;
}

.title {
  margin: 3% 0;
}

#list {
  flex-direction: column;
  width: 60%;
}

#list1 span,
#list2 span,
#list3 span {
  margin: 1%;
}

#contatos {
  flex-direction: column;
  border-top: 1px solid white;
  width: 100%;
}

#contato {
  align-items: center;
  width: 95%;
}

#email {
  justify-content: center;
}

.phone {
  width: 50%;
  justify-content: center;
}

#medias {
  border-top: 1px solid white;
  width: 100%;
}

#socialmedia > #btn-scroll {
  display: none;
}

#socialmedia > #btn-whats {
  width: 2.5rem;
  height: 2.5rem;
  bottom: 60px;
  right: 30px;
}

#endereco {
  padding: 2% 0;
  flex-direction: column;
  text-align: center;
  border-top-color: white;
  margin-bottom: 2%;
  border-bottom: none;
}

#endereco > i {
  margin-bottom: 2%;
}
}
</style>