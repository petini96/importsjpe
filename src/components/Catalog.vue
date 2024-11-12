<script setup>
import Categories from "./Categories.vue";
import CatalogModalList from "./generics/CatalogModalList.vue";

import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import BtnFooter from "./generics/BtnFooter.vue";

const scrollToTop = function () {
  window.scrollTo(0, 0);
}
const makeClass = (count) =>{
  return "delay-"+ count.toString();
 }
const foo = ref(1);
const categories = {
  Categories: [
    {
      description: "SELEÇÕES EUROPEIAS",
      namecp: "SelecoesEuropeias",
      photo: "https://upload.wikimedia.org/wikipedia/pt/1/17/UEFA_logo.svg.png",
      link: "/catalogo/",
    },
    {
      description: "SELEÇÕES AMERICANAS",
      namecp: "SelecoesAmericanas",
      photo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/65.png",
      link: "/catalogo/",
    },
    {
      description: "SELEÇÕES AFRICANAS E ASIÁTICAS",
      namecp: "SelecoesAfricanasEAsiaticas",
      photo:
        "https://1.bp.blogspot.com/-MnwjKTiXaxQ/WHjNG4tbBUI/AAAAAAABH6g/QXeCsdWN0N4rbHzlZtb_xXCvj1XPZ373ACLcB/s1600/B%2B-%2BSENEGAL.png",
      link: "/catalogo/",
    },
    {
      description: "LA LIGA",
      namecp: "LaLiga",
      photo:
        "https://www.freelogovectors.net/wp-content/uploads/2020/08/laligalogo.png",
      link: "/catalogo/",
    },
    {
      description: "PREMIERE LEAGUE",
      namecp: "PremiereLeague",
      photo:
        "https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png",
      link: "/catalogo/",
    },
    {
      description: "CAMPEONATO BRASILEIRO",
      namecp: "Brasileiro",
      photo:
        "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
      link: "/catalogo/",
    },
    {
      description: "ITÁLIA - SÉRIE A",
      namecp: "ItaliaSerieA",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Serie_A.png/2048px-Serie_A.png",
      link: "/catalogo/",
    },
    {
      description: "FRANÇA - LIGUE 1",
      namecp: "FrancaSerieA",
      photo:
        "https://3.bp.blogspot.com/-O8oZ0Y3FOZM/WvIGDgiYVeI/AAAAAAAAO5I/Ws5bCPRVY683y0jQ9s504mY8z-Tw4GqSwCLcBGAs/s1600/France_national_football_team_logo_%2528EURO_2016%2529.png",
      link: "/catalogo/",
    },
    {
      description: "BUNDESLIGA",
      namecp: "Bundesliga",
      photo:
        "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/10.png",
      link: "/catalogo/",
    },
    {
      description: "OUTROS CLUBES",
      namecp: "OutrosClubes",
      photo:
        "https://1.bp.blogspot.com/-WDgbVi-6AsY/X_B784lLaXI/AAAAAAAB9EQ/HUUO5mol58w8zyouk11iJDxyb-dQh9aewCLcBGAsYHQ/s500/FIFA%2BHD.png",
      link: "/catalogo/",
    },
  ],
};
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-md-center">
      <!-- @click="() => handleClick('Vamos jantar a edmara uai so!')" -->
      <CatalogModalList class="col-md-5" v-for="(category, index) in categories.Categories" 
        :description=category.description
        :photo=category.photo 
        :namecp=category.namecp
        :count=index
        data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="handleChoice(category.description,category.namecp)"
        />

    </div>
    <div class="row justify-content-end align-items-center">

      <BtnFooter></BtnFooter>
       
    </div>
  </div>
</template>

<script>
export default {
  
  methods: {
    handleChoice(description, componentName) {
      this.$store.commit('sleepBG')
      this.$store.commit('setLeagueTitle', description)
      this.$store.commit('setLeaguePicked', componentName)
    },
  },
};
</script>

<style>
.box-button {
  position: relative;
  /* float: right; */
  background-color: rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ffc100;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.box-button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 2em;

}

.box-button span i {

  color: #ffc100;
}


h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
