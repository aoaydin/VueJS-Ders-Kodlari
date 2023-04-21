<template>
  <form>
    <input type="text" v-model="text"/>
    <p>{{ text }}</p>
    <select v-model="yazilim">
      // option kısmında value değeri bulunmuyorsa içerik value değeri bulunuyorsa value değeri ekrana yazılır.
      <option>Vue</option>
      <option value="1">React</option>
      <option value="2">Angular</option>
      <option value="3">Node</option>
      <option value="4">PHP</option>
      <option value="5">SQL</option>
      <option value="6">HTML</option>
    </select>
    <p>{{ yazilim }}</p>
    <hr>
    <button ref="clean" @click="clean">Temizleme Butonu</button>
    <hr>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <label for="checkbox1">Onay Kutusu</label>
    <p>Sonuç :{{ checked ? "Onaylıyorum" : "onaylamıyorum"}}</p>
    <hr>
    <h3>Öğrenci Kayıt</h3>
    <input type="text" v-model="ogrenci" @keyup.ctrl="addOgrenci"/>
    <div v-for="ogrenci in ogrenciler" :key="ogrenci">
    <span @click="ogrenciSil(ogrenci)">{{ogrenci}}</span>
    </div>
  </form>
</template>

<script>
export default {
data(){
    return{
        text:"",
        yazilim:"",
        checked:false,
        ogrenciler:[],
        ogrenci:""
    }
},

methods:{
  clean(){
    this.text = "";
    this.yazilim = "";
    this.checked=false;
  }
},
methods:{
  addOgrenci(e){
    if(e.key == "," && this.ogrenci){
    if(!this.ogrenciler.includes(this.ogrenci)){
      this.ogrenciler.push(this.ogrenci);
    }
      this.ogrenci = "";
    }
  },
  ogrenciSil(ogrenci){
    this.ogrenciler = this.ogrenciler.filter(item => ogrenci !== item)
  }
}

}
</script>

<style>

</style>


