<template>
    <div class="about">
        <h1>Correios</h1>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>

<script>
var raw = "{\r\n    \"code\": \"ON931559908BR\",\r\n    \"type\": \"LS\"\r\n}";

var requestOptions = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    body: raw,
    redirect: 'follow',
    
};

fetch("https://cors-anywhere.herokuapp.com/https://correios-v2.contrateumdev.com.br/api/rastreio", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
</script>
  