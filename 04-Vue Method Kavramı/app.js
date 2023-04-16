// Vue uygulaması oluşturuyoruz ve app değişkenine atıyoruz
const app = Vue.createApp({
  // Uygulamanın HTML şablonunu belirliyoruz
  // H2 etiketi ile başlık gösteriyoruz. Çift süslü parantez içindeki baslik verisini kullanıyoruz
  // H3 etiketi ile içerik gösteriyoruz. Çift süslü parantez içindeki icerik verisini kullanıyoruz
  // P etiketi ile yorum sayısı gösteriyoruz. Çift süslü parantez içindeki yorumSayisi verisini kullanıyoruz
  // Button etiketi ile bir buton oluşturuyoruz. v-on:click direktifi ile butona tıklandığında ekle metodunu çağırıyoruz
  // P etiketi ile yazı verisini gösteriyoruz. Çift süslü parantez içindeki yazi verisini kullanıyoruz
  template: `
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}} </h3>
    <p>Yorum Sayısı: {{yorumSayisi}}</p> 
    <button v-on:click="ekle()">Yorum Ekle</button>
    <p>{{yazi}}</p>
    `,
  // Uygulamanın verilerini tanımlıyoruz. Bir fonksiyon olarak döndürüyoruz
  data() {
    return {
      // Baslik verisi bir string olarak tanımlanıyor
      baslik: "Vue Dersi",
      // Icerik verisi bir string olarak tanımlanıyor
      icerik: "Vue 3 Konuları",
      // YorumSayisi verisi bir sayı olarak tanımlanıyor
      yorumSayisi: 0,
      // Yazı verisi bir string olarak tanımlanıyor
      yazi: "Yorum Eklemek İçin Tıklayın",
    };
  },
  // Uygulamanın metotlarını tanımlıyoruz. Bir obje olarak döndürüyoruz
  methods: {
    // Ekle metodu uygulamanın verilerini güncellemek için kullanılıyor
    ekle() {
      // YorumSayisi verisini bir arttırıyoruz
      this.yorumSayisi++;
      // Yazı verisini yeni değere göre güncelliyoruz. Ters tırnak içindeki ${this.yorumSayisi} ifadesi ile yorumSayisi verisini kullanıyoruz
      this.yazi = `${this.yorumSayisi} tane yorum girildi.`;
    },
  },
});

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount("#app");
