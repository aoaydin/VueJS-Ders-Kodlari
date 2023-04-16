// Vue'dan createApp fonksiyonunu içe aktarıyoruz
const app = Vue.createApp({

  // template: `
  // <ul>
  // <li v-for="gun in gunler">{{gun}}</li>
  // </ul>    
  //  `,



  // ul etiketi ile bir liste oluşturuyoruz
 // v-for direktifi ile persons verisindeki her bir eleman için bir li etiketi oluşturuyoruz
  template: `
  <ul>
  <li v-for="person in persons">Personel Adı: {{person.isim}} - Personel Birimi:{{person.birim}}</li>
  </ul>    
    `,
  data() {
    return {
      //gunler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],


      // persons adında bir veri tanımlıyoruz
      // persons verisi bir dizi içinde nesnelerden oluşuyor
      // her nesne personel adı ve birimi bilgilerini içeriyor
      persons: [
        {isim:"Ayça", birim:"Muhasebe"},
        {isim:"Ayhan", birim:"Personel"},
        {isim:"Hakan", birim:"Yönetici"},

      ]
    };
  },

  methods: {
    // methods seçeneği ile uygulamanın fonksiyonlarını tanımlayabiliriz
    // şu anda herhangi bir fonksiyon tanımlamadık
  },
});

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount("#app");