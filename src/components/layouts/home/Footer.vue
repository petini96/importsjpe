<script setup>
</script>

<template>
  <footer class="bg-white text-black p-3 w-100 text-center my-10" :class="{ active: isActive, 'desactive': !isActive }">
    <div class="row justify-content-center align-items-start w-100 my-5">
      <div class="col-12 col-md-4">
        <ul>
          <li>
            <h4>Dúvidas frequentes</h4>
            <hr>
          </li>
          <p>Perguntas frequentes</p>
          <p>Devoluções</p>
          <p>Como comprar</p>
        </ul>

      </div>
      <div class="col-12 col-md-4">
        <ul>
          <li>
            <h4>Formas de pagamento</h4>
            <hr>
          </li>
          <p>PIX</p>
          <p>Boleto</p>
          <p>Cartão de crédito</p>
          <p>Outros</p>
        </ul>

      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ul>
          <li>
            <h4>Redes sociais</h4>
            <hr>
          </li>
          <li>
            <a @click="handleRedirectBlankSubmit('https://instagram.com/bolerada67_3.0')">
              <span>
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon-mobile-md" />
                <span class="text-icon mx-3">importsjpe</span>
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
                <font-awesome-icon icon="fa-solid fa-mail-forward" class="icon-mobile-md" />
                <span class="text-icon mx-3">contato@importsjpe.com.br</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<style scoped></style>
