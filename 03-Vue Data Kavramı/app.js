// Vue uygulaması oluşturuyoruz ve app değişkenine atıyoruz
const app = Vue.createApp({
    // Uygulamanın HTML şablonunu belirliyoruz
    // H2 etiketi ile başlık gösteriyoruz. Çift süslü parantez içindeki baslik verisini kullanıyoruz
    // H3 etiketi ile içerik gösteriyoruz. Çift süslü parantez içindeki icerik verisini kullanıyoruz 
    // P etiketi ile yorum sayısı gösteriyoruz. Çift süslü parantez içindeki yorumSayisi verisini kullanıyoruz
    template:`
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}} </h3>
    <p>Yorum Sayısı: {{yorumSayisi}}</p> 
    `,
    // Uygulamanın verilerini tanımlıyoruz. Bir fonksiyon olarak döndürüyoruz
    data(){
        return {
            // Baslik verisi bir string olarak tanımlanıyor
            baslik:'Vue Dersi',
            // Icerik verisi bir string olarak tanımlanıyor
            icerik:'Vue 3 Konuları',
            // YorumSayisi verisi bir sayı olarak tanımlanıyor
            yorumSayisi: 100
        }
    }
})

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount('#app')