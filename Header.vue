<template>
  <header id="header">
     <router-link to="/" exact>Filmaria</router-link>
     <router-link tag="button" to="/salvos" exact class="meusfilmes">SALVOS</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  #header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;
  }

  #header a{
    text-decoration: none;
    font-size: 30px;
    color: #FFF;
    cursor: pointer;
  }

  button{
    cursor: pointer;
    border:0;
    background: #FFF;
    padding: 5px 15px;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }
</style>