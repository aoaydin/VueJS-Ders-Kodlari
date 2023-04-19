// Vue'dan createApp fonksiyonunu içe aktarıyoruz
const app = Vue.createApp({
  // <div v-bind:style="style">Bu Alandaki yazıyı Yeşile data kısmından çevireceğiz</div>
  // Kodu yukarıda yazıldığı şekilde veya aşağıda kod içerisindeki kısımda oluğu gibi kullanabiliriz
  // bu komut etiketler içerisinde style düzenlemeleri için kullanılmaktadır.
  template:`
  <div :style="style">Bu Alandaki yazıyı Yeşile data kısmından çevireceğiz</div>
  `,
  data() {
    return {
      //style fonksiyonu içerisinde belirtildiği gibi ; koyularak ek stiller uyğulanabilir
      style:"font-size:32px;color:green"
    };
  },

  methods: {

  },
});

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount("#app");