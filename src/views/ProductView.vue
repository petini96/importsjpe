<script setup lang="ts">
import { defineProps, ref } from 'vue';
import axios from 'axios';

// Definindo que o parâmetro 'product' é um objeto necessário
defineProps({
  product: {
    type: Object,
    required: true
  }
});

const currentIndex = ref(0);

const pickPhoto = (index: number) => {
  currentIndex.value = index;
};

const cepOrigem = ref('79092225');
const cepDestino = ref('65066025');
const peso = ref(1); // Peso padrão em kg
const resultadoFrete = ref(null);
const erro = ref(null);
const token = ref('eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MzE5ODU4MTksImlzcyI6InRva2VuLXNlcnZpY2UiLCJleHAiOjE3MzIwNzIyMTksImp0aSI6ImRmYTUzOWEwLWY3MzUtNDRhOS04ZmQ5LTRlN2U1YTU1MjVjOSIsImFtYmllbnRlIjoiUFJPRFVDQU8iLCJwZmwiOiJQRiIsImlwIjoiMjAwLjE2My40OC4xODAsIDE5Mi4xNjguMS4xMzIiLCJjcGYiOiIwNDk0MjE3OTEwNiIsImlkIjoiMDQ5NDIxNzkxMDYifQ.kkcOpEf7WcUFBTKVRfia1WKH2pzzTRPTC4KSwJniOkmIe9eF9ISxYYqInvLzU09iOwUtw3-LoabZtcTuGPrBfNqBf3Egtn6cWbqm0yuTULEHgNDX3rZogeQjsGKVHmbEiNviQvsXLFD3Fz6jRxVNVZ7L3qwgF5y0IwyO8ENUGR53SRHK3ekSWzoYlZkR43d3GAT5w01oNKTPA8aHijiNLtpWCkvy5twAFHFo2Po-bBUwBK8dCtVDTWHSsOn_YssKqLlm1OYtPEOvaY6-QvIbpCiyVr6F2HV3wD1L_8HVM-sRwukuvAGb5q2vifomyGtaPqd9mdZUq4ad5KbVWH2onw');

const calcularFrete = async () => {
  resultadoFrete.value = null;
  erro.value = null;

  // Validação dos campos
  if (!cepOrigem.value || !cepDestino.value || !peso.value) {
    erro.value = 'Por favor, preencha todos os campos.';
    return;
  }

  // Montando os parâmetros para a requisição SOAP
  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                          xmlns:calc="http://tempuri.org/">
           <soapenv:Header/>
           <soapenv:Body>
              <calc:calcPrecoPrazo>
                 <calc:cepOrigem>${cepOrigem.value}</calc:cepOrigem>
                 <calc:cepDestino>${cepDestino.value}</calc:cepDestino>
                 <calc:peso>${peso.value}</calc:peso>
                 <calc:formato>1</calc:formato> <!-- Pacote -->
                 <calc:comprimento>16</calc:comprimento> <!-- Comprimento -->
                 <calc:altura>10</calc:altura> <!-- Altura -->
                 <calc:largura>11</calc:largura> <!-- Largura -->
                 <calc:densidade>0</calc:densidade>
                 <calc:valorDeclarado>0</calc:valorDeclarado>
                 <calc:maoPropria>n</calc:maoPropria>
                 <calc:avisoRecebimento>n</calc:avisoRecebimento>
              </calc:calcPrecoPrazo>
           </soapenv:Body>
        </soapenv:Envelope>`;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://webservice.correios.com.br/calculador/CalcPrecoPrazo.asmx',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Authorization': `Bearer ${token.value}`,
      },
      data: xmlData,
    });

    // Processa a resposta (precisa de parser XML)
    const parser = new DOMParser();
    const xmlResponse = parser.parseFromString(response.data, 'text/xml');

    console.log(xmlResponse);
    // A extração da resposta XML depende da estrutura da API dos Correios.
    const valorFrete = xmlResponse.getElementsByTagName('Valor')[0]?.textContent;
    resultadoFrete.value = `R$ ${valorFrete}`;

  } catch (error) {
    erro.value = 'Erro ao calcular o frete. Verifique os CEPs ou tente novamente.';
    console.error(error);
  }
};
calcularFrete();
</script>

<template>
  <section v-if="product">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-8">
          <div class="col-12 product-viewer">
            <div class="photo">
              <img :src="product.photos[currentIndex]" alt="Imagem do produto" class="img-fluid" />
            </div>
          </div>

          <div class="col-12 row my-3">
            <div v-for="(photo, index) in product.photos" class="col-3 mini-viewer" v-on:click="pickPhoto(index)">
              <img :src="photo" alt="Imagem do produto" class="img-fluid rounded " />
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="info my-5">
            <p>{{ product.productCategory }}</p>
            <h3>{{ product.productBrand }}</h3>
            <p>{{ product.productName }}</p>
          </div>
          <div class="price">
            <p class="old-price">R$ {{ product.originalPrice }} -{{ product.discountPercentage }}</p>
            <p class="new-price">R$ {{ product.discountedPrice }}</p>
            <p>{{ product.installmentsCount }} x R$ {{ product.installmentPrice }}</p>
            <p>{{ product.additionalInfo }}</p>
          </div>
          <div class="actions my-5">
            <p v-if="isSingleSizeAvailable">Tamanho único disponível</p>
            <button class="btn-outline px-5" @click="buyNow">Comprar</button>
            <button class="btn btn-warning mx-3" @click="addToCart">Carrinho</button>
          </div>
        </div>

      </div>
    </div>

  </section>
  <section v-else>
    <p>Produto não encontrado.</p>
  </section>
</template>

<style scoped>
.mini-viewer {
  min-width: 130px;
  max-width: 130px;
}

.product-viewer .photo {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  /* Mantém uma proporção quadrada */
  overflow: hidden;
  /* Garante que a imagem não ultrapasse os limites */
  border-radius: 8px;
  /* Opcional */
}

.product-viewer .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Garante o preenchimento proporcional */
}

.old-price {
  text-decoration: line-through;
  color: gray;
  /* Opcional, para diferenciar do novo preço */
}

.new-price {
  color: red;
  font-weight: bold;
}

.price p {
  margin: 4px 0;
  /* Reduz a margem vertical */
  padding: 0;
  /* Remove o espaçamento interno */
}

.btn-outline {
  background-color: transparent;
  /* Fundo transparente */
  color: white;
  /* Cor do texto */
  border: 2px solid white;
  /* Borda branca */
  padding: 10px 20px;
  /* Espaçamento interno */
  border-radius: 4px;
  /* Bordas arredondadas */
  font-size: 16px;
  /* Tamanho da fonte */
  cursor: pointer;
  /* Mostra o cursor de clique */
  transition: all 0.3s ease;
  /* Animação suave */
}

.btn-outline:hover {
  background-color: white;
  /* Fundo branco ao passar o mouse */
  color: black;
  /* Texto preto para contraste */
  border-color: white;
  /* Mantém a borda branca */
}

.mini-viewer {
  min-width: 130px;
  max-width: 130px;
  max-height: 130px;
  border: 2px solid transparent;
  /* Transição suave ao hover */
  border-radius: 8px;
  /* Cantos arredondados */
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.mini-viewer:hover {
  transform: scale(0.9);
  /* Ampliação ao passar o mouse */
  border: 3px solid rgba(255, 255, 255, 0.6);
  /* Mostra a borda branca */
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
  /* Leve sombra para destacar */
}

.mini-viewer.active {
  border: 3px solid rgba(255, 255, 255, 0.6);
  /* Destaque para a miniatura ativa */
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  /* Destaque adicional */
  transform: scale(0.9);
  /* Mantém o efeito ampliado */
}



/* Estilos opcionais */
</style>
