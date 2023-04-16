// Vue uygulaması oluşturmak için createApp fonksiyonunu kullanıyoruz
// Fonksiyonun parametresi olarak bir nesne veriyoruz
// Bu nesne Vue uygulamasının seçeneklerini içeriyor
// Bu örnekte sadece template seçeneğini kullanıyoruz
// Template seçeneği Vue uygulamasının görünümünü tanımlayan HTML şablonunu içeriyor
const app = Vue.createApp({
    template:'<h1>İlk Uygulama</h1>'
});

// Oluşturduğumuz Vue uygulamasını bir HTML elemanına bağlamak için mount fonksiyonunu kullanıyoruz
// Fonksiyonun parametresi olarak bağlanacak HTML elemanının id'sini veriyoruz
// Bu örnekte id'si "App" olan bir div elemanına bağlıyoruz
app.mount('#App')