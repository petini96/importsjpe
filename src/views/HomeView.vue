<script setup>
import BoleradaCarrousel from '../components/BoleradaCarrousel.vue';
import MiniProductCard from '../components/MiniProductCard.vue';

const products = [
  {
    description: "Iphone 16",
    photo: "https://reidocelular.com.br/wp-content/uploads/2024/09/Sem-2024-11-09T060243.299.png",
    link: "iphone-16"
  },
  {
    description: "Iphone 16 Pro",
    photo: "https://www.goimports.com.br/image/catalog/0%20novos%20produtos%202024/iphone16/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium.png",
    link: "iphone-16-pro"
  },
  {
    description: "Iphone 16",
    photo: "https://reidocelular.com.br/wp-content/uploads/2024/09/Sem-2024-11-09T060243.299.png",
    link: "iphone-16"
  },
  {
    description: "Iphone 16 Pro",
    photo: "https://www.goimports.com.br/image/catalog/0%20novos%20produtos%202024/iphone16/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium.png",
    link: "iphone-16-pro"
  }
];

</script>

<template>
  <section id="corrousel">
    <div class="row justify-content-center">
      <BoleradaCarrousel :posts="posts" />
    </div>
  </section>

  <section id="mini-products">
    <div class="container my-5">
      <div class="row justify-content-center">
        <MiniProductCard
          v-for="(product, index) in products"
          :key="index"
          :description="product.description"
          :photo="product.photo"
          :link="product.link"
        />
      </div>
    </div>
  </section>

  <section id="marketing">
    <div class=" text-white p-2 text-center">
      <strong>FORMAS DE PAGAMENTO: <span class="text-warning">DINHEIRO | PIX | BOLETO | CARTÃO </span> </strong>
    </div>
  </section>

  <section>
    <div class="container my-5">
      <div class="row justify-content-center ">
        <div class="col-10 col-md-8 col-lg-5">
          <h1>• IMPORTS JPE</h1>
          <h4>Seu próximo celular a um clique: tecnologia de ponta, preços imbatíveis!</h4>
          <p>Celulares e eletrônicos em geral</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    BoleradaCarrousel,
  },
  data() {
    return {
      posts: [
        {
          media: '/src/assets/flyer-bolerada.jpg',
          title: 'Seu Celular Ideal: Desempenho e Estilo!',
          description: 'Encontre o Celular Perfeito para Você: Desempenho, Estilo e Inovação ao Seu Alcance!',
          order: 0
        },
        {
          media: '/src/assets/flyer-bolerada-2.jpg',
          title: 'O Celular dos Seus Sonhos!',
          description: 'Desempenho, Estilo e Tecnologia em um Só Lugar. Encontre o Seu!',
          order: 1
        }
      ],
    };
  },
};
</script>
<style>
.zoom-in:hover {
  padding: 10px;
  transition: 0.3s;
}

.bolerada-bg-black {
  background-color: #1c1c1c94 !important;
  color: white;

}

.bolerada-bg-black:hover {
  padding: 10px;
  transition: 0.3s;
}

.text-icon {
  display: inline;
}

li {
  list-style: none;
}

.my-menu svg {
  width: 30px;
  position: fixed;
  z-index: 1;
  color: white;
  fill: #FFC100;
}

h1 {
  font-size: 3.5em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


#figure {
  animation: borderAnimate 2s infinite;
}

@keyframes borderAnimate {
  0% {
    border: #0000 solid;
  }

  50% {
    border: #ffc100 solid;
  }

  100% {
    border: #0000 solid;
  }
}

.my-video2 {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  border: solid white 1px;
}

.catalogo-option {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
}

.catalogo-option span {
  font-size: 2em;
  margin-right: 5%;
  color: white;
}
</style>
