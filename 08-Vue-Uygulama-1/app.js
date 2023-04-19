// Vue'dan createApp fonksiyonunu içe aktarıyoruz
const app = Vue.createApp({
  // template özelliği ile HTML yapısını tanımlıyoruz
  // v-for direktifi ile yazilim dizisindeki her bir öğeyi y değişkeni ile temsil ediyoruz
  // class bağlama ile y.selected değerine göre list ve selected sınıflarını atıyoruz
  // click olayı ile selecTeg metodu çağırıyoruz ve y parametresini gönderiyoruz
  // y.name değerini çift süslü parantez ile ekrana yazdırıyoruz
  // v-for direktifi ile selecTegs hesaplanmış özelliğindeki her bir öğeyi s değişkeni ile temsil ediyoruz
  // s.name değerini çift süslü parantez ile ekrana yazdırıyoruz
  template:`
  <h2>Yazılım Dilleri</h2>
  <ul>
  <li v-for="y in yazilim" class="list" :class="{selected:y.selected}" @click="selecTeg(y)">{{y.name}}</li>
  </ul>
  <h3>Seçilen Yazılım Dilleri</h3>
  <ul>
  <li v-for="s in selecTegs">{{s.name}}</li>
  </ul>
  `,
  // data özelliği ile uygulama verilerini tanımlıyoruz
  data() {
    return {
      // yazilim dizisi içinde yazılım dillerinin adlarını ve seçilme durumlarını tutuyoruz
      yazilim: [
        { name: "Python", selected: false },
        { name: "C#", selected: false },
        { name: "Java", selected: false },
        { name: "Vue.js", selected: false },
        { name: "React.js", selected: false },
        { name: "Node.js", selected: false },
        { name: "PHP", selected: false },
        { name: "C++", selected: false }
      ]
    };
  },

  // methods özelliği ile uygulama metodlarını tanımlıyoruz
  methods: {
    // selecTeg metodu bir yazilim parametresi alıyor ve onun selected özelliğini tersine çeviriyor
    selecTeg(yazilim) {
      
      yazilim.selected =!yazilim.selected;
    },
  },
  // computed özelliği ile hesaplanmış uygulama verilerini tanımlıyoruz
  computed:{
    // selecTegs hesaplanmış özelliği yazilim dizisindeki seçilen öğeleri filtreleyerek döndürüyor
    selecTegs(){
    
      return this.yazilim.filter(y => y.selected)
    }
  }
});

// Uygulamayı #app id'li HTML elemanına bağlıyoruz
app.mount("#app");