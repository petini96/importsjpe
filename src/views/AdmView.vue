<script setup>


const scrollToTop = function () {
  window.scrollTo(0, 0);
};
</script>

<template>

  <main>
    <div class="row">
      <div class="col-12">
      </div>
     

      <RouterLink id="figure" to="/adm/products" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-shirt" />
          </span>
          <h4 class="d-inline">PRODUTOS</h4>
        </div>
      </RouterLink>
      
      <RouterLink id="figure" to="/adm/suppliers" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-parachute-box" />
          </span>
          <h4 class="d-inline">FORNECEDORES</h4>
        </div>
      </RouterLink>

      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-qrcode" />
          </span>
          <h4 class="d-inline">QR CORREIOS</h4>
        </div>
      </RouterLink>

      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-person" />
          </span>
          <h4 class="d-inline">CLIENTES</h4>
        </div>
      </RouterLink>

      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-divide" />
          </span>
          <h4 class="d-inline">PARCELAMENTOS</h4>
        </div>
      </RouterLink>

      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </span>
          <h4 class="d-inline">COMPRAS</h4>
        </div>
      </RouterLink>

      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-money-bill-transfer" />
          </span>
          <h4 class="d-inline">CAIXA</h4>
        </div>
      </RouterLink>
      
      <RouterLink id="figure" to="/adm/clients" class="col-12 mb-3">
        <div class="catalogo-option ">
          <span>
            <font-awesome-icon icon="fa-solid fa-list" />
          </span>
          <h4 class="d-inline">PEDIDOS</h4>
        </div>
      </RouterLink>
      
      
    </div>
    
    <div class="row justify-content-end">
      <div class="col-3 text-center ">
        <RouterLink to="/">
          <div class="box-button">
            <span>
              <i class="bi bi-arrow-return-left"></i>
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="col-3 text-center">
        <a v-on:click="scrollToTop()">
          <div class="box-button">
            <span>
              <i class="bi bi-arrow-90deg-up"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>
