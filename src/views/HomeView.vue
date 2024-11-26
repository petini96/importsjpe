<script setup>
import BoleradaCarrousel from '../components/BoleradaCarrousel.vue';
import MiniProductCard from '../components/MiniProductCard.vue';
import photoCell1 from '/src/assets/flyer-bolerada.jpg';
import photoCell2 from '/src/assets/flyer-bolerada-2.jpg';
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
        <MiniProductCard v-for="(product, index) in products" 
          :key="index"
          :productName="product.productName"
          :productCategory="product.productCategory"
          :productBrand="product.productBrand"
          :originalPrice="product.originalPrice"
          :discountPercentage="product.discountPercentage"
          :discountedPrice="product.discountedPrice"
          :installmentPrice="product.installmentPrice"
          :installmentsCount="product.installmentsCount"
          :additionalInfo="product.additionalInfo"
          :description="product.description"
          :photos="product.photos"
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
      products: [
        {
          productName: "iPhone 16 Pro - Brown",
          productCategory: "Smartphones",
          productBrand: "Apple",
          originalPrice: "R$ 7.999",
          discountPercentage: "10%",
          discountedPrice: "6.999",
          installmentPrice: "R$ 720",
          installmentsCount: "12",
          additionalInfo: "Garanta o seu agora mesmo!",
          description: "iPhone 16 Pro - Brown, design sofisticado e desempenho de ponta.",
          photos: [
            "https://reidocelular.com.br/wp-content/uploads/2024/09/Sem-2024-11-09T060243.299.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FUp9nSAHSFd_VCfz3zihDtnN3RMoBLvEGFFZIWQ6T2Ap1FLB09UaFMpvZODqcLVVnS0&usqp=CAU",
            "https://www.cnet.com/a/img/resize/24f33e2947794c06413c0f3cdf90d36755074186/hub/2023/09/12/01a357c3-9eb9-418f-b485-26a5c602203c/iphone-15-pro-titanium.png?auto=webp&fit=crop&height=1200&width=1200",
            "https://5.imimg.com/data5/SELLER/Default/2024/1/375836308/UP/MK/QR/33769411/lightest-boybgwifuehe-large-2x.jpg"
          ],
          link: "iphone-16"
        },
        {
          productName: "iPhone 16 Pro - Black",
          productCategory: "Smartphones",
          productBrand: "Apple",
          originalPrice: "R$ 8.299",
          discountPercentage: "12%",
          discountedPrice: "7.500",
          installmentPrice: "R$ 750",
          installmentsCount: "12",
          additionalInfo: "Compre agora e aproveite o desconto!",
          description: "A beleza do iPhone 16 Pro com acabamento Black. Performance impressionante.",
          photos: [
            "https://www.goimports.com.br/image/catalog/0%20novos%20produtos%202024/iphone16/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FUp9nSAHSFd_VCfz3zihDtnN3RMoBLvEGFFZIWQ6T2Ap1FLB09UaFMpvZODqcLVVnS0&usqp=CAU",
            "https://www.cnet.com/a/img/resize/24f33e2947794c06413c0f3cdf90d36755074186/hub/2023/09/12/01a357c3-9eb9-418f-b485-26a5c602203c/iphone-15-pro-titanium.png?auto=webp&fit=crop&height=1200&width=1200",
            "https://5.imimg.com/data5/SELLER/Default/2024/1/375836308/UP/MK/QR/33769411/lightest-boybgwifuehe-large-2x.jpg"
          ],
          link: "iphone-16-pro"
        },
        {
          productName: "iPhone 16 Pro - White",
          productCategory: "Smartphones",
          productBrand: "Apple",
          originalPrice: "R$ 8.499",
          discountPercentage: "15%",
          discountedPrice: "8.000",
          installmentPrice: "R$ 790",
          installmentsCount: "12",
          additionalInfo: "Em estoque, entrega rápida!",
          description: "iPhone 16 Pro - White, o smartphone que combina elegância e tecnologia.",
          photos: [
            "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-19029-zero.png?context=bWFzdGVyfGltYWdlc3w3NDI5NHxpbWFnZS9wbmd8YURsakwyZ3hPUzh4TURJeU1UUTVOak13TXpZME5pOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRrd01qbGZlbVZ5Ynk1d2JtY3xiZWI3ZjAzYzcwNzMyMjRkNWQxMzFhNGI1Y2Y3ODVjZTY4OTc2ZDkyYmEzNGE0MDA3ZTk5NTFmN2E4NGM3Y2Rl",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FUp9nSAHSFd_VCfz3zihDtnN3RMoBLvEGFFZIWQ6T2Ap1FLB09UaFMpvZODqcLVVnS0&usqp=CAU",
            "https://www.cnet.com/a/img/resize/24f33e2947794c06413c0f3cdf90d36755074186/hub/2023/09/12/01a357c3-9eb9-418f-b485-26a5c602203c/iphone-15-pro-titanium.png?auto=webp&fit=crop&height=1200&width=1200",
            "https://5.imimg.com/data5/SELLER/Default/2024/1/375836308/UP/MK/QR/33769411/lightest-boybgwifuehe-large-2x.jpg"
          ],
          link: "iphone-16"
        },
        {
          productName: "iPhone 16 Pro - Pink",
          productCategory: "Smartphones",
          productBrand: "Apple",
          originalPrice: "R$ 7.999",
          discountPercentage: "8%",
          discountedPrice: "6.800",
          installmentPrice: "R$ 710",
          installmentsCount: "12",
          additionalInfo: "Não perca essa oferta!",
          description: "iPhone 16 Pro - Pink, o celular que combina estilo e inovação.",
          photos: [
            "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-19003-zero.png?context=bWFzdGVyfGltYWdlc3w4NTM2OXxpbWFnZS9wbmd8YURZd0wyaG1PUzh4TURJeU1USTNNemN4TURZeU1pOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRrd01ETmZlbVZ5Ynk1d2JtY3w3NmY5YmY5MmFhNWVjMzJlYzNiNTUyY2U2NmM5OTZiYzliYjEwYmE2MGFhZjZlODU3NWFjYjJkMmMzM2VhY2Zj",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FUp9nSAHSFd_VCfz3zihDtnN3RMoBLvEGFFZIWQ6T2Ap1FLB09UaFMpvZODqcLVVnS0&usqp=CAU",
            "https://www.cnet.com/a/img/resize/24f33e2947794c06413c0f3cdf90d36755074186/hub/2023/09/12/01a357c3-9eb9-418f-b485-26a5c602203c/iphone-15-pro-titanium.png?auto=webp&fit=crop&height=1200&width=1200",
            "https://5.imimg.com/data5/SELLER/Default/2024/1/375836308/UP/MK/QR/33769411/lightest-boybgwifuehe-large-2x.jpg"
          ],
          link: "iphone-16-pro"
        }
      ],
      posts: [
        {
          media: photoCell1,
          title: 'Seu Celular Ideal: Desempenho e Estilo!',
          description: 'Encontre o Celular Perfeito para Você: Desempenho, Estilo e Inovação ao Seu Alcance!',
          order: 0
        },
        {
          media: photoCell2,
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
