<template>
<div>
  <h3> {{title}} </h3><br><br>
  <input type="text" ref="name"><br>
  <input type="password" ref="password"><br><br>
  <button @click="login">Giriş</button><br><br>
  <p v-if="isLogin">Giriş Başarılı</p>
  <p v-else>Giriş Başarısız</p>

</div>
</template>

<script>
import { setTransitionHooks } from 'vue';



export default {
  name: 'App',
  data() {
    return {
      title: 'Giriş Paneli',
      name:"admin",
      password: "admin",
      isLogin: false
    }
  },
  methods: {
    login() {
      return
       this.$refs.name.value === this.name && this.$refs.password.value === this.password ? this.isLogin=true : this.isLogin=false;
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
  margin-top: 60px;
}
</style>
