// Vue'dan createApp fonksiyonunu içe aktarıyoruz
const app = Vue.createApp({

  // v-if komutu ile showInfo verisi true ise ilk div'i gösteriyoruz
  // v-show direktifi ile showInfo verisi false ise ikinci div'i gösteriyoruz
  // @click ile btnid metodunu çağırıyoruz
  // v-else ile showInfo verisine göre butonun içindeki yazıyı değiştiriyoruz
  // v-show gizli olsa dahi dom yapısında görünmekte iken v-if dom kısmında gözükmemektedir.
  template: `
  <div v-if="showInfo">Örnek Yazı</div>
  <div v-show="!showInfo">Örnek Yazı 2</div>
  <button @click="btnid">
  <span v-if="!showInfo">İlk yazı</span>
  <span v-else>İkinci Yazı</span>
  </button>
    
    `,
  data() {
    return {
     // showInfo adında bir veri tanımlıyoruz
     showInfo: true,
    };
  },

  methods: {
    // btnid adında bir metod tanımlıyoruz
    btnid() {
      // showInfo verisini tersine çeviriyoruz
      this.showInfo =!this.showInfo;
    },
  },
});

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount("#app");



//Not : v-show direktifi, DOM'da var olan öğeleri gizleyip göstererek görünürlüğü değiştirir, ancak öğeleri tamamen DOM'dan kaldırmaz.
//v-if direktifi DOM'da var olup olmadığını kontrol ederek öğeleri tamamen ekler veya kaldırırken, v-show direktifi sadece öğelerin görünürlüğünü değiştirir.