<template>
  <div>
    <h1>Öğrenci Listesi</h1>
    <div v-for="ogrenci in ogrenciler" :key="ogrenci.id">
    <router-link :to="{path:`/ogrenciler/${ogrenci.id}`}"> {{ ogrenci.adi }} </router-link>
   //name <router-link :to="{name:'ogrencibilgi',params:{id:ogrenci.id}}"> {{ ogrenci.adi }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        ogrenciler: [
            {id:1, adi:"Leman", not:85},
            {id:2, adi:"Ahmet", not:77},
            {id:3, adi:"Ali", not:65},
            {id:4, adi:"Hasan", not:60},
            {id:5, adi:"Hüseyin", not:90},
            {id:6, adi:"Fatma", not:88},
            {id:7, adi:"Ayşe", not:56},
        ]
    }
}
}
</script>

<style>

</style>