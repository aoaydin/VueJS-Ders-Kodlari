const { createApp } = Vue

        // createApp fonksiyonu ile yeni bir Vue uygulaması oluşturuyoruz.
        // data fonksiyonu ile uygulamanın kullanacağı verileri tanımlıyoruz.
        // message adlı bir veri oluşturup değerini 'Vue!' olarak atıyoruz.
        createApp({
            data() {
                return {
                    message: 'Vue!'
                }
            }
        }).mount('#App') // mount fonksiyonu ile uygulamayı HTML elemanına bağlıyoruz.