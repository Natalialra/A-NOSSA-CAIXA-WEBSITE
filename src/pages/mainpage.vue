<template>
    <div id="mainpage">
        <mainsection></mainsection>
        <servicesection> </servicesection> 
        <habitsection> </habitsection>
        <middlesection></middlesection>
    </div>
</template>

<script>
import mainsection from '../components/mainsection.vue'
import servicesection from '../components/servicesection.vue'
import habitsection from '../components/habitsection.vue'
import middlesection from '../components/middlesection.vue'

export default {
    name: "mainpage",
    components: {
    mainsection,
    habitsection,
    servicesection,
    middlesection
  }
}
</script>