<template>
  <div id="app">
    <navbar></navbar>
    
    <footersection></footersection>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import footersection from "./components/footer.vue";

export default {
  name: "App",
  components: {
    navbar,
    footersection,
  }
};
</script>

<style>
:root {
  --laranja: rgb(255, 135, 0);
  --laranja-soft: #ecb168;
  --azul-logo: #112E61;
  --blue-transparent: #162239f8;
  --blue-dark: #162239;
  --white: #fff;
  --light-background: #d8ebfc;
  --azul-caixa: #277eb6;
  --azul-claro: rgba(116, 186, 243, 0.541);
  --linear1: linear-gradient(183deg, rgb(255, 135, 0), rgb(255, 80, 15));;
  --linear2: linear-gradient(183deg, rgb(255, 80, 15), rgb(255, 135, 0));;
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
