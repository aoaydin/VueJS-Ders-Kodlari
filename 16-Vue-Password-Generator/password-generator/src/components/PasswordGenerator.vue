<template>
  <div>
    <h2>Parola Oluşturucu</h2>
    <div>
      <label for="length">Parola Uzunluğu:</label>
      <input type="number" id="length" v-model="length" />
    </div>
    <div>
      <label for="lowercase">Küçük Harfler:</label>
      <input type="checkbox" id="lowercase" v-model="includeLowercase" />
    </div>
    <div>
      <label for="uppercase">Büyük Harfler:</label>
      <input type="checkbox" id="uppercase" v-model="includeUppercase" />
    </div>
    <div>
      <label for="numbers">Sayılar:</label>
      <input type="checkbox" id="numbers" v-model="includeNumbers" />
    </div>
    <div>
      <label for="symbols">Semboller:</label>
      <input type="checkbox" id="symbols" v-model="includeSymbols" />
    </div>
    <div class="div">
    <button @click="generatePassword">Parola Oluştur</button>
    </div>
    <div>
      <h3>Parolanız:</h3>
      <p>{{ password }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 16,
      includeLowercase: true,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: true,
      password: ""
    };
  },
  methods: {
    generatePassword() {
      let characterList = "";
      let password = "";
      
      // Karakter listesi oluştur
      if (this.includeLowercase) {
        characterList += "abcdefghijklmnopqrstuvwxyz";
      }
      if (this.includeUppercase) {
        characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (this.includeNumbers) {
        characterList += "0123456789";
      }
      if (this.includeSymbols) {
        characterList += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
      }

      // Parolayı oluştur
      for (let i = 0; i < this.length; i++) {
        let randomIndex = Math.floor(Math.random() * characterList.length);
        password += characterList[randomIndex];
      }

      // Parolayı güncelle
      this.password = password;
    }
  }
};
</script>
<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="number"],
input[type="checkbox"] {
  margin-right: 0.5rem;
}

button {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
}

button:hover {
  background-color: #3e8e41;
}

h3 {
  margin-top: 1.5rem;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.div{
  display: flex;
  text-align: center;
}

</style>