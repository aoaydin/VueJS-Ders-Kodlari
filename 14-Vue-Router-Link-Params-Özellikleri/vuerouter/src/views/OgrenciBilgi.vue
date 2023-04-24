<template>
  <div>
    <h3>Öğrenci Bilgileri Sayfası</h3>
    <p> Öğrenci ID Bilgisi {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            ogrenciID: this.$route.params.id
        }
    }

}
</script>

<style>

</style>