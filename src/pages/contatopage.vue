<template>
  <div id="contatopage">
    <contato></contato>
  </div>
</template>

<script>
import contato from "../components/contato.vue"

export default {
  name: "contatopage",
  components: {
    contato,
  },
};
</script>

<style>
:root {
  --laranja: #f7941e;
  --azul-logo: #112E61;
  --blue-transparent: #162239f8;
  --blue-dark: #162239;
  --white: #fff;
  --light-background: #d8ebfc;
  --azul-caixa: #277eb6;
  --azul-claro: rgba(116, 186, 243, 0.541);
  --linear1: linear-gradient(45deg, #f7941e, #e07008);
  --linear2: linear-gradient(45deg, #e07008, #f7941e);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}


body {
  width: 100%;
  background-color: var(--light-background);
}
</style>
