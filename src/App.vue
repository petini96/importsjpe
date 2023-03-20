<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Catalog from './components/Catalog.vue'
import Categories from './components/Categories.vue'


</script>

<template>
  <section>
    <div class="sidebar-bolerada" :class="{ animatein: isActive, 'animateout': !isActive }" v-show="ok">
      <li class="mx-auto text-center mb-4">
        <router-link to="/">
        <img src="./assets/OFICIAL.png" alt="" class="img-fluid" width="150" height="150">
        </router-link>
      </li>

      <li class="mx-auto text-center">
        <router-link to="/catalog">
          <span>
            <font-awesome-icon icon="fa-solid fa-shirt" class="icon-mobile-md" />
            <span class="text-icon mx-0"> CATÁLOGO</span>
          </span>
        </router-link>
      </li>
      <li class="mx-auto text-center">
        <a @click="handleWhatsappSubmit">
          <span>
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon-mobile-md" />
            <span class="text-icon mx-0"> CONTATO</span>
          </span>
        </a>
      </li>
      <li class="mx-auto text-center">
        <a @click="handleRedirectBlankSubmit('https://instagram.com/bolerada67_3.0')">
          <span>
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon-mobile-md" />
            <span class="text-icon mx-0"> INSTAGRAM</span>
          </span>
        </a>
      </li>
      <li class="mx-auto text-center">
        <a>
          <span>
            <font-awesome-icon icon="fas fa-thumbs-up" class="icon-mobile-md" />
            <span class="text-icon"> QUALIDADE</span>
          </span>
        </a>
      </li>
      <li class="mx-auto text-center my-5">
        <span @click="showMenuMobile">
          <font-awesome-icon icon="fa-solid fa-bars" />
          <span class="text-icon"> RETORNAR</span>
        </span>
      </li>
    </div>
    <nav class="container-fluid bg-dark rounded p-3 p-md-2 p-lg-0 m-0">
      <ul class="row p-0 m-0 menu-mobile">
        <li class="col-2 p-0 mx-0">
          <span @click="showMenuMobile" class="icon-mobile">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
        </li>
      </ul>
      <ul class="row align-items-center p-0 m-0 menu-desktop">
        <li class="col-2 text-center mb-4">
          <img src="./assets/OFICIAL.png" alt="" class="img-fluid" width="80" height="80">
        </li>
        <li class="col-2 text-center">
          <a to="/catalog">
            <span>
              <font-awesome-icon icon="fa-solid fa-shirt" class="icon-mobile-md" />
              <span class="text-icon mx-0"> CATÁLOGO</span>
            </span>
          </a>
        </li>
        <li class="col-2 text-center">
          <a @click="handleWhatsappSubmit">
            <span>
              <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon-mobile-md" />
              <span class="text-icon mx-0"> CONTATO</span>
            </span>
          </a>
        </li>
        <li class="col-2 text-center">
          <a @click="handleRedirectBlankSubmit('https://instagram.com/bolerada67_3.0')">
            <span>
              <font-awesome-icon icon="fa-brands fa-instagram" class="icon-mobile-md" />
              <span class="text-icon mx-0"> INSTAGRAM</span>
            </span>
          </a>
        </li>
        <li class="col-2 text-center">
          <a>
            <span>
              <font-awesome-icon icon="fas fa-thumbs-up" class="icon-mobile-md" />
              <span class="text-icon"> QUALIDADE</span>
            </span>
          </a>
        </li>

      </ul>
    </nav>
  </section>
  <main :class="{ active: isActive, 'desactive': !isActive }">
    <RouterView />
  </main>
  <footer class="bg-dark p-3 w-100 text-center" :class="{ active: isActive, 'desactive': !isActive }">
    <div class="row justify-content-center align-items-center w-100 m-0">
      <div class="col-7 col-md-4 col-lg-2 text-center">
        <img src="./assets/OFICIAL.png" alt="" class="img-fluid">

      </div>
      <div class="col-12 col-md-4">
        <ul>
          <li>
            <h4>Sobre nós</h4>
            <hr>
          </li>
          <p>Bem-vindo à Bolerada 67, sua loja especializada em camisas de time de futebol em Campo Grande - MS! Oferecemos aos nossos clientes as melhores opções de camisas de times de futebol do Brasil e do mundo, com alta qualidade e preços acessíveis. Com anos de experiência no mercado, nos orgulhamos em fornecer um atendimento personalizado, ágil e eficiente para satisfazer as expectativas de nossos clientes. Venha conhecer nossos produtos em nossa loja ou faça seu pedido online.</p>
        </ul>

      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ul>
          <hr>
          <li>
            <a @click="handleRedirectBlankSubmit('https://instagram.com/bolerada67_3.0')">
              <span>
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon-mobile-md" />
                <span class="text-icon mx-3">bolerada67</span>
              </span>
            </a>
          </li>
          <li>
            <a @click="handleWhatsappSubmit">
              <span>
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon-mobile-md" />
                <span class="text-icon mx-3">Whatsapp</span>
              </span>
            </a>
          </li>
          <li>
            
            <a @click="handleWhatsappSubmit">
              <span>
                <font-awesome-icon icon="fa-solid fa-mail-forward" class="icon-mobile-md"/>
                <span class="text-icon mx-3">bolerada67@gmail.com</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>
 
<script>
export default {
  // props: {
  //   // Using value here allows us to be v-model compatible.
  //   value: File
  // },
  data() {
    return {
      whatsapp: "https://wa.me/556791315938",
      ok: false,
      isActive: false,
    }
  },
  methods: {
    handleWhatsappSubmit(e) {
      var texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo site...";
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp + "?text=" + texto, "_blank");
    },
    handleRedirectBlankSubmit(link) {

      window.open(link, "_blank");
    },
    showMenuMobile() {
      if (this.ok) {
        this.ok = false;
        this.isActive = false;
      } else {
        this.ok = true;
        this.isActive = true;
      }
    },
  }
}

</script>
<style scoped>
 
@media (min-width: 768px) {
  .sidebar-bolerada {

    width: 40% !important;


  }
}

.menu-desktop {
  display: none;
}

@media (min-width: 1024px) {

  .menu-mobile {
    display: none;
  }

  .menu-desktop {
    display: inline-flex;
  }
}

@media (min-width: 2560px) {
  .sidebar-bolerada {

    width: 30% !important;


  }
}

.icon-mobile {
  font-size: 1.8em;
}

.icon-mobile-md {
  font-size: 1.5em;
}

.icon-mobile-md span {
  margin-left: 10px;
}

@keyframes inBoleradaAnimate {
  0% {
    transform: translateX(-200px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes outBoleradaAnimate {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-70%);
  }
}

.animatein {
  animation: inBoleradaAnimate 0.5s;
}

.animateout {
  animation: outBoleradaAnimate 2.5s;
}

.sidebar-bolerada {
  background-image: url("./assets/fundo.jpg");
  background-position: center top;
  background-size: 100% auto;
  min-height: 100vh;
  width: 70%;
  transform: translateX(0px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100% !important;
  z-index: 1;

}

.sidebar-bolerada li:not(:first-of-type, :last-of-type) {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 10px 50px;

  border-radius: 10px;
}

.active {
  filter: blur(1px);
  -webkit-filter: blur(8px);
  transition: 2s;

}

.desactive {
  filter: blur(0px);
  -webkit-filter: blur(0px);
  transition: 1s;
}
</style>