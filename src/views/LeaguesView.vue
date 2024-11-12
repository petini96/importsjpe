<script setup>
 
import SelecoesAmericanas from '../components/SelecoesAmericanas.vue';
import SelecoesEuropeias from '../components/SelecoesEuropeias.vue';
import SelecoesAfricanasEAsiaticas from '../components/SelecoesAfricanasEAsiaticas.vue';
import LaLiga from '../components/LaLiga.vue';
import Brasileiro from '../components/Brasileiro.vue';
import PremiereLeague from '../components/PremiereLeague.vue';
import ItaliaSerieA from '../components/ItaliaSerieA.vue';
import FrancaSerieA from '../components/FrancaSerieA.vue';
import Bundesliga from '../components/Bundesliga.vue';
import OutrosClubes from '../components/OutrosClubes.vue';

defineProps({
    catalogPicked: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    namecp: {
        type: String,
        required: true
    }
})

</script>
<script>
export default {
    components: {
        SelecoesAmericanas, SelecoesEuropeias, SelecoesAfricanasEAsiaticas, LaLiga, PremiereLeague, Brasileiro, ItaliaSerieA, FrancaSerieA, Bundesliga, OutrosClubes
    }
}
</script>
<template>
    <section>
        <!-- <h4 class="text-center my-3">{{title}}</h4> -->
        <h5 class="text-center my-3" >Catálogo {{ catalogPicked }}</h5>
        <component :is="namecp" v-bind:catalogPicked="catalogPicked"></component>
        <!-- <h1>listagem papai {{title}} {{namecp}} </h1> -->
        <!-- <List :my-props="myProps" />   -->
    </section>
</template>
