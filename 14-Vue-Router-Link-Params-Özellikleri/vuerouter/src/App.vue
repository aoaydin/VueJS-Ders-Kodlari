<template>
  <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link :to="{name:'ogrenci'}">Öğrenci</router-link>
  </nav>
  <diV>
    <span @click="anasayfa">Anasayfa</span>|
    <span @click="ileri">İleri</span>|
    <span @click="geri">Geri</span>
  </diV>
  <router-view/>
</div>
</template>
<script>
export default {
  methods: {
    anasayfa(){
      this.$router.push({path:'/'})
    },
    ileri(){
      this.$router.go(1)
    },
    geri(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

span{
  padding: 20px;
  cursor: pointer;
}
</style>
